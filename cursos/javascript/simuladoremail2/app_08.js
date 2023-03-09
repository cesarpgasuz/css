
document.addEventListener('DOMContentLoaded', function(){

	/////// variables
	const email = {
		email: '',
		asunto: '',
		mensaje: ''
	}
	const formulario = document.querySelector('#formulario');
	const inputEmail = document.querySelector('#email');
	const inputAsunto = document.querySelector('#asunto');
	const inputMensaje = document.querySelector('#mensaje');
	const btnEnviar = document.querySelector('#formulario button[type="submit"]');
	const btnReset = document.querySelector('#formulario button[type="reset"]');
	const spinner = document.querySelector('#spinner');


	/// eventListeners

	inputEmail.addEventListener('blur', validar);
	inputAsunto.addEventListener('blur', validar);
	inputMensaje.addEventListener('blur', validar);
	formulario.addEventListener('submit', enviarFormulario);
	btnReset.addEventListener('click', function(e){
		e.preventDefault();
		reiniciarFormulario();
	});



	/// funciones
	function validar(e) {

		if(e.target.value.trim() === ''){
			mostrarError(`El campo ${e.target.id} esta vacio`, e.target.parentElement);
			comprobarEmail();
			email[e.target.name] = '';
			return;
		}

		if(e.target.id === 'email' && !validarEmail(e.target.value)){
			mostrarError('Email No Valido', e.target.parentElement);
			comprobarEmail();
			email[e.target.name] = '';
			return;
		}

		limpiarError(e.target.parentElement);

		email[e.target.name] = e.target.value.trim().toLowerCase();

		comprobarEmail();

	}

	function mostrarError(mensaje, referencia) {
		
		limpiarError(referencia);

		const mensajeError = document.createElement('P');
		mensajeError.classList.add('mensaje__error', 'error');
		mensajeError.textContent = mensaje;

		referencia.appendChild(mensajeError);
	}

	function limpiarError(referencia){

		const error = referencia.querySelector('.error');
		if(error){
			error.remove();
		}

	}

	function validarEmail(email){

		const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
		const resultado = regex.test(email);
		return resultado;
	}

	function comprobarEmail() {
		
		if(Object.values(email).includes('')){
			btnEnviar.disabled = true;
			btnEnviar.classList.add('opacity-50');
			return;
		}
			btnEnviar.disabled = false;
			btnEnviar.classList.remove('opacity-50');

	}

	function enviarFormulario(e) {
		e.preventDefault();

		spinner.classList.add('flex');
		spinner.classList.remove('hidden');

		setTimeout(() => {

			spinner.classList.remove('flex');
			spinner.classList.add('hidden');

			reiniciarFormulario();
			const mensajeEnviado = document.createElement('P');
			mensajeEnviado.classList.add('mensaje__enviado');
			mensajeEnviado.textContent = 'Mensaje Enviado Correctamente';
			formulario.appendChild(mensajeEnviado);

			setTimeout(() => {
				mensajeEnviado.remove();
			},3000)

		},2000)
	}


	function reiniciarFormulario(){

		formulario.reset();
		email.email = '';
		email.asunto = '';
		email.mensaje = '';
		comprobarEmail();
	}


});
