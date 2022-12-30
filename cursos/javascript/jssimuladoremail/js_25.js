///////////// variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const spinner = document.querySelector('.spinner');

/////////// eventListeners
eventListeners();

function eventListeners(){

    document.addEventListener('DOMContentLoaded', iniciarApp);

    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    formulario.addEventListener('submit', enviarFormulario);

    btnReset.addEventListener('click', reiniciarFormulario);
}





///////// funciones
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

        e.target.classList.add('success');
        e.target.classList.remove('failed');
    }else{

        mostrarAlerta('Todos los campos son obligatorios');
        e.target.classList.remove('success');
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
            mostrarAlerta('Email No Valido');
            e.target.classList.remove('success');
            e.target.classList.add('failed');
        }
    }


    if(er.test(email.value) && asunto.value !== '' && mensaje.value !== ''){

        btnEnviar.disabled = false;
        btnEnviar.classList.remove('disabled');

    }else{
        iniciarApp();
    }


}

function mostrarAlerta(mensaje){

    const mensajeAlerta = document.createElement('p');
    mensajeAlerta.classList.add('mensaje__error', 'error');
    mensajeAlerta.textContent = mensaje;

    const errores = document.querySelectorAll('p.error');
    if(errores.length === 0){
        formulario.appendChild(mensajeAlerta);
    }
}


function enviarFormulario(e){
    e.preventDefault();

    spinner.classList.add('active');

    setTimeout(() => {

        spinner.classList.remove('active');

        const mensajeEnviado = document.createElement('p');
        mensajeEnviado.classList.add('mensaje__enviado');
        mensajeEnviado.textContent = 'Mensaje Enviado Correctamente';

        formulario.insertBefore(mensajeEnviado, spinner);
        formulario.reset();

        setTimeout(() => {

            mensajeEnviado.remove();
            reiniciarFormulario();

        }, 3000)

    }, 3000)



}

function reiniciarFormulario(){

    formulario.reset();
    email.classList.remove('success', 'failed');
    asunto.classList.remove('success', 'failed');
    mensaje.classList.remove('success', 'failed');
    iniciarApp();

    const error = document.querySelector('p.error');
    if(error){
        error.remove();
    }

}