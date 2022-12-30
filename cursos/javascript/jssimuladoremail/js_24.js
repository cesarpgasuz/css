///////// variables
const formulario = document.querySelector('#enviar-mail');
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const spinner = document.querySelector('.spinner');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


//// eventListeners

eventListeners();

function eventListeners(){

    document.addEventListener('DOMContentLoaded', iniciarApp);
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', reiniciarFormulario);

}



///// funciones
function iniciarApp(){

    btnEnviar.disabled = true;
    btnEnviar.classList.add('disabled');

}

function validarFormulario(e){

    if(e.target.value.length > 0){

        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }

        e.target.classList.remove('failed');
        e.target.classList.add('success');

    }else{
        mostrarError('Todos los campos son obligatorios');
        e.target.classList.add('failed');

    }


    if(e.target.type === 'email'){

        if(er.test(e.target.value)){

            const error = document.querySelector('p.error');
            if(error){
                error.remove();
            }

            e.target.classList.add('success');
            e.target.classList.remove('failed');

        }else{
            mostrarError('Email No Valido');
            e.target.classList.add('failed');
            e.target.classList.remove('success');

        }

    }


    if(er.test(email.value) && asunto.value !== '' && mensaje.value !== ''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('disabled');
    }else{
        iniciarApp();
    }

}

function mostrarError(mensaje){

    const mensajeError = document.createElement('p');
    mensajeError.classList.add('mensaje__error', 'error');
    mensajeError.textContent = mensaje;

    const error = document.querySelectorAll('.error');

    if(error.length === 0){
        formulario.appendChild(mensajeError);
    }



}

function enviarEmail(e){
    e.preventDefault();

    spinner.classList.add('active');

    setTimeout(() => {

        spinner.classList.remove('active');

        const mensajeEnviado = document.createElement('p');
        mensajeEnviado.textContent = 'Mensaje Enviado Correctamente';
        mensajeEnviado.classList.add('mensaje__enviado');
        formulario.insertBefore(mensajeEnviado, spinner);

        formulario.reset();

        setTimeout(() => {

            mensajeEnviado.remove();
            reiniciarFormulario();

        },3000)



    }, 2500)

}


function reiniciarFormulario(){

    formulario.reset();
    iniciarApp();
    email.classList.remove('failed', 'success');
    asunto.classList.remove('failed', 'success');
    mensaje.classList.remove('failed', 'success');

    const error = document.querySelector('p.error');

    if(error){
        error.remove();
    }


}