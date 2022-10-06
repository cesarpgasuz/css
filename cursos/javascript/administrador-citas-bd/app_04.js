//variables
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

const citaObj = {
	mascota: '',
	propietario: '',
	telefono: '',
	fecha: '',
	hora: '',
	sintomas: '',
}

let editando;

//eventListeners
eventListeners();

function eventListeners(){

	mascotaInput.addEventListener('input', datosCita);
	propietarioInput.addEventListener('input', datosCita);
	telefonoInput.addEventListener('input', datosCita);
	fechaInput.addEventListener('input', datosCita);
	horaInput.addEventListener('input', datosCita);
	sintomasInput.addEventListener('input', datosCita);

	formulario.addEventListener('submit', agregarCita);

}


//classes
class Citas{
	constructor(){
		this.citas = [];
	}
	nuevaCita(cita){
		this.citas = [...this.citas, cita];
		console.log(this.citas);
	}
	eliminarCitas(id){
		this.citas = this.citas.filter(cita => cita.id !== id);
		console.log(this.citas);
	}
	editarCitas(citaActualizada){
		this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita);
	}
}

class UI{
	mostrarAlerta(mensaje, tipo){

		const divMensaje = document.createElement('div');

		if(tipo === 'error'){
			divMensaje.classList.add('mensaje__error');
		}else{
			divMensaje.classList.add('mensaje__success');
		}

		divMensaje.textContent = mensaje;

		document.querySelector('.agregar-cita').appendChild(divMensaje);

		setTimeout(() => {
			divMensaje.remove();
		},2500)

	}

	mostrarCitas({citas}){

		this.limpiarHTML();

		citas.forEach(cita => {
			//destructuring
			const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

			const divCita = document.createElement('div');
			divCita.classList.add('div__cita');
			divCita.dataset.id = id;


			const mascotaTexto = document.createElement('h4');
			mascotaTexto.classList.add('title');
			mascotaTexto.textContent = mascota;

			const propietarioTexto = document.createElement('p');
			propietarioTexto.innerHTML = `<strong>Propietario:</strong> ${propietario}`;

			const telefonoTexto = document.createElement('p');
			telefonoTexto.innerHTML = `<strong>Telefono:</strong> ${telefono}`;

			const fechaTexto = document.createElement('p');
			fechaTexto.innerHTML = `<strong>Fecha:</strong> ${fecha}`;

			const horaTexto = document.createElement('p');
			horaTexto.innerHTML = `<strong>Hora:</strong> ${hora}`;

			const sintomasTexto = document.createElement('p');
			sintomasTexto.innerHTML = `<strong>Sintomas:</strong> ${sintomas}`;

			const btnEliminar = document.createElement('button');
			btnEliminar.classList.add('btn__eliminar');
			btnEliminar.textContent = 'eliminar';
			btnEliminar.onclick = () => eliminarCita(id);

			const btnEditar = document.createElement('button');
			btnEditar.classList.add('btn__editar');
			btnEditar.textContent = 'editar';
			btnEditar.onclick = () => editarCita(cita);


			divCita.appendChild(mascotaTexto);
			divCita.appendChild(propietarioTexto);
			divCita.appendChild(telefonoTexto);
			divCita.appendChild(fechaTexto);
			divCita.appendChild(horaTexto);
			divCita.appendChild(sintomasTexto);

			divCita.appendChild(btnEliminar);
			divCita.appendChild(btnEditar);


			contenedorCitas.appendChild(divCita);

		})



	}


	limpiarHTML(){
		while(contenedorCitas.firstChild){
			contenedorCitas.removeChild(contenedorCitas.firstChild);
		}
	}



}


const administrarCitas = new Citas();
const ui = new UI();



//funciones
function datosCita(e){

	citaObj[e.target.name] = e.target.value;

}

function agregarCita(e){
	e.preventDefault();

	//destructuring
	const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;
	//valimdamos
	if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){
		ui.mostrarAlerta('Todos los campos son obligatorios', 'error');
		return;
	}


	if(editando){
		//editamos la cita
		administrarCitas.editarCitas({...citaObj});
		//mensaje de cita editada
		ui.mostrarAlerta('cita editada');
		//modificamos el boton
		formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';
		//salimos del modo edicion
		editando = false;

	}else{
		//generamos un id
		citaObj.id = Date.now();
		//agreamos la cita hacinedo una copia del objeto
		administrarCitas.nuevaCita({...citaObj});
		//mensaje de nueva cita
		ui.mostrarAlerta('cita agregada');
	}

	

	//reniciamos el objeto
	reiniciarObjeto();

	//reiniciamos el formulario
	formulario.reset();

	//mostramos las citas
	ui.mostrarCitas(administrarCitas);

}

function reiniciarObjeto(){

	citaObj.mascota = '';
	citaObj.propietario = '';
	citaObj.telefono = '';
	citaObj.fecha = '';
	citaObj.hora = '';
	citaObj.sintomas = '';

}

function eliminarCita(id){
	//eliminar cita
	administrarCitas.eliminarCitas(id);
	//mensaje
	ui.mostrarAlerta('Cita Eliminada');
	//refrescamos el arreglo
	ui.mostrarCitas(administrarCitas);
}

function editarCita(cita){
	//destructuring
	const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;
	//llenamos los input
	mascotaInput.value = mascota;
	propietarioInput.value = propietario;
	telefonoInput.value = telefono;
	fechaInput.value = fecha;
	horaInput.value = hora;
	sintomasInput.value = sintomas;

	//llenamos el objeto
	citaObj.mascota = mascota;
	citaObj.propietario = propietario;
	citaObj.telefono = telefono;
	citaObj.fecha = fecha;
	citaObj.hora = hora;
	citaObj.sintomas = sintomas;
	citaObj.id = id;

	//entramos en modo edicion
	editando = true;

	//modificamos el boton
	formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cita';


}