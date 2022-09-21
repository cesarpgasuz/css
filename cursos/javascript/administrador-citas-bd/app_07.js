//variables
let DB;

const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

//objet donde guardaremos la informacion

const citaObj = {
	mascota: '',
	propietario: '',
	telefono: '',
	fecha: '',
	hora: '',
	sintomas: ''
}

//modo edicion
let editando;


window.onload = () =>{
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
	sintomas.addEventListener('input', datosCita);

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
		console.log(this.citas);
	}

}

class UI {
	mostrarAlerta(mensaje, tipo){

		const divAlerta = document.createElement('div');

		if(tipo === 'error'){
			divAlerta.classList.add('mensaje__error');
		}else{
			divAlerta.classList.add('mensaje__success');
		}

		divAlerta.textContent = mensaje;

		document.querySelector('.agregar-cita').appendChild(divAlerta);

		setTimeout(() => {
			divAlerta.remove();
		},2500)		

	}

	mostrarCitas({citas}){

		this.limpiarHTML();

		citas.forEach(cita => {

			//destructuring
			const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

			const divCita = document.createElement('div');
			divCita.dataset.id = id;
			divCita.classList.add('div__cita');

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
			btnEliminar.textContent = 'Eliminar';
			btnEliminar.onclick = () => eliminarCita(id);

			const btnEditar = document.createElement('button');
			btnEditar.classList.add('btn__editar');
			btnEditar.textContent = 'Editar';
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


//instanciamos
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
	//validamos
	if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){
		ui.mostrarAlerta('Todos los campos son obligatorios', 'error');
		return;
	}



	if(editando){
		//metodo para editar la cita
		administrarCitas.editarCitas({...citaObj});
		//cambiamos a modo crear cita
		editando = false;
		//mensaje de cita editada
		ui.mostrarAlerta('cita guardada');
		//cambiamos el boton a crea nueva cita
		formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';


	}else{
		//generamos un id
		citaObj.id = Date.now();
		//agreamos la cita
		administrarCitas.nuevaCita({...citaObj});
		//mostramos mensaje de cita agregada
		ui.mostrarAlerta('cita agregada');
	}

	

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

	//metodo para eliminar cita desde la clase
	administrarCitas.eliminarCitas(id);
	//mensaje de elimniar cita
	ui.mostrarAlerta('cita eliminada');
	//imprimimos el  listado
	ui.mostrarCitas(administrarCitas);

}


function editarCita(cita){

	//destructuring
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


function crearDB(){

	//creamos la base de datos en la version 1
	const crearDB = window.indexedDB.open('citas', 1);
	//comprobamos si no hay error
	crearDB.onerror = function(){
		console.log('hubo un error');
	}
	//todo salio bien
	crearDB.onsuccess = function(){
		console.log('base de datos creada');

		DB = crearDB.result;
	}

	//creamos el schemma
	crearDB.onugradeneeded = function(e){

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
		objectStore.createIndex('sintomas', 'sintomas',{unique: false});
		objectStore.createIndex('id', 'id', {unique: true});

		console.log('base de datos creada y lista');


	}


}