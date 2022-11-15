//variables
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');


const mascota = document.querySelector('#mascota');
const propietario = document.querySelector('#propietario');
const telefono = document.querySelector('#telefono');
const fecha = document.querySelector('#fecha');
const hora = document.querySelector('#hora');
const sintomas = document.querySelector('#sintomas');



const citaObj = {
	mascota: '',
	propietario: '',
	telefono: '',
	fecha: '',
	hora: '',
	sintomas: ''
}


let editando;


//eventListeners
eventListeners();

function eventListeners(){

	formulario.addEventListener('submit', agregarCita);

	mascota.addEventListener('input', datosCita);
	propietario.addEventListener('input', datosCita);
	telefono.addEventListener('input', datosCita);
	fecha.addEventListener('input', datosCita);
	hora.addEventListener('input', datosCita);
	sintomas.addEventListener('input', datosCita);

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

	editarCitas(citaActualizada){

		this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita);

	}

	eliminarCitas(id){

		this.citas = this.citas.filter(cita => cita.id !== id);
	}

}

class UI{

	mostrarAlerta(mensaje, tipo){

		const alerta = document.querySelector('p.alerta');

		if(!alerta){
			const mensajeAlerta = document.createElement('p');
			mensajeAlerta.classList.add('alerta');

			if(tipo === 'error'){
				mensajeAlerta.classList.add('mensaje__error');
			}else{
				mensajeAlerta.classList.add('mensaje__success');
			}

			mensajeAlerta.textContent = mensaje;

			document.querySelector('.agregar-cita').appendChild(mensajeAlerta);

			setTimeout(() => {
				mensajeAlerta.remove();
			}, 2500)

		}
	
	}



	mostrarCitas({citas}){

		this.limpiarHTML();


		citas.forEach(cita => {

			const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;


			const divCita = document.createElement('div');
			divCita.classList.add('div__cita');
			divCita.dataset.id = id;

			const mascotaTexto = document.createElement('h5');
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

			const btnEditar = document.createElement('button');
			btnEditar.classList.add('btn__editar');
			btnEditar.textContent = 'Editar';
			btnEditar.onclick = () => editarCita(cita);

			const btnEliminar = document.createElement('button');
			btnEliminar.classList.add('btn__eliminar');
			btnEliminar.textContent = 'Eliminar Cita';
			btnEliminar.onclick = () => eliminarCita(id);


			divCita.appendChild(mascotaTexto);
			divCita.appendChild(propietarioTexto);
			divCita.appendChild(telefonoTexto);
			divCita.appendChild(fechaTexto);
			divCita.appendChild(horaTexto);
			divCita.appendChild(sintomasTexto);

			divCita.appendChild(btnEditar);
			divCita.appendChild(btnEliminar);

			contenedorCitas.appendChild(divCita);


		})


	}


	limpiarHTML(){
		while(contenedorCitas.firstChild){
			contenedorCitas.removeChild(contenedorCitas.firstChild);
		}
	}



}


const ui = new UI();

const administrarCitas = new Citas();




//funciones

function datosCita(e){

	citaObj[e.target.name] = e.target.value;

}



function agregarCita(e){
	e.preventDefault();


	if(mascota.value === '' || propietario.value === '' || telefono.value === '' || fecha.value === '' || hora.value === '' || sintomas.value === ''){
		ui.mostrarAlerta('Todos los campos son obligatorios', 'error');
		return;
	}




	if(editando){

		administrarCitas.editarCitas({...citaObj});

		ui.mostrarAlerta('cita guardada');

		editando = false;

		formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';


	}else{

		//id
		citaObj.id = Date.now();

		administrarCitas.nuevaCita({...citaObj});

		ui.mostrarAlerta('cita agregada');


	}


	
	ui.mostrarCitas(administrarCitas);

	formulario.reset();
	


}	


function editarCita(cita){

	const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;


	const mascotaInput = document.querySelector('#mascota');
	const propietarioInput = document.querySelector('#propietario');
	const telefonoInput = document.querySelector('#telefono');
	const fechaInput = document.querySelector('#fecha');
	const horaInput = document.querySelector('#hora');
	const sintomasInput = document.querySelector('#sintomas');


	mascotaInput.value = mascota;
	propietarioInput.value = propietario;
	telefonoInput.value = telefono;
	fechaInput.value = fecha;
	horaInput.value = hora;
	sintomasInput.value = sintomas;


	citaObj.mascota = mascota;
	citaObj.propietario = propietario;
	citaObj.telefono = telefono;
	citaObj.fecha = fecha;
	citaObj.hora = hora;
	citaObj.sintomas = sintomas;
	citaObj.id = id;

	editando = true;

	formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cita';

}



function eliminarCita(id){


	administrarCitas.eliminarCitas(id);

	ui.mostrarAlerta('Cita Eliminada');

	ui.mostrarCitas(administrarCitas);

}