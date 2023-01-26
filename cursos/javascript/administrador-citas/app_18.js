/// variables
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

/// eventListeners
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


/// classes
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
    }
    editarCitas(citaActualizada){
        this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita);
    }

}

class UI{
    imprimirAlerta(mensaje, tipo){
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
        }, 3000);
    }

    mostrarCitas({citas}){

        console.log(citas)

        this.limpiarHTML();

        citas.forEach(cita => {

            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

            const divCita = document.createElement('div');
            divCita.dataset.id = id;
            divCita.classList.add('div__cita');

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

            //// botones eliminar y editar
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn__eliminar');
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.onclick = () => eliminarCita(id);

            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn__editar');
            btnEditar.textContent = 'Editar';
            btnEditar.onclick = () => cargarEdicion(cita);


            divCita.appendChild(mascotaTexto);
            divCita.appendChild(propietarioTexto);
            divCita.appendChild(telefonoTexto);
            divCita.appendChild(fechaTexto);
            divCita.appendChild(horaTexto);
            divCita.appendChild(sintomasTexto);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);

            contenedorCitas.appendChild(divCita);
            
        });

    }


    limpiarHTML(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }


}

// instanciamos
const administradorCitas = new Citas();
const ui = new UI();




/// funciones
function datosCita(e){
    citaObj[e.target.name] = e.target.value;
}

function agregarCita(e){
    e.preventDefault();

    //hacemos destructuring
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;
    //validamos
    if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
        return;
    }

    if(editando){
        
        administradorCitas.editarCitas({...citaObj});
        // mensaje
        ui.imprimirAlerta('Cita Guardada Correctamente');
        //cambiar texto boton
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';

        editando = false;

    }else{

        // id unico
        citaObj.id = Date.now();
        // agregamos la nueva cita
        administradorCitas.nuevaCita({...citaObj});
        // mensaje de cita
        ui.imprimirAlerta('Cita Agregada Correctamente');
    }

    // reiniciar objeto
    reiniciarObjeto();
    // limpiamos el formulario
    formulario.reset();
    //mostramos las citas
    ui.mostrarCitas(administradorCitas);
   

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

    administradorCitas.eliminarCitas(id);
     //mostramos las citas
     ui.mostrarCitas(administradorCitas);
     // mensaje de cita eliminada
     ui.imprimirAlerta('Cita Eliminada Correctamente');


}

function cargarEdicion(cita){

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