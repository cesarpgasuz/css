//variables
const formulario = document.querySelector('#agregar-gasto');
const contenedorGastos = document.querySelector('#gastos ul');




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

		document.querySelector('.primario').appendChild(divMensaje);

		setTimeout(() => {

			divMensaje.remove();

		}, 2500)


	}

	mostrarGastos(gastos){

		this.limpiarHTML();

		gastos.forEach(gasto => {

			const {nombre, cantidad, id} = gasto;

			const gastoItem = document.createElement('li');
			gastoItem.dataset.id = id;
			gastoItem.innerHTML = `<strong>${nombre}</strong> -- $ ${cantidad}`;

			const btnEliminar = document.createElement('button');
			btnEliminar.classList.add('btn__eliminar');
			btnEliminar.textContent = 'Eliminar X';
			btnEliminar.onclick = () => {
				eliminarGasto(id);
			}

			gastoItem.appendChild(btnEliminar);

			contenedorGastos.appendChild(gastoItem);

		})


	}

	limpiarHTML(){
		while(contenedorGastos.firstChild){
			contenedorGastos.removeChild(contenedorGastos.firstChild);
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
			divRestante.classList.remove('success', 'danger');
		}else{
			divRestante.classList.add('success');
			divRestante.classList.remove('danger', 'warning');
		}


		if(restante <= 0){
			ui.mostrarAlerta('Te has terminado el presupuesto', 'error');
			formulario.querySelector('button[type="submit"]').disabled = true;
		}else{
			formulario.querySelector('button[type="submit"]').disabled = false;
		}


	}

}

let presupuesto;
const ui = new UI();

//funciones
function pedirPresupuesto(){

	const presupuestoUsuario = prompt('Cual es tu presupuesto ?');

	//validamos
	if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <=0 ){
		window.location.reload();
	}


	presupuesto = new Presupuesto(presupuestoUsuario);

	ui.mostrarPresupuesto(presupuesto);

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


	//creamos un objeto donde guardaremos la infomracion

	const gasto = {
		nombre: nombre,
		cantidad: cantidad,
		id: Date.now(),
	}


	presupuesto.nuevoGasto(gasto);

	ui.mostrarAlerta('Gasto Agreado Correctamente');


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

	ui.mostrarAlerta('Gasto Eliminado Correctamente');



}