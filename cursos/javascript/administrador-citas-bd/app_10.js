//variables
let DB;

const contenedorCitas = document.querySelector('#citas');
const formulario = document.querySelector('#nueva-cita');

const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');


const citaObj = {
	mascota: '',
	propietario: '',
	telefono: '',
	fecha: '',
	hora: '',
	sintomas: ''
}

let editando;


window.onload = () => {
	eventListeners();
	crearDB();
}

//eventListeners



function eventListeners(){

	mascotaInput.addEventListener('input', datosCita);
	propietarioInput.addEventListener('input', datosCita);
	telefonoInput.addEventListener('input', datosCita);
	fechaInput.addEventListener('input', datosCita);
	horaInput.addEventListener('input', datosCita);
	sintomasInput.addEventListener('input', datosCita);


	formulario.addEventListener('submit', agregarCita);

}




//classess
class Cita{
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


	mostrarCitas(){

		this.limpiarHTML();

		const objectStore = DB.transaction('citas').objectStore('citas');

		objectStore.openCursor().onsuccess = function(e){

			const cursor = e.target.result;


			if(cursor){

				const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cursor.value;

				const divCita = document.createElement('div');
				divCita.dataset.id = id;
				divCita.classList.add('div__cita');

				const mascotaTexto = document.createElement('h4');
				mascotaTexto.classList.add('title');
				mascotaTexto.textContent = mascota;

				const propietarioTexto = document.createElement('p');
				propietarioTexto.innerHTML = `<strong>Propietario:</strong> ${propietario}`;

				const telefonoTexto = document.createElement('p');
				telefonoTexto.innerHTML = `<strong>Telefono:</stron> ${telefono}`;

				const fechaTexto = document.createElement('p');
				fechaTexto.innerHTML = `<strong>Fecha:</strong> ${fecha}`;

				const horaTexto = document.createElement('p');
				horaTexto.innerHTML = `<strong>Hora:</strong> ${hora}`;

				const sintomasTexto = document.createElement('p');
				sintomasTexto.innerHTML = `<strong>Sintomas:</strong> ${sintomas}`;


				const btnEditar = document.createElement('button');
				btnEditar.textContent = 'Editar Cita';
				btnEditar.classList.add('btn__editar');
				const cita = cursor.value;
				btnEditar.onclick = () => editarCita(cita);


				const btnEliminar = document.createElement('button');
				btnEliminar.textContent = 'Eliminar Cita';
				btnEliminar.classList.add('btn__eliminar');
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


				cursor.continue();

			}


		}



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



function agregarCita(e){
	e.preventDefault();


	//validamos
	if(mascotaInput.value === '' || propietarioInput.value === '' || telefonoInput.value === '' || fechaInput.value === '' || horaInput.value === '' || sintomasInput.value === ''){
		ui.mostrarAlerta('Todos los campos son obligatorios', 'error');
		return;
	}


	if(editando){
		administrarCitas.editarCitas({...citaObj});

		const transaction = DB.transaction(['citas'], 'readwrite');

		const objectStore = transaction.objectStore('citas');
		objectStore.put(citaObj);

		transaction.onerror = function(){
			console.log('hubo un error en la edicion');
		}

		transaction.oncomplete = function(){
			ui.mostrarAlerta('cita guardada');

			editando = false;

			formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';
		}


		


	}else{

		//generamos un id
		citaObj.id = Date.now();
		//agreamos la cita hacinedo una copia del objeto
		administrarCitas.nuevaCita({...citaObj});


		const transaction = DB.transaction(['citas'], 'readwrite');
		
		const objectStore = transaction.objectStore('citas');
		objectStore.add(citaObj);

		transaction.onerror = function() {
			console.log('hubo un error');
		}

		transaction.oncomplete = function(){
			ui.mostrarAlerta('cita agregada');
		}

		
	}



	formulario.reset();

	ui.mostrarCitas();


}

function editarCita(cita){

	const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

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

	formulario.querySelector('button[type="submit"]').textContent = 'Guadar Cita';

}

function eliminarCita(id){

	const transaction = DB.transaction(['citas'], 'readwrite');
	const objectStore = transaction.objectStore('citas');
	objectStore.delete(id);

	transaction.onerror = function(){
		console.log('hubo un error al eliminar');
	}

	transaction.oncomplete = function(){
		ui.mostrarAlerta('cita eliminada');

		ui.mostrarCitas(administrarCitas);
	}

	

}

function crearDB(){

	//creamos la base de datos
	const crearDB = window.indexedDB.open('citas', 1);
	//comprobamos si hay errores
	crearDB.onerror = function(){
		console.log('Hubo un error');
	}
	crearDB.onsuccess = function(){
		console.log('base de datos creada');

		DB = crearDB.result;

		ui.mostrarCitas();


	}
	//realizamos la configuracion
	//se ejecuta solo una vez
	crearDB.onupgradeneeded = function(e){

		const db = e.target.result;

		const objectStore = db.createObjectStore('citas', {
			keyPath: 'id',
			autoIncrement: true
		})

		objectStore.createIndex('mascota', 'mascota', {unique: false});
		objectStore.createIndex('propietario', 'propietario', {unique: false});
		objectStore.createIndex('telefono', 'telefono', {unique: false});
		objectStore.createIndex('fecha', 'fecha', {unique: false});
		objectStore.createIndex('hora', 'hora', {unique: false});
		objectStore.createIndex('sintomas', 'sintomas', {unique: false});
		objectStore.createIndex('id', 'id', {unique: true});

		console.log('base de datos creada y lista');



	}






}