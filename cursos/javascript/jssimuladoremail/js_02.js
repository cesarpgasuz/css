//variables
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

    resetBtn.addEventListener('click', resetearFormulario);

    formulario.addEventListener('submit', enviarEmail);

    
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

        console.log('si hay algo')
        e.target.classList.remove('failed');
        e.target.classList.add('success');
    }else{
        e.target.classList.remove('success')
        e.target.classList.add('failed');
        mostrarError('Todos los campos son obligatorios');
        btnEnviar.disabled = true;
        btnEnviar.classList.add('disabled');
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
            e.target.classList.remove('success');
            mostrarError('email no valido')
        }

    }


    if(er.test(email.value) && asunto.value !== '' && mensaje.value !== '' ){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('disabled');

    } 



}

function mostrarError(mensaje){
   
   
    mensajeError.classList.add('mensaje__error', 'error');
    mensajeError.textContent = mensaje;

    const errores = document.querySelectorAll('.error');

    if(errores.length === 0){
        
        formulario.appendChild(mensajeError);

    }

    

}



function enviarEmail(e){
    e.preventDefault();

    const spinner = document.querySelector('.spinner');
    spinner.style.display = 'flex';
    spinner.style.justifyContent = 'center';

    setTimeout(() => {
        spinner.style.display = 'none';

        const parrafo = document.createElement('p');
        parrafo.textContent = 'Mensaje Enviado Correctamente';
        parrafo.classList.add('mensaje__enviado');

        formulario.insertBefore(parrafo, spinner);

        setTimeout(() => {
            parrafo.remove();
            resetearFormulario();
            
        }, 3000);



    }, 3000);
    


}


function resetearFormulario(){
    formulario.reset();
    iniciarApp();
    email.classList.remove('success', 'failed');
    asunto.classList.remove('success', 'failed');
    mensaje.classList.remove('success', 'failed');

    mensajeError.remove();


    
}