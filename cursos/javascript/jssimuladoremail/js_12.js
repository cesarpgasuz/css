//variables
const formulario = document.querySelector('#enviar-mail');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const mensajeError = document.createElement('p');


//eventListeners
eventListeners();

function eventListeners(){

	document.addEventListener('DOMContentLoaded', iniciarApp);
	email.addEventListener('blur', validarFormulario);
	asunto.addEventListener('blur', validarFormulario);
	mensaje.addEventListener('blur', validarFormulario);
	formulario.addEventListener('submit', enviarEmail);
	btnReset.addEventListener('click', resetearFormulario);

}

//funciones
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
		mostrarMensaje('Todos los Campos son Obligatorios')
		e.target.classList.add('failed');
		e.target.classList.remove('success');
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
			mostrarMensaje('Email no Valido');
			e.target.classList.add('failed');
			e.target.classList.remove('success');
		}

	}

	if(er.test(email.value) && asunto.value !== '' &&  mensaje.value !== ''){
		btnEnviar.disabled = false;
		btnEnviar.classList.remove('disabled');
	}else{
		btnEnviar.disabled = true;
		btnEnviar.classList.add('disabled');
	}





}


function mostrarMensaje(mensaje){
	
	mensajeError.textContent = mensaje;
	mensajeError.classList.add('mensaje__error', 'error');

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

		const mensajeEnviado = document.createElement('p');
		mensajeEnviado.classList.add('mensaje__enviado');
		mensajeEnviado.textContent = 'Mensaje Enviado Correctamente';
		formulario.insertBefore(mensajeEnviado, spinner);

		resetearFormulario();

		setTimeout(() => {
			mensajeEnviado.remove();
		}, 2500)

	}, 2500)



}


function resetearFormulario(){
	formulario.reset();
	iniciarApp();
	email.classList.remove('success', 'failed');
	asunto.classList.remove('success', 'failed');
	mensaje.classList.remove('success', 'failed');

	mensajeError.remove();
}