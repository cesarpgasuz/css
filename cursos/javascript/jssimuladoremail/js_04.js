//variables
const btnEnviar = document.querySelector('#enviar');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const formulario = document.querySelector('#enviar-mail');

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

	resetBtn.addEventListener('click', resetearFormulario);

}



//iniciamos la aplicacion
function iniciarApp() {
	btnEnviar.disabled = true;
	btnEnviar.classList.add('disabled');

}



//funcion para validar el formulario
function validarFormulario(e){
	if(e.target.value.length > 0){

		const error = document.querySelector('p.error');
		if(error){
			error.remove();
		}


		console.log('si hay algo')
		e.target.classList.add('success');
		e.target.classList.remove('failed')
	}else{
		e.target.classList.add('failed');
		e.target.classList.remove('success');
		mostrarError('Todos los campos son obligatorios');
	}


	//validamos el campo del email
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
			mostrarError('email no valido');
		}
	

	}

	if(er.test(email.value) && asunto.value !== '' && mensaje.value !== ''){

		btnEnviar.disabled = false;
		btnEnviar.classList.remove('disabled');

	}




}



//mostramos un mensaje de error 
function mostrarError(mensaje){

	
	mensajeError.classList.add('error', 'mensaje__error');
	mensajeError.textContent = mensaje;

	const errores = document.querySelectorAll('.error');

	if(errores.length === 0){
		formulario.appendChild(mensajeError);
	}

	

}


//funcion para mostrar spinner y hacer la simulacion del envio del email
function enviarFormulario(e){
	e.preventDefault();
	const spinner = document.querySelector('.spinner');
	spinner.style.display = 'flex';
	spinner.style.justifyContent = 'center';


	setTimeout(() => {

		spinner.style.display = 'none';

		const mensajeEnviado = document.createElement('p');
		mensajeEnviado.classList.add('mensaje__enviado');
		mensajeEnviado.textContent = 'Mensjae enviado con exito';

		formulario.insertBefore(mensajeEnviado, spinner);


		setTimeout(() => {
			mensajeEnviado.remove();
			resetearFormulario();

		}, 2000)



	}, 3000)


}


//funcion para resetear el formulario despues de enviarlo
function resetearFormulario(){

	formulario.reset();
	iniciarApp();
	email.classList.remove('success', 'failed');
	asunto.classList.remove('success', 'failed');
	mensaje.classList.remove('success', 'failed');
	mensajeError.remove();

}