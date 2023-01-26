// variables
let DB;

const formulario = document.querySelector('#nueva-cita');
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');
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

window.onload = () => {
    eventListeners();
    crearDB();
}


// eventListenera

function eventListeners(){

    mascotaInput.addEventListener('input', datosCita);
    propietarioInput.addEventListener('input', datosCita);
    telefonoInput.addEventListener('input', datosCita);
    fechaInput.addEventListener('input', datosCita);
    horaInput.addEventListener('input', datosCita);
    sintomasInput.addEventListener('input', datosCita);
    formulario.addEventListener('submit', agregarCita);

}

// classes
class Citas{
    constructor(){
        this.citas = [];
    }
    nuevaCita(cita){
        this.citas = [...this.citas, cita];
        console.log(this.citas);
    }
    eliminarCita(id){
        this.citas = this.citas.filter(cita => cita.id !== id);
    }
    editarCita(citaActualizada){
        this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita);
    }
}
class UI{
    imprimirAlerta(mensaje, tipo){
        const mensajeAlerta = document.createElement('p');

        if(tipo === 'error'){
            mensajeAlerta.classList.add('mensaje__error');
        }else{
            mensajeAlerta.classList.add('mensaje__success');
        }

        mensajeAlerta.textContent = mensaje;

        document.querySelector('.agregar-cita').appendChild(mensajeAlerta);

        setTimeout(() => {
            mensajeAlerta.remove();
        }, 3000);
    }

    mostrarCitas(){

        this.limpiarHTML();

       //leer contenido de la base de datos
       const objectStore = DB.transaction('citas').objectStore('citas');

       objectStore.openCursor().onsuccess = function(e){

            const cursor = e.target.result;

            if(cursor){
                const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cursor.value;

                const divCita = document.createElement('div');
                divCita.classList.add('div__cita');
                divCita.dataset.id = id;

                const mascotaTexto = document.createElement('h2');
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

                // botones editar y eliminar
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


                // ve al siguiente elemento
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

//instanciamos
const administrarCitas = new Citas();
const ui = new UI();

// funciones
function datosCita(e){
    citaObj[e.target.name] = e.target.value;
}

function agregarCita(e){
    e.preventDefault();

    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

    //validamos
    if(mascota == '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
        return;
    }

    if(editando){
        //editamos la cita
        administrarCitas.editarCita({...citaObj});

        //editar en indexeddb
        const transaction = DB.transaction(['citas'], 'readwrite');
        const objectStore = transaction.objectStore('citas');
        objectStore.put(citaObj);

        transaction.oncomplete = function() {
            //mensaje cita editada
            ui.imprimirAlerta('Cita Guardada Correctamente');
            //texto boton
            formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

            editando = false;
        }
        transaction.onerror = function(){
            console.log('hubo un error')
        }
        


    }else{
        //generamos un id
        citaObj.id = Date.now();
        //agregamos una cita
        administrarCitas.nuevaCita({...citaObj});

        // insertar registro en indexeddb
        const transaction = DB.transaction(['citas'], 'readwrite');
        const objectStore = transaction.objectStore('citas');
        objectStore.add(citaObj);

        transaction.oncomplete = function(){
           //mensaje de nueva cita
            ui.imprimirAlerta('Cita Agregada Correctamente'); 
        }
    }

    
    //reiniciar objeto
    reiniciarObjeto();
    //limpiar formulario
    formulario.reset();
    //mostrar citas
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
        //mensaje de eliminar cita
        ui.imprimirAlerta('Cita Eliminada');
        //refrescar citas
        ui.mostrarCitas();
    }
    transaction.onerror = function(){
        console.log('hubo un error');
    }
    


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

    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cita';

    editando = true;


}

function crearDB(){
    //crear la base de datos
    const crearDB = window.indexedDB.open('citas', 1);

    crearDB.onerror = function(){
        console.log('hubo un error');
    }
    crearDB.onsuccess = function(){
        console.log('bd creada');

        DB = crearDB.result;

        //mostrar citas al cargar (pero indexed ya esta listo)
        ui.mostrarCitas();
    }

    //definir el schema
    crearDB.onupgradeneeded = function(e){
        const db = e.target.result;

        const objectStore = db.createObjectStore('citas', {
            keyPath: 'id',
            autoIncrement: true
        });

        //definir todas las columnas
        objectStore.createIndex('mascota', 'mascota', {unique: false});
        objectStore.createIndex('propietario', 'propietario', {unique: false});
        objectStore.createIndex('telefono', 'telefono', {unique: false});
        objectStore.createIndex('fecha', 'fecha', {unique: false});
        objectStore.createIndex('hora', 'hora', {unique: false});
        objectStore.createIndex('sintomas', 'sintomas', {unique: false});
        objectStore.createIndex('id', 'id', {unique: true});

        console.log('bd creada y lista');
    }
}