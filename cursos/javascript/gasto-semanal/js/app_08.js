//variables
const formulario = document.querySelector('#agregar-gasto');
const gastosListado = document.querySelector('#gastos ul')


//eventListeners
eventListeners();

function eventListeners(){

	document.addEventListener('DOMContentLoaded', pedirPresupuesto);
	formulario.addEventListener('submit', agregarGasto);
}



//clasess
class Presupuesto{
	constructor(presupuesto){
		this.presupuesto = Number(presupuesto);
		this.restante = Number(presupuesto);
		this.gastos = [];
	}
	nuevoGasto(gasto){
		this.gastos = [...this.gastos, gasto];
		console.log(this.gastos);
		this.calcularRestante();
	}
	calcularRestante(){
		const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
		this.restante = this.presupuesto - gastado;
	}
	eliminarGastos(id){
		this.gastos = this.gastos.filter(gasto => gasto.id !== id);
		this.calcularRestante();
	}

}

class UI{
	insertarPresupuesto(cantidad){
		document.querySelector('#total').textContent = cantidad.presupuesto;
		document.querySelector('#restante').textContent = cantidad.restante;
	}
	mostrarAlerta(mensaje, tipo){
		const divMensaje = document.createElement('div');

		if(tipo === 'error'){
			divMensaje.classList.add('mensaje__error');
		}else{
			divMensaje.classList.add('mensaje__success');
		}

		divMensaje.textContent = mensaje;

		document.querySelector('.primario').insertBefore(divMensaje, formulario);

		setTimeout(() => {
			divMensaje.remove();
		}, 2500)

	}

	mostrarGastos(gastos){

		this.limpiarHTML();

		gastos.forEach(gasto => {

		const gastoItem = document.createElement('li');
		gastoItem.dataset.id = gasto.id;
		gastoItem.innerHTML = `
			${gasto.nombre} -- ${gasto.cantidad}
		`;

		const btnEliminar = document.createElement('button');
		btnEliminar.classList.add('btn__eliminar');
		btnEliminar.textContent = 'Eliminar X';
		btnEliminar.onclick = () => {
			eliminarGasto(gasto.id);
		}

		gastoItem.appendChild(btnEliminar);


		gastosListado.appendChild(gastoItem);

		})

		
		
	}


	limpiarHTML(){
		while(gastosListado.firstChild){
			gastosListado.removeChild(gastosListado.firstChild);
		}
	}


	actualizarRestante(restante){
		document.querySelector('#restante').textContent = restante;
	}

	actualizarPresupuesto(presupuestoObj){
		const divRestante = document.querySelector('.restante');
		const {presupuesto , restante} = presupuestoObj;

		if((presupuesto / 4) > restante){
			divRestante.classList.add('danger');
			divRestante.classList.remove('success', 'warning');
		}else if((presupuesto / 2) > restante){
			divRestante.classList.add('warning');
			divRestante.classList.remove('success', 'danger');
		}else{
			divRestante.classList.add('success');
			divRestante.classList.remove('warning', 'danger');
		}


		if(restante <= 0){
			ui.mostrarAlerta('Se agoto el presupuesto', 'error');
			formulario.querySelector('button[type="submit"]').disabled = true;
		}else{
			formulario.querySelector('button[type="submit"]').disabled =false;
		}

	}

}


const ui = new UI();

let presupuesto;

//funciones
function pedirPresupuesto(){

	const presupuestoUsuario = prompt('cual es tu presupuesto ?')

	if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
		window.location.reload();
	}


	presupuesto = new Presupuesto(presupuestoUsuario);



	ui.insertarPresupuesto(presupuesto);



	console.log(presupuesto);


}


function agregarGasto(e){
	e.preventDefault();

	const nombre = document.querySelector('#gasto').value;
	const cantidad = Number(document.querySelector('#cantidad').value);

	//validamos

	if(nombre === '' || cantidad === ''){
		ui.mostrarAlerta('Todos los campos son obligatorios', 'error');
		return;
	}else if(cantidad <= 0 || isNaN(cantidad)){
		ui.mostrarAlerta('Cantidad no Valida', 'error');
		return;
	}

	const gasto = {
		nombre: nombre,
		cantidad: cantidad,
		id: Date.now()
	}

	ui.mostrarAlerta('gasto agregado correctamente');


	presupuesto.nuevoGasto(gasto);

	ui.mostrarGastos(presupuesto.gastos);

	ui.actualizarRestante(presupuesto.restante);

	ui.actualizarPresupuesto(presupuesto);

	formulario.reset();

}


function eliminarGasto(id){
	presupuesto.eliminarGastos(id);

	ui.mostrarGastos(presupuesto.gastos);

	ui.actualizarRestante(presupuesto.restante);

	ui.actualizarPresupuesto(presupuesto);

}