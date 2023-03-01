document.addEventListener('DOMContentLoaded', function(){

	///variables

	const emailObj = {
		email: '',
		asunto: '',
		mensaje: ''
	}

	const formulario = document.querySelector('#formulario');
	const inputEmail = document.querySelector('#email');
	const inputAsunto = document.querySelector('#asunto');
	const inputMensaje = document.querySelector('#mensaje');
	const enviarButton = document.querySelector('#botones button[type="submit"]');
	const resetButton = document.querySelector('#botones button[type="reset"]');
	const spinner = document.querySelector('#spinner');


	///eventListeners

	inputEmail.addEventListener('blur', validar);
	inputAsunto.addEventListener('blur', validar);
	inputMensaje.addEventListener('blur', validar);
	formulario.addEventListener('submit', enviarFormulario);
	resetButton.addEventListener('click', (e) => {
		e.preventDefault();
		resetearFormulario();
	})


	///funciones

	function validar(e){

		if(e.target.value.trim() === ''){
			mostrarError(`El campo ${e.target.id} esta vacio`, e.target.parentElement);
			emailObj[e.target.name] = '';
			comprobarEmail();
			return;
		}

		if(e.target.id === 'email' && !validarEmail(e.target.value)){
			mostrarError('Email No Valido', e.target.parentElement);
			emailObj[e.target.name] = '';
			comprobarEmail();
			return;
		}

		limpiarAlerta(e.target.parentElement);
		
		emailObj[e.target.name] = e.target.value.trim().toLowerCase();

		comprobarEmail();

	}

	function mostrarError(mensaje, referencia){

		limpiarAlerta(referencia);

		const mensajeError = document.createElement('P');
		mensajeError.classList.add('mensaje__error', 'error');
		mensajeError.textContent = mensaje;

		referencia.appendChild(mensajeError);

	}

	function limpiarAlerta(referencia){

		const alerta = referencia.querySelector('p.error');

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

		if(Object.values(emailObj).includes('')){
			enviarButton.disabled = true;
			enviarButton.classList.add('opacity-50');
			return;
		}

		enviarButton.disabled = false;
		enviarButton.classList.remove('opacity-50');
	}

	function enviarFormulario(e){
		e.preventDefault();

		spinner.classList.remove('hidden');
		spinner.classList.add('flex');

		setTimeout(() => {

			spinner.classList.remove('flex');
			spinner.classList.add('hidden');

			formulario.reset();

			const mensajeEnviado = document.createElement('P');
			mensajeEnviado.classList.add('mensaje__enviado');
			mensajeEnviado.textContent = 'Mensaje Enviado Correctamente';

			formulario.appendChild(mensajeEnviado);


			setTimeout(() => {

				mensajeEnviado.remove();
				resetearFormulario();

			}, 3000)


		}, 2000)

	}


	function resetearFormulario(){

		formulario.reset();
		emailObj.email = '';
		emailObj.asunto = '';
		emailObj.mensaje = '';
		comprobarEmail();
	}



});