//variables
const formulario = document.querySelector('#agregar-gasto');
const gastosListado = document.querySelector('#gastos ul');







//eventListeners
eventListeners();

function eventListeners(){

	document.addEventListener('DOMContentLoaded', pedirPresupuesto);
	formulario.addEventListener('submit', agregarGasto);

}



//classes
class Presupuesto{
	constructor(presupuesto){
		this.presupuesto = Number(presupuesto);
		this.restante = Number(presupuesto);
		this.gastos = [];
	}

	nuevoGasto(gasto){
		this.gastos = [...this.gastos, gasto];
		this.calcularRestante();
	}
	calcularRestante(){
		const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
		this.restante = this.presupuesto - gastado;
		console.log(this.restante);
	}
	eliminarGastos(id){
		this.gastos = this.gastos.filter(gasto => gasto.id !== id);
		this.calcularRestante();
	}

}

class UI {

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
		}, 2500);

	}


	mostrarGasto(gastos){

		this.limpiarHTML();

		gastos.forEach(gasto => {

			const gastoLista = document.createElement('li');
			gastoLista.dataset.id = gasto.id;
			gastoLista.innerHTML = `${gasto.nombre} -- ${gasto.cantidad}`;
			gastosListado.appendChild(gastoLista);

			const btnELiminar = document.createElement('button');
			btnELiminar.textContent = 'Eliminar X';
			btnELiminar.classList.add('btn__eliminar');
			btnELiminar.onclick = () => {
				eliminarGasto(gasto.id);
			}

			gastoLista.appendChild(btnELiminar);

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

	comprobarRestante(presupuestoObj){

		const divRestante = document.querySelector('.restante')

		if((presupuestoObj.presupuesto / 4) > presupuestoObj.restante){
			divRestante .classList.add('danger');
			divRestante .classList.remove('success', 'warning');
		}else if((presupuestoObj.presupuesto / 2) > presupuestoObj.restante){
			divRestante.classList.add('warning');
			divRestante.classList.remove('success', 'danger'); 
		}else{
			divRestante.classList.remove('warning', 'danger');
			divRestante.classList.add('success');
		}

		if(presupuestoObj.restante <= 0){
			ui.mostrarAlerta('Gastaste todo el presupuesto', 'error');
			formulario.querySelector('button[type="submit"]').disabled = true;
		}else{
			formulario.querySelector('button[type="submit"]').disabled = false;
		}

	}

}

const ui = new UI();

let presupuesto;

///funciones
function pedirPresupuesto(){

	const presupuestoUsuario = prompt('Cual es tu presupuesto');

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

	if(nombre === '' || cantidad === ''){
		ui.mostrarAlerta('Todos los campos son obligatorios', 'error');
		return;
	}else if(cantidad <= 0 || isNaN(cantidad)){
		ui.mostrarAlerta('Cantidad no Valida', 'error')
		return;
	}

	const gasto = {
		nombre: nombre,
		cantidad: cantidad,
		id: Date.now()
	}

	presupuesto.nuevoGasto(gasto);
	ui.mostrarAlerta('Gasto Añadido Correctamente');

	const {gastos, restante} = presupuesto;

	ui.mostrarGasto(gastos);
	
	ui.actualizarRestante(restante);

	ui.comprobarRestante(presupuesto);

	formulario.reset();
}


function eliminarGasto(id){
	presupuesto.eliminarGastos(id);

	ui.mostrarGasto(presupuesto.gastos);
	
	ui.actualizarRestante(presupuesto.restante);

	ui.comprobarRestante(presupuesto);


}