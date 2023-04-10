// variables
const enviar = document.querySelector('#enviar');
const resetBtn = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// eventListeners
eventListeners();

function eventListeners(){

	document.addEventListener('DOMContentLoaded', iniciarApp);
	email.addEventListener('blur', validar);
	asunto.addEventListener('blur', validar);
	mensaje.addEventListener('blur', validar);
	formulario.addEventListener('submit', enviarFormulario);
	resetBtn.addEventListener('click', resetearFormulario);
}


/// funciones
function iniciarApp(){
	enviar.disabled = true;
	enviar.classList.add('disabled');
}

function validar(e){

	if(e.target.value.length > 0){

		e.target.classList.remove('failed');
		e.target.classList.add('success');

		const alerta = document.querySelector('p.error');
		if(alerta){
			alerta.remove();
		}

		if(e.target.type === 'email'){

			if(er.test(e.target.value)){

				const alerta = document.querySelector('p.error');
				if(alerta){
					alerta.remove();
				}

				e.target.classList.add('success');
				e.target.classList.remove('failed');
			}else{

				mostrarError('Email No Valido');
				e.target.classList.remove('success');
				e.target.classList.add('failed');
			}

		}
		
	}else{
		mostrarError('Todos los campos son obligatorios');
		e.target.classList.remove('success');
		e.target.classList.add('failed');
	}


	if(er.test(email.value) && asunto.value !== '' && mensaje.value !== ''){
		enviar.disabled = false;
		enviar.classList.remove('disabled');
	}else{
		iniciarApp();
	}




}


function mostrarError(mensaje){

	const mensajeError = document.createElement('P');
	mensajeError.classList.add('mensaje__error', 'error');
	mensajeError.textContent = mensaje;

	const alerta = document.querySelectorAll('.error');

	if(alerta.length === 0){
		formulario.appendChild(mensajeError);
	}

}


function enviarFormulario(e){
	e.preventDefault();


	const spinner = document.querySelector('.spinner');
	spinner.classList.add('active');

	setTimeout(() => {
        
        formulario.reset();
		spinner.classList.remove('active');

		const mensajeEnviado = document.createElement('P');
		mensajeEnviado.classList.add('mensaje__enviado');
		mensajeEnviado.textContent = 'Mensaje Enviado Correctamente';

		formulario.insertBefore(mensajeEnviado, spinner);

		setTimeout(() => {

			mensajeEnviado.remove();

			resetearFormulario();

		},3000)


	},3000)



}

function resetearFormulario(){

	formulario.reset();
	iniciarApp();

	email.classList.remove('failed', 'success');
	asunto.classList.remove('failed', 'success');
	mensaje.classList.remove('failed', 'success');

	const mensajeError = document.querySelector('p.error');

	if(mensajeError){
		mensajeError.remove();
	}


}