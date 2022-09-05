//variables
const btnEnviar = document.querySelector('#enviar');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#enviar-mail');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


//funciones
eventListener();

function eventListener(){

    document.addEventListener('DOMContentLoaded', iniciarApp);

    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

}


function iniciarApp(){

    btnEnviar.disabled = true;
    btnEnviar.classList.add('disabled');

}

function validarFormulario(e){

    
 
   //validar que los campos no esten vacios
   if(e.target.value.length > 0){
    
    const error = document.querySelector('p.error');
    if(error){
        error.remove();
    }
    e.target.classList.add('success');
    e.target.classList.remove('failed');

   }else{
    mostrarError('todos los campos son obligatorios');
    e.target.classList.remove('success');
    e.target.classList.add('failed');
   }
   
   //validar el campo del email
   if(e.target.type === 'email'){
    if(er.test(e.target.value)){
        const error = document.querySelector('p.error');
        if(error){
            error.remove();
        }

        e.target.classList.remove('failed');
        e.target.classList.add('success');
    }else{
        mostrarError('email no valido');
        e.target.classList.add('failed');
        e.target.classList.remove('success');
    }


   }

    //validar las tres imputs

   if(er.test(email.value) && asunto.value !== '' & mensaje.value !== ''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('disabled');
   }

    
    }
    

   

 





function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.classList.add('mensaje__error', 'error');
    mensajeError.textContent = mensaje;


    const errores = document.querySelectorAll('.error');

    if(errores.length === 0){
      formulario.appendChild(mensajeError);  
    }

    


}