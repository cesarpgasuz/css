//variables
const btnEnviar = document.querySelector('#enviar');

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const form = document.querySelector('#enviar-mail');


//even listeners
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

//funcion para validar el formulario
function validarFormulario(e){
    
    if(e.target.value.length > 0 ){
        console.log('si hay algo')
    }else{
        
        e.target.classList.add('failed');

        mostrarError();

    }

}

function mostrarError(){

    const mensajeError = document.createElement('p');
    mensajeError.textContent = 'Todos los campos son obligarios';
    mensajeError.classList.add('error', 'mensaje__error');

    const errores = document.querySelectorAll('.error');

    if(errores.length === 0){
        form.appendChild(mensajeError);
    }

    


}
