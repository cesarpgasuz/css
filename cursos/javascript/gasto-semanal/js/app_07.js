//variables
const formulario = document.querySelector('#agregar-gasto');
const gastosListado = document.querySelector('#gastos ul');

//////////////// 17............ 2 en adelante //////////////////////


//eventListeners
enventListeners();

function enventListeners() {
	
	document.addEventListener('DOMContentLoaded', pedirPresupuesto);
	formulario.addEventListener('submit', agregarGastos);
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
		console.log(this.gastos);
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

class UI{

	mostrarPresupuesto(cantidad){
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

		},2500)


	}

	mostrarGastos(gastos){
		
		this.limpiarHTML();

		gastos.forEach(gasto => {
			const gastoLista = document.createElement('li');
			gastoLista.innerHTML = `${gasto.nombre} -- ${gasto.cantidad}`;
			gastoLista.dataset.id = gasto.id;
			const btnEliminar = document.createElement('button');
			btnEliminar.textContent = 'Eliminar X';
			btnEliminar.classList.add('btn__eliminar');
			btnEliminar.onclick = () => {
				eliminarGasto(gasto.id);
			}

			gastoLista.appendChild(btnEliminar);

			gastosListado.appendChild(gastoLista);

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

		const {presupuesto, restante} = presupuestoObj;
		const divRestante = document.querySelector('.restante');

		if((presupuesto / 4) > restante){
			divRestante.classList.add('danger');
			divRestante.classList.remove('success', 'warning');
		}else if((presupuesto / 2) > restante){
			divRestante.classList.add('warning');
			divRestante.classList.remove('danger', 'success');
		}else{
			divRestante.classList.remove('danger', 'warning');
			divRestante.classList.add('success');
		}

		if(restante <= 0){
			document.querySelector('button[type="submit"]').disabled = true;
			ui.mostrarAlerta('Te has terminado el presupuesto', 'error');
		}else{
			document.querySelector('button[type="submit"]').disabled = false;
		}


	}


}


const ui = new UI();

let presupuesto;

//funciones
function pedirPresupuesto(){

	const presupuestoUsuario = prompt('Cual es tu presupuesto');


	if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
		window.location.reload();
	}


	presupuesto = new Presupuesto(presupuestoUsuario);

	ui.mostrarPresupuesto(presupuesto);

	console.log(presupuesto);


}


function agregarGastos(e) {
	e.preventDefault();

	const nombre = document.querySelector('#gasto').value;
	const cantidad = Number(document.querySelector('#cantidad').value);

	//validamos
	if(nombre === '' || cantidad === ''){
		ui.mostrarAlerta('todos los campos son obligatorios', 'error');
		return;
	}else if(cantidad <= 0 || isNaN(cantidad)){
		ui.mostrarAlerta('Cantidad no Valida', 'error');
		return;
	}


	// 


	const gasto = {
		nombre: nombre,
		cantidad: cantidad,
		id: Date.now()
	}


	presupuesto.nuevoGasto(gasto);

	ui.mostrarAlerta('gasto agregado correctamente');

	ui.mostrarGastos(presupuesto.gastos)

	ui.actualizarRestante(presupuesto.restante);

	ui.actualizarPresupuesto(presupuesto);

	

	formulario.reset();

}


function eliminarGasto(id){
	presupuesto.eliminarGastos(id);

	ui.mostrarGastos(presupuesto.gastos)

	ui.actualizarRestante(presupuesto.restante);

	ui.actualizarPresupuesto(presupuesto);


}