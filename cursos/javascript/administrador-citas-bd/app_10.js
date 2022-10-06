//variables
let DB;

<<<<<<< HEAD
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');
=======
const contenedorCitas = document.querySelector('#citas');
const formulario = document.querySelector('#nueva-cita');
>>>>>>> c354rpgasuz

const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

<<<<<<< HEAD
//objet donde guardaremos la informacion
=======
>>>>>>> c354rpgasuz

const citaObj = {
	mascota: '',
	propietario: '',
	telefono: '',
	fecha: '',
	hora: '',
	sintomas: ''
}

<<<<<<< HEAD
//modo edicion
=======
>>>>>>> c354rpgasuz
let editando;


window.onload = () => {
<<<<<<< HEAD
    eventListeners();
    crearDB();
=======
	eventListeners();
	crearDB();
>>>>>>> c354rpgasuz
}

//eventListeners


<<<<<<< HEAD
=======

>>>>>>> c354rpgasuz
function eventListeners(){

	mascotaInput.addEventListener('input', datosCita);
	propietarioInput.addEventListener('input', datosCita);
	telefonoInput.addEventListener('input', datosCita);
	fechaInput.addEventListener('input', datosCita);
	horaInput.addEventListener('input', datosCita);
<<<<<<< HEAD
	sintomas.addEventListener('input', datosCita);
=======
	sintomasInput.addEventListener('input', datosCita);

>>>>>>> c354rpgasuz

	formulario.addEventListener('submit', agregarCita);

}



<<<<<<< HEAD
//classes

class Citas{
=======

//classess
class Cita{
>>>>>>> c354rpgasuz
	constructor(){
		this.citas = [];
	}
	nuevaCita(cita){
		this.citas = [...this.citas, cita];
		console.log(this.citas);
	}
<<<<<<< HEAD
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

=======
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


>>>>>>> c354rpgasuz
	mostrarCitas(){

		this.limpiarHTML();

<<<<<<< HEAD
        const objectStore = DB.transaction('citas').objectStore('citas');

        objectStore.openCursor().onsuccess = function(e){

            const cursor = e.target.result;

            if(cursor){

                //destructuring
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



=======
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
>>>>>>> c354rpgasuz



	}

<<<<<<< HEAD

=======
>>>>>>> c354rpgasuz
	limpiarHTML(){
		while(contenedorCitas.firstChild){
			contenedorCitas.removeChild(contenedorCitas.firstChild);
		}
	}


<<<<<<< HEAD

}


//instanciamos
const administrarCitas = new Citas();
=======
}


const administrarCitas = new Cita();
>>>>>>> c354rpgasuz
const ui = new UI();



<<<<<<< HEAD
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
=======

//funciones

function datosCita(e){
	citaObj[e.target.name] = e.target.value;
}



function agregarCita(e){
	e.preventDefault();


	//validamos
	if(mascotaInput.value === '' || propietarioInput.value === '' || telefonoInput.value === '' || fechaInput.value === '' || horaInput.value === '' || sintomasInput.value === ''){
>>>>>>> c354rpgasuz
		ui.mostrarAlerta('Todos los campos son obligatorios', 'error');
		return;
	}


<<<<<<< HEAD

	if(editando){
		//metodo para editar la cita
		administrarCitas.editarCitas({...citaObj});


        const transaction = DB.transaction(['citas'], 'readwrite');
        const objectStore = transaction.objectStore('citas');

        objectStore.put(citaObj);

        transaction.oncomplete = function(){

            //cambiamos a modo crear cita
            editando = false;
            //mensaje de cita editada
            ui.mostrarAlerta('cita guardada');
            //cambiamos el boton a crea nueva cita
            formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

        }

        transaction.onerror = function(){
            console.log('hubo un error al insertar un registro')
        }




	}else{
		//generamos un id
		citaObj.id = Date.now();
		//agreamos la cita
		administrarCitas.nuevaCita({...citaObj});


        const transaction = DB.transaction(['citas'], 'readwrite');

        const objectStore = transaction.objectStore('citas');

        objectStore.add(citaObj);

        transaction.oncomplete = function(){
            console.log('registro agregado');

            //mostramos mensaje de cita agregada
		    ui.mostrarAlerta('cita agregada');
        }

        transaction.onerror = function(){
            console.log('hubo un error al insertar un registro')
        }


=======
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
>>>>>>> c354rpgasuz

		
	}

<<<<<<< HEAD
	

	reiniciarObjeto();
=======

>>>>>>> c354rpgasuz

	formulario.reset();

	ui.mostrarCitas();

<<<<<<< HEAD
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
	const transaction = DB.transaction(['citas'], 'readwrite');
    const objectStore = transaction.objectStore('citas');
    objectStore.delete(id);

    transaction.oncomplete = function(){
        //
        console.log('cita eliminada');
        //mensaje de elimniar cita
        ui.mostrarAlerta('cita eliminada');
        //imprimimos el  listado
        ui.mostrarCitas();
    }
    transaction.onerror = function(){
        console.log('no se pudo eliminar el registro')
    }




	

}


function editarCita(cita){

	//destructuring
	const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

	//llenamos los inputs
=======

}

function editarCita(cita){

	const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

>>>>>>> c354rpgasuz
	mascotaInput.value = mascota;
	propietarioInput.value = propietario;
	telefonoInput.value = telefono;
	fechaInput.value = fecha;
	horaInput.value = hora;
	sintomasInput.value = sintomas;

<<<<<<< HEAD
	//llenamos el objeto
=======

>>>>>>> c354rpgasuz
	citaObj.mascota = mascota;
	citaObj.propietario = propietario;
	citaObj.telefono = telefono;
	citaObj.fecha = fecha;
	citaObj.hora = hora;
	citaObj.sintomas = sintomas;
	citaObj.id = id;

	editando = true;

<<<<<<< HEAD
	formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cita';


}


function crearDB(){

    //creamos la base de datos en la version 1
    const crearDB = window.indexedDB.open('citas', 1);
    //comprobamo si hay errores
    crearDB.onerror = function(){
        console.log('hay errores');
    }
    //la base se creo
    crearDB.onsuccess = function(){
        console.log('se creo la base de datos');

        DB = crearDB.result;

        ui.mostrarCitas();

    }

    //creamos la configuracion
    crearDB.onupgradeneeded = function(e){

        const db = e.target.result;

        const objectStore = db.createObjectStore('citas', {
            keyPath: 'id',
            autoIncrement: true
        });

        objectStore.createIndex('mascota', 'mascota', {unique: false});
        objectStore.createIndex('propietario', 'propietario', {unique: false});
        objectStore.createIndex('telefono', 'telefono', {unique: false});
        objectStore.createIndex('fecha', 'fecha', {unique: false});
        objectStore.createIndex('hora', 'hora', {unique: false});
        objectStore.createIndex('sintomas', 'sintomas', {unique: false});
        objectStore.createIndex('id', 'id', {unique: true});

        console.log('base creada y lista')



    }
=======
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



>>>>>>> c354rpgasuz



}