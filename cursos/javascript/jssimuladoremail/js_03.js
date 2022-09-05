//variable
const btnEnviar = document.querySelector('#enviar');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#enviar-mail');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const resetBtn = document.querySelector('#resetBtn');

const mensajeError = document.createElement('p');

//funciones
eventListeners();

function eventListeners(){

    document.addEventListener('DOMContentLoaded', iniciarApp);
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    formulario.addEventListener('submit', enviarFormulario);
    resetBtn.addEventListener('click', limpiarFormulario);

}


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
        e.target.classList.remove('success')
        e.target.classList.add('failed');
        mostrarError('Todos los campos son obligatorios');
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
            e.target.classList.add('failed');
            e.target.classList.remove('succes');
            mostrarError('Email no valido')

        }
    }

    if(er.test(email.value) && asunto.value !== '' && mensaje.value !== ''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('disabled');
    }




}


function mostrarError(mensaje){

    
    mensajeError.classList.add('error', 'mensaje__error');
    mensajeError.textContent = mensaje;

    const errores = document.querySelectorAll('.error');
    console.log(errores)
    if(errores.length === 0){
        formulario.appendChild(mensajeError);
    }

   
}


function enviarFormulario(e){
    e.preventDefault();

    const spinner = document.querySelector('.spinner');
    spinner.style.display = 'flex';


    setTimeout(() => {
        spinner.style.display = 'none';
        const mensajeEnviado = document.createElement('p');
        mensajeEnviado.textContent = 'Mensaje Enviado';
        mensajeEnviado.classList.add('mensaje__enviado');
        formulario.insertBefore(mensajeEnviado, spinner);
        
        setTimeout(() => {

            
            mensajeEnviado.remove();
            limpiarFormulario();

        }, 2000);

    }, 3000);



}


function limpiarFormulario(){
    formulario.reset();
    email.classList.remove('failed', 'success');
    asunto.classList.remove('failed', 'success');
    mensaje.classList.remove('failed', 'success');
    mensajeError.remove();
    iniciarApp();
}