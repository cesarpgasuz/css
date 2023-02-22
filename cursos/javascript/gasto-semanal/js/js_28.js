//// variables
const contenedorGastos = document.querySelector('#gastos ul');
const formulario = document.querySelector('#agregar-gasto');


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
		document.querySelector('#total').textContent = presupuesto;
		document.querySelector('#restante').textContent = restante;
	}
	mostrarAlerta(mensaje, tipo){
		const mensajeAlerta = document.createElement('p');

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
			const gastoItem = document.createElement('li');
			gastoItem.dataset.id = id;
			gastoItem.innerHTML = `<strong>${nombre}</strong> --- $ ${cantidad} ---`;

			//boton para eliminar
			const btnEliminar = document.createElement('button');
			btnEliminar.classList.add('btn__eliminar');
			btnEliminar.textContent = 'Eliminar';
			btnEliminar.onclick = () => {
				eliminarGasto(id);
			}

			gastoItem.appendChild(btnEliminar);
			contenedorGastos.appendChild(gastoItem);


		});

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
			divRestante.classList.remove('warning', 'danger');
		}


		if(restante <= 0){
			formulario.querySelector('button[type="submit"]').disabled = true;
			this.mostrarAlerta('El presupuesto se agoto', 'error');
		}else{
			formulario.querySelector('button[type="submit"]').disabled = false;
		}


	}

}

//instanciamos
const ui = new UI();
let presupuesto;

// funciones
function pedirPresupuesto(){

	const presupuestoUsuario = prompt('Cual es tu presupuesto');
	//validamos
	if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
		window.location.reload();
		return;
	}

	presupuesto = new Presupuesto(presupuestoUsuario);
	//mostramos el presupuesto
	ui.mostrarPresupuesto(presupuesto);

}

function agregarGasto(e){
	e.preventDefault();

	const nombre = document.querySelector('#gasto').value;
	const cantidad = Number(document.querySelector('#cantidad').value);
	//validamos
	if(nombre === '' || cantidad === ''){
		ui.mostrarAlerta('Ambos campos son obligatorios', 'error');
		return
	}else if(cantidad <= 0 || isNaN(cantidad)){
		ui.mostrarAlerta('Cantidad No Valida', 'error');
		return;
	}

	// objeto donde guardaremos el gasto
	const gasto = {
		nombre: nombre,
		cantidad: cantidad,
		id: Date.now()
	}
	//agregamos el gasto
	presupuesto.nuevoGasto(gasto);
	// mensaje de gasto agregado
	ui.mostrarAlerta('Gasto Agregado Correctamente');
	// mostramos los gastos
	ui.mostrarGastos(presupuesto.gastos);
	//actualizar restante
	ui.actualizarRestante(presupuesto.restante);
	//actualzar presupuesto
	ui.actualizarPresupuesto(presupuesto);

	formulario.reset();
	console.log('gasto agregado')
}

function eliminarGasto(id){

	//eliminamos el gasto
	presupuesto.eliminarGasto(id);
	//mensaje de gasto eliminado
	ui.mostrarAlerta('Gasto Eliminado Correctamente');
	// refrescamos los gastos
	ui.mostrarGastos(presupuesto.gastos);
	//actualizar restante
	ui.actualizarRestante(presupuesto.restante);
	//actualzar presupuesto
	ui.actualizarPresupuesto(presupuesto);


}