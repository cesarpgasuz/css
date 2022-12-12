
document.addEventListener('DOMContentLoaded', function(){

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnEnviar = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');
    

    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function(e){
        e.preventDefault();

        resetearFormulario();
    });


    function validar(e){

        if(e.target.value.trim() === ''){
            mostrarAlerta(`El campo ${e.target.id} esta vacio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta('Email No Valido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        limpiarAlerta(e.target.parentElement);

        email[e.target.name] = e.target.value.trim().toLowerCase();

        comprobarEmail();



    }

    function mostrarAlerta(mensaje, referencia){

        limpiarAlerta(referencia);

        const mensajeAlerta = document.createElement('P');
        mensajeAlerta.classList.add('mensaje__error', 'error');
        mensajeAlerta.textContent = mensaje;

        referencia.appendChild(mensajeAlerta);

    }

    function limpiarAlerta(referencia){
        const error = referencia.querySelector('p.error');
        if(error){
            error.remove();
        }
    }


    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail(){

        if(Object.values(email).includes('')){

            btnEnviar.disabled = true;
            btnEnviar.classList.add('opacity-50');
            return;
        }
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('opacity-50');
    }

    function enviarEmail(e){
        e.preventDefault();

        spinner.classList.remove('hidden');
        spinner.classList.add('flex');
        
        setTimeout(() => {
            
            spinner.classList.add('hidden');
            spinner.classList.remove('flex');

            const mensajeEnviado = document.createElement('P');
            mensajeEnviado.classList.add('mensaje__enviado');
            mensajeEnviado.textContent = 'Mensaje Enviado Correctamente';
            formulario.appendChild(mensajeEnviado);

          
            resetearFormulario();

            setTimeout(() => {
                
                mensajeEnviado.remove();
                

            }, 3000);



        }, 2500);



    }


    function resetearFormulario(){

        formulario.reset();

        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        comprobarEmail();

    }


});
