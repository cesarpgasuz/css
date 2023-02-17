// variables
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
    propietario:'',
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
    formulario.addEventListener('submit', nuevaCita);
}


/// classes
class Citas{
    constructor(){
        this.citas = [];
    }
    agregarCita(cita){
        this.citas = [...this.citas, cita];
        console.log(this.citas);
    }
    eliminarCitas(id){
        this.citas = this.citas.filter(cita => cita.id !== id);
    }
    editarCita(citaActualizada){
        this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita);
    }
}
class UI{
    imprimirAlerta(mensaje, tipo){
        //crear mensaje
        const divMesaje = document.createElement('div');
        
        if(tipo === 'error'){
            divMesaje.classList.add('mensaje__error');
        }else{
            divMesaje.classList.add('mensaje__success');
        }
        //mensaje
        divMesaje.textContent = mensaje;
        //agreamos al dom
        document.querySelector('.agregar-cita').appendChild(divMesaje);
    
        //quitamos la alerta despues de 4 segundos
        setTimeout(() => {
            divMesaje.remove();
        }, 4000);
    }

    imprimirCitas({citas}){

        this.limpiarHTML();

        citas.forEach(cita => {
            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

            const divCita = document.createElement('div');
            divCita.classList.add('div__cita');
            divCita.dataset.id = id;

            //scripting de los elementos de la cita
            const mascotaTexto = document.createElement('h2');
            mascotaTexto.textContent = mascota;

            const propietarioTexto = document.createElement('p');
            propietarioTexto.innerHTML = `Propietario: ${propietario}`;
            
            const telefonoTexto = document.createElement('p');
            telefonoTexto.innerHTML = `Telefono: ${telefono}`;

            const fechaTexto = document.createElement('p');
            fechaTexto.innerHTML = `Fecha: ${fecha}`;

            const horaTexto = document.createElement('p');
            horaTexto.innerHTML = `Hora: ${hora}`;

            const sintomasTexto = document.createElement('p');
            sintomasTexto.innerHTML = `Sintomas: ${sintomas}`;

            //boton para eliminar cita
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn__eliminar');
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.onclick = () => eliminarCita(id);

            //boton para editar
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn__editar');
            btnEditar.textContent = 'Editar';
            btnEditar.onclick = () => cargarEdicion(cita);

            //agregar campos al divCita
            divCita.appendChild(mascotaTexto);
            divCita.appendChild(propietarioTexto);
            divCita.appendChild(telefonoTexto);
            divCita.appendChild(fechaTexto);
            divCita.appendChild(horaTexto);
            divCita.appendChild(sintomasTexto);
            
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);

            //agregar citas al html
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
const ui = new UI();
const administrarCitas = new Citas();


// funciones
function datosCita(e){
    citaObj[e.target.name] = e.target.value;
}

// valida y agrega una nueva cita
function nuevaCita(e){
    e.preventDefault();

    //extraer la informacion del objeto
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;
    //validamos
    if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){
        ui.imprimirAlerta('TOdos los campos son obligatorios', 'error');
        return;
    }

    if(editando){
        //pasar el objeto de la cita a edicion
        administrarCitas.editarCita({...citaObj})

        // mensaje de agregado
        ui.imprimirAlerta('Editado correctamente');
        // cambiar el texto del boton
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';
        // quitar modo edicion
        editando = false;

    }else{
        //generar un id unico
        citaObj.id = Date.now();
        // creando un nueva cita
        administrarCitas.agregarCita({...citaObj});
        // mensaje de agregado
        ui.imprimirAlerta('Cita agregada correctamente');
    }

    
    // reniciamos el objeto para la validacion
    reiniciarObjeto();
    //limpia el formulario
    formulario.reset();

    //mostrar el html en las citas
    ui.imprimirCitas(administrarCitas);

}

function reiniciarObjeto(){
    
    citaObj.mascota = '',
    citaObj.propietario ='',
    citaObj.telefono = '',
    citaObj.fecha = '',
    citaObj.hora = '',
    citaObj.sintomas = ''
    
}

function eliminarCita(id){
    //eliminar cita
    administrarCitas.eliminarCitas(id);
    // muestra mensaje
    ui.imprimirAlerta('Cita Eliminada');
    //refrescar las citas
    ui.imprimirCitas(administrarCitas);

}

// cargar los datos y el modo edicion
function cargarEdicion(cita){

    const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;
    //llenar los inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    //llenar el objeto
    citaObj.mascota = mascota;
    citaObj.propietario =propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    // cambiar el texto del boton
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';
    
    editando = true;
}