/// variables
const formulario = document.querySelector('#agregar-gasto');
const listadoGastos = document.querySelector('#gastos ul');
const agotado = document.querySelector('.agotado');


/// eventListeners
eventListeners();

function eventListeners(){

	document.addEventListener('DOMContentLoaded', pedirPresupuesto);
	formulario.addEventListener('submit', agregarGasto);
}


/// classes
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
	eliminarGasto(id){

		this.gastos = this.gastos.filter(gasto => gasto.id !== id);
		this.calcularRestante();
	}

}

class UI{
	mostrarPresupuesto(cantidad){
		const {presupuesto, restante} = cantidad;

		document.querySelector('#total').textContent = presupuesto.toFixed(2);
		document.querySelector('#restante').textContent = restante.toFixed(2);
	}
	mostrarAlerta(mensaje, tipo){

		const mensajeAlerta = document.createElement('P');

		if(tipo === 'error'){
			mensajeAlerta.classList.add('mensaje__error');
		}else{
			mensajeAlerta.classList.add('mensaje__success');
		}

		mensajeAlerta.textContent = mensaje;

		document.querySelector('.primario').appendChild(mensajeAlerta);

		setTimeout(() => {
			mensajeAlerta.remove();
		}, 3000)

	}

	mostrarGastos(gastos){

		this.limpiarHTML();

		gastos.forEach(gasto => {

			const {nombre, cantidad, id} = gasto;

			const gastoItem = document.createElement('LI');
			gastoItem.dataset.id = id;
			gastoItem.innerHTML = `${nombre} -- $${cantidad} -- `;

			const eliminarBotton = document.createElement('BUTTON');
			eliminarBotton.classList.add('btn__eliminar');
			eliminarBotton.textContent = 'Eliminar';
			eliminarBotton.onclick = () => {
				eliminarGastos(id);
			}


			gastoItem.appendChild(eliminarBotton);

			listadoGastos.appendChild(gastoItem);

		});

	}



	limpiarHTML(){
		while(listadoGastos.firstChild){
			listadoGastos.removeChild(listadoGastos.firstChild);
		}
	}

	actualizarRestante(restante){
		document.querySelector('#restante').textContent = restante.toFixed(2);
	}

	actualizarPresupuesto({presupuesto, restante}){

		const divRestante = document.querySelector('.restante');

		if((presupuesto /4) > restante){
			divRestante.classList.add('danger');
			divRestante.classList.remove('success', 'warning');
		}else if((presupuesto / 2) > restante){
			divRestante.classList.add('warning');
			divRestante.classList.remove('success', 'danger');
		}else{
			divRestante.classList.remove('warning', 'danger');
			divRestante.classList.add('success');
		}


		if(restante <= 0){
			
			agotado.classList.add('show');
			agotado.textContent = 'El presupuesto se ha agotado';

			formulario.querySelector('button[type="submit"]').disabled = true;
		}else{
			agotado.classList.remove('show');
			formulario.querySelector('button[type="submit"]').disabled = false;

		}


	}




}

let presupuesto;
const ui = new UI();

/// funciones
function pedirPresupuesto(){

	const presupuestoUsuario = prompt('Cual es tu Presupuesto ?');
	
	if(presupuestoUsuario <= 0 || presupuestoUsuario === '' || isNaN(presupuestoUsuario) || presupuestoUsuario === null){
		window.location.reload();
		return;
	}

	presupuesto = new Presupuesto(presupuestoUsuario);

	ui.mostrarPresupuesto(presupuesto);
}


function agregarGasto(e){
	e.preventDefault();

	const nombre = document.querySelector('#gasto').value.trim();
	const cantidad = Number(document.querySelector('#cantidad').value);


	if(nombre === '' || cantidad === ''){
		ui.mostrarAlerta('Ambos campos son obligatorios', 'error');
		return;
	}else if(cantidad <= 0 || isNaN(cantidad)){
		ui.mostrarAlerta('Cantidad No Valida', 'error');
		return;
	}

	// crearmos el objeto donde guardaremos la informacion de cada gasto
	const gasto = {
		nombre: nombre,
		cantidad: cantidad,
		id: Date.now()
	}

	// agregamos los gastos al arrglo
	presupuesto.nuevoGasto(gasto);
	//mensaje de gasto agregado
	ui.mostrarAlerta('Gasto Agregado');
	/// mostrarmo los gastos en el html
	ui.mostrarGastos(presupuesto.gastos);
	/// actualiza restante en el html
	ui.actualizarRestante(presupuesto.restante);
	// actualizar presupuesto
	ui.actualizarPresupuesto(presupuesto);
	// reseteamos el formulario
	formulario.reset();

}


function eliminarGastos(id){

	presupuesto.eliminarGasto(id);
	//mensaje de gasto agregado
	ui.mostrarAlerta('Gasto Eliminado');
	/// mostrarmo los gastos en el html
	ui.mostrarGastos(presupuesto.gastos);
	/// actualiza restante en el html
	ui.actualizarRestante(presupuesto.restante);
	// actualizar presupuesto
	ui.actualizarPresupuesto(presupuesto);


}