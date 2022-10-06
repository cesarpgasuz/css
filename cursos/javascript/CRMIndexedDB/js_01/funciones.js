function mostrarAlerta(mensaje, tipo){

		const alerta = document.querySelector('.alerta');

		if(!alerta){
			const divMensaje = document.createElement('div');
			divMensaje.classList.add('alerta');

			if(tipo === 'error'){
				divMensaje.classList.add('mensaje__error');
			}else{
				divMensaje.classList.add('mensaje__success');
			}

			divMensaje.textContent = mensaje;

			formulario.appendChild(divMensaje);

			setTimeout(() => {
				divMensaje.remove();
			}, 2000)

		}

	}
