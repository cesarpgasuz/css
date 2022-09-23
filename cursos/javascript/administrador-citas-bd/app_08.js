//variables
let DB;

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

	mostrarCitas(){

		this.limpiarHTML();

		const objectStore = DB.transaction('citas').objectStore('citas');

		objectStore.openCursor().onsuccess = function(e){

			const cursor = e.target.result;

			if(cursor){
				//destructuring
				const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cursor.value;

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
				const cita = cursor.value;
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

		const transaction = DB.transaction(['citas'], 'readwrite');
		const objectStore = transaction.objectStore('citas');
		objectStore.put(citaObj);

		transaction.oncomplete = function(){

			//mensaje de cita editada
			ui.mostrarAlerta('cita editada');
			//modificamos el boton
			formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';
			//salimos del modo edicion
			editando = false;
		}
		transaction.onerror = function(){
			console.log('hubo un error');
		}


		

	}else{
		//generamos un id
		citaObj.id = Date.now();
		//agreamos la cita hacinedo una copia del objeto
		administrarCitas.nuevaCita({...citaObj});


		//agregamos el registro a la base de datos
		const transaction = DB.transaction(['citas'], 'readwrite');
		//abrimos el objectStore
		const objectStore = transaction.objectStore('citas');
		//agregamos los datos
		objectStore.add(citaObj);
		//mensaje 
		transaction.oncomplete = function(){
			console.log('registro agregado');

			//mensaje de nueva cita
			ui.mostrarAlerta('cita agregada');
		}


	}

	

	//reniciamos el objeto
	reiniciarObjeto();

	//reiniciamos el formulario
	formulario.reset();

	//mostramos las citas
	ui.mostrarCitas();

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
	
	const transaction = DB.transaction(['citas'], 'readwrite');
	const objectStore = transaction.objectStore('citas');

	objectStore.delete(id);

	transaction.oncomplete = function(){

		//mensaje
		ui.mostrarAlerta('Cita Eliminada');
		//refrescamos el arreglo
		ui.mostrarCitas();
	}
	transaction.onerror = function(){
		console.log('hubo un error');
	}


	
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


function crearDB(){

	//crear la base de datos en la version 1
	const crearDB = window.indexedDB.open('citas', 1);
	//comprobamos si hay errores
	crearDB.onerror = function(){
		console.log('hubo un error');
	}
	//la base se creo
	crearDB.onsuccess = function(){
		console.log('base de datos creada');

		DB = crearDB.result;

		ui.mostrarCitas();

	}
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

		console.log('base creada y lista');

	}



}