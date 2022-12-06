////variables
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#enviar-mail');
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

/// eventListeners

eventListeners();

function eventListeners(){

    document.addEventListener('DOMContentLoaded', iniciarApp);
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', resetearFormulario);

}




//// funciones
function iniciarApp(){

    btnEnviar.disabled = true;
    btnEnviar.classList.add('disabled');
}

function validarFormulario(e){

    /// valida si hay campos vacios
    if(e.target.value.length > 0){

        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }

        e.target.classList.remove('failed');
        e.target.classList.add('success');

    }else{

        mostrarAlerta('Todos los campos son obligatorios');
        e.target.classList.add('failed');
    }

    // valida si en el campo email se coloco un email valido
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
            mostrarAlerta('Email No Valido');

        }

    }

    // verifica si todos los campos estan llenos para habilitar el boton de enviar
    if(er.test(email.value) && asunto.value !== '' & mensaje.value !== ''){

        btnEnviar.disabled = false;
        btnEnviar.classList.remove('disabled');
    }else{
        iniciarApp();
    }

}

function mostrarAlerta(mensaje){

    const mensajeAlerta = document.createElement('P');
    mensajeAlerta.classList.add('mensaje__error', 'error');
    mensajeAlerta.textContent = mensaje;

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0){
        formulario.appendChild(mensajeAlerta);
    }
}

function enviarEmail(e){
    e.preventDefault();

    const spinner = document.querySelector('.spinner');
    spinner.classList.add('active');

    setTimeout(() => {
        
        spinner.classList.remove('active');

        const mensajeEnviado = document.createElement('P');
        mensajeEnviado.classList.add('mensaje__enviado');
        mensajeEnviado.textContent = 'Mensaje Enviado Correctamente';

        formulario.insertBefore(mensajeEnviado, spinner);

        formulario.reset();

        setTimeout(() => {

            mensajeEnviado.remove();
            resetearFormulario();
            
        }, 3000);


    }, 3000);



}


function resetearFormulario(){
    iniciarApp();

    email.classList.remove('success', 'failed');
    asunto.classList.remove('success', 'failed');
    mensaje.classList.remove('success', 'failed');

    formulario.reset();

    const error = document.querySelector('p.error');

    if(error){
        error.remove();
    }
}