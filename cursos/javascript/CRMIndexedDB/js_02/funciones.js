function mostrarAlerta(mensaje, tipo){

	const alerta = document.querySelector('p.alerta');

	if(!alerta){

		const mensajeAlerta = document.createElement('p');
		mensajeAlerta.classList.add('alerta');

		if(tipo === 'error'){
			mensajeAlerta.classList.add('mensaje__error');
		}else{
			mensajeAlerta.classList.add('mensaje__success');
		}
		mensajeAlerta.textContent = mensaje;

		formulario.appendChild(mensajeAlerta);

		setTimeout(() => {
			mensajeAlerta.remove();
		}, 2500);

	}
	
}