//variables
const formulario = document.querySelector('#agregar-gasto');
const listadoGastos = document.querySelector('#gastos ul');

//eventListeners
eventListeners();

function eventListeners(){

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
	}
	eliminarGastos(id){
		this.gastos = this.gastos.filter(gasto => gasto.id !== id);
		this.calcularRestante();
	}

}

class UI{
	insertarPresupuesto(cantidad){
		const {presupuesto, restante} = cantidad;
		document.querySelector('#total').textContent = presupuesto;
		document.querySelector('#restante').textContent = restante;
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
			btnEliminar.textContent = 'Eliminar';
			btnEliminar.classList.add('btn__eliminar');
			btnEliminar.onclick = () => eliminarGasto(id);


			gastoItem.appendChild(btnEliminar);
			listadoGastos.appendChild(gastoItem);

		})

	}


	limpiarHTML(){
		while(listadoGastos.firstChild){
			listadoGastos.removeChild(listadoGastos.firstChild);
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
			divRestante.classList.add('success');
			divRestante.classList.remove('warning', 'danger');
		}


		if(restante <= 0){
			formulario.querySelector('button[type="submit"]').disabled = true;
			ui.mostrarAlerta('Presupuesto Terminado', 'error');
		}else{
			formulario.querySelector('button[type="submit"]').disabled = false;
		}


	}






}

let presupuesto;
const ui = new UI();





//funciones

function pedirPresupuesto(){

	const presupuestoUsuario = prompt('Cual es tu presupuesto');
	//validamos

	if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
		window.location.reload();
		return;
	}

	presupuesto = new Presupuesto(presupuestoUsuario);

	ui.insertarPresupuesto(presupuesto);

}


function agregarGastos(e){
	e.preventDefault();

	const nombre = document.querySelector('#gasto').value;
	const cantidad = Number(document.querySelector('#cantidad').value);

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


	presupuesto.nuevoGasto(gasto);

	ui.mostrarGastos(presupuesto.gastos);

	ui.mostrarAlerta('gasto agregado correctamente');

	ui.actualizarRestante(presupuesto.restante);

	ui.actualizarPresupuesto(presupuesto);

	formulario.reset();


}

function eliminarGasto(id){

	presupuesto.eliminarGastos(id);

	ui.mostrarGastos(presupuesto.gastos);

	ui.mostrarAlerta('gasto eliminado');

	ui.actualizarRestante(presupuesto.restante);

	ui.actualizarPresupuesto(presupuesto);


}




