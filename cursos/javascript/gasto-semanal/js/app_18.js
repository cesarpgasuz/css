///// variables
const formulario = document.querySelector('#agregar-gasto');
const listadoGastos = document.querySelector('#gastos ul');

//// eventListeners


eventListeners();

function eventListeners(){

	document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
	formulario.addEventListener('submit', agregarGasto);

}


//// classes
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
	mostrarPresupuesto(cantidad){
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
		}, 3000)
	
	}

	mostrarGastos(gastos){

		this.limpiarHTML();

		gastos.forEach(gasto => {
			const {nombre, cantidad, id} = gasto;

			const gastoItem = document.createElement('li');
			gastoItem.dataset.id = id;
			gastoItem.innerHTML = `

				<strong>${nombre}</strong> ---- ${cantidad} ---
			`;

			const btnEliminar = document.createElement('button');
			btnEliminar.classList.add('btn__eliminar');
			btnEliminar.textContent = 'Eliminar X';
			btnEliminar.onclick = () => {
				eliminarGasto(id);
			}

			gastoItem.appendChild(btnEliminar);
			listadoGastos.appendChild(gastoItem);

		});

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
		const divRestante = document.querySelector('.restante.alert')
		const {presupuesto, restante} = presupuestoObj;

		if((presupuesto / 4) > restante){
			divRestante.classList.add('danger');
			divRestante.classList.remove('warning', 'success');
		}else if((presupuesto / 2) > restante){
			divRestante.classList.add('warning');
			divRestante.classList.remove('danger', 'success');
		}else{
			divRestante.classList.add('success');
			divRestante.classList.remove('danger', 'warning');
		}


		if(restante <= 0){
			formulario.querySelector('button[type="submit"]').disabled = true;
			
			const agotado = document.createElement('p');
			agotado.style.color = 'red';
			agotado.classList.add('p__agotado');
			agotado.textContent = 'Presupuesto Agotado';
			formulario.appendChild(agotado);



		}else{
			formulario.querySelector('button[type="submit"]').disabled = false;
			const agotado = document.querySelector('.p__agotado');
			if(agotado){
				agotado.remove();
			}
			

		}

	}


}

// instanciar
const ui = new UI();
let presupuesto;





/// funciones
function preguntarPresupuesto(){

	const presupuestoUsuario = prompt('Cual es tu presupuesto?');

	if(presupuestoUsuario === '' || presupuestoUsuario <= 0 || isNaN(presupuestoUsuario) || presupuestoUsuario === null){
		window.location.reload();
		return;
	}

	presupuesto = new Presupuesto(presupuestoUsuario);

	ui.mostrarPresupuesto(presupuesto);
}

function agregarGasto(e){
	e.preventDefault();

	const nombre = document.querySelector('#gasto').value;
	const cantidad = Number(document.querySelector('#cantidad').value);

	//validar
	if(nombre === '' || cantidad === ''){
		ui.mostrarAlerta('Ambos campos son obligatorios', 'error');
		return;
	}else if(cantidad <= 0 || isNaN(cantidad)){
		ui.mostrarAlerta('Cantidad No Valida', 'error');
		return;
	}
	// objeto para agregar gastos
	const gasto = {
		nombre: nombre,
		cantidad: cantidad,
		id: Date.now()
	}
	// agregar el nuevo gasto
	presupuesto.nuevoGasto(gasto);
	// alerta de gasto agregado
	ui.mostrarAlerta('Gasto Agregado');
	// mostrar gastos
	ui.mostrarGastos(presupuesto.gastos);
	// actualizar restante
	ui.actualizarRestante(presupuesto.restante);
	// actualizar presupuesto
	ui.actualizarPresupuesto(presupuesto);
	// resetear formulario
	formulario.reset();

}

function eliminarGasto(id){

	presupuesto.eliminarGastos(id);
	// mensaje de gasto eliminado
	ui.mostrarAlerta('Gasto Eliminado');
	// mostrar gastos
	ui.mostrarGastos(presupuesto.gastos);
	// actualizar restante
	ui.actualizarRestante(presupuesto.restante);
	// actualizar presupuesto
	ui.actualizarPresupuesto(presupuesto);


}