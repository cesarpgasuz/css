document.addEventListener('DOMContentLoaded', function(){

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const btnEnviar = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const formulario = document.querySelector('#formulario');


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
        mensajeAlerta.classList.add('mensaje__error', 'alerta');
        mensajeAlerta.textContent = mensaje;

        referencia.appendChild(mensajeAlerta);

    }

    function limpiarAlerta(referencia){

        const alerta = referencia.querySelector('.alerta');
        if(alerta){
            alerta.remove();
        }
    }

    function validarEmail(email){

        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
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

        const spinner = document.querySelector('#spinner');
        spinner.classList.remove('hidden');
        spinner.classList.add('flex');

        setTimeout(() => {

            spinner.classList.add('hidden');

            const mensajeEnviado = document.createElement('P');
            mensajeEnviado.classList.add('mensaje__enviado');
            mensajeEnviado.textContent = 'Mensaje Enviado Correctamente';
            formulario.appendChild(mensajeEnviado);
            
            email.email = '';
            email.asunto = '';
            email.mensaje = '';
            formulario.reset();

            setTimeout(() => {

                mensajeEnviado.remove();

                comprobarEmail();

            }, 2500)


        }, 3000);

    }

    function resetearFormulario(){

        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();

        comprobarEmail();

    }


});