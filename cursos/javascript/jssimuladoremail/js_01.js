//variables
const btnEnviar = document.querySelector('#enviar');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#enviar-mail');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//envenlisteners
eventListeners();

function eventListeners(){

    document.addEventListener('DOMContentLoaded', iniciarApp);
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);


}



//funciones
function iniciarApp(){

    btnEnviar.disabled = true;
    btnEnviar.classList.add('disabled');

}


//validamos el formulario
function validarFormulario(e){

    if(e.target.value.length > 0){

        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }
        
        e.target.classList.add('success');
        e.target.classList.remove('failed');
    }else{
        e.target.classList.remove('success');
        e.target.classList.add('failed');
        mostrarMensaje('todos los campos son obligatorios');
    }


    if(e.target.type === 'email'){
        
        if(er.test(e.target.value)){

            const error = document.querySelector('p.error');
            if(error){
                error.remove();
            }

            e.target.classList.remove('failed');
            e.target.classList.add('success');
        }else{
            e.target.classList.remove('success');
            e.target.classList.add('failed');
            mostrarMensaje('email no valido')
        }
    }

    if(er.test(email.value) && asunto.value !== '' && mensaje.value !== ''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('disabled');
    }






}


//funcion para mostrar mensaje de error
function mostrarMensaje(mensaje){

    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('mensaje__error', 'error');


    const errores = document.querySelectorAll('.error');

    if(errores.length === 0){
        formulario.appendChild(mensajeError);
    }

}