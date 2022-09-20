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
	sintomas: ''
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

	formulario.addEventListener('submit', nuevaCita)

}



// classes
class Cita{
	constructor(){
		this.citas = [];
	}
	agregarCita(cita){
		this.citas = [...this.citas, cita];
	}
	eliminarCitas(id){
		this.citas = this.citas.filter(cita => cita.id !== id);
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
		}, 2500)


	}


	mostrarCitas({citas}){
		
		this.limpiarHTML();

		citas.forEach(cita => {
			const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

			const divCita = document.createElement('div');
			divCita.classList.add('div__cita');
			divCita.dataset.id = id;

			const mascotaTexto = document.createElement('h3');
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
			btnEliminar.textContent = 'Eliminar';
			btnEliminar.classList.add('btn__eliminar');
			btnEliminar.onclick = () => eliminarCita(id);


			const btnEditar = document.createElement('button');
			btnEditar.textContent = 'Editar';
			btnEditar.classList.add('btn__editar');
			btnEditar.onclick = () => editarCita(cita);


			//agregamos al html
			contenedorCitas.appendChild(divCita);
			divCita.appendChild(mascotaTexto);
			divCita.appendChild(propietarioTexto);
			divCita.appendChild(telefonoTexto);
			divCita.appendChild(fechaTexto);
			divCita.appendChild(horaTexto);
			divCita.appendChild(sintomasTexto);
			divCita.appendChild(btnEliminar);
			divCita.appendChild(btnEditar);


		})


	}

	limpiarHTML(){
		while(contenedorCitas.firstChild){
			contenedorCitas.removeChild(contenedorCitas.firstChild);
		}
	}




}


const administrarCitas = new Cita();

const ui = new UI();



//funciones

function datosCita(e){

	citaObj[e.target.name] = e.target.value;

}

function nuevaCita(e){
	e.preventDefault();

	//destructuring 
	const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

	//validamos
	if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){
		
		ui.mostrarAlerta('Todos los campos son obligatorios', 'error');

		return;
	}

	



	//creamos el modo edidion
	if(editando){
		//creamos el metodo para pasar todo el objeto para editar
		administrarCitas.editarCitas({...citaObj});
		//mostramos el mensaje de
		ui.mostrarAlerta('Se Guardo Correctamente');
		//cambiamos el mensaje del boton
		formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';
		// cambiamos a la version nueva cita
		editando = false;
	}else{


		//generamos el id
		citaObj.id = Date.now();

		//agregamos la cita
		administrarCitas.agregarCita({...citaObj});

		ui.mostrarAlerta('cita agregada correctamente');
	}


	
    
    //reinciamos el objeto
	reiniciarObjeto();
	
	formulario.reset();


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

	// eliminar cita
	administrarCitas.eliminarCitas(id);

	//mostrar alerta
	ui.mostrarAlerta('se elimino la cita correctamente');

	//refrescar las citas
	ui.mostrarCitas(administrarCitas);

}



function editarCita(cita){

	const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

	//llenamos los inputs
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


	editando = true;

	formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cita';

}