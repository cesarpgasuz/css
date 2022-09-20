/// variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


//eventListeners
eventListeners();

function eventListeners(){

	formulario.addEventListener('submit', agregarTweet);
	document.addEventListener('DOMContentLoaded', () => {

		tweets = JSON.parse(localStorage.getItem('tweets')) || [];
		tweetHTML();

	})
}

// funciones
function agregarTweet(e){
	e.preventDefault();

	const tweet = document.querySelector('#tweet').value;

	if(tweet === ''){
		mostrarError('No has escrito ningun tweet');
		return;
	}
	

	const tweetObj = {
		texto: tweet,
		id: Date.now()
	}


	tweets = [...tweets, tweetObj];

	tweetHTML();

	formulario.reset();


}

function mostrarError(error){

	const mensajeError = document.createElement('p');
	mensajeError.textContent = error;
	mensajeError.classList.add('mensaje__error', 'error');

	const errores = document.querySelectorAll('.error');

	if(errores.length === 0){
		const contenido = document.querySelector('#contenido');
		contenido.appendChild(mensajeError);
	}

	setTimeout(() => {
		mensajeError.remove();
	},3000)
	

}



function tweetHTML(){

	limpiarHTML();

	if(tweets.length > 0) {

		tweets.forEach(tweet => {
			const tweetItem = document.createElement('p');
			tweetItem.classList.add('tweet');
			tweetItem.textContent = tweet.texto;

			const btnEliminar = document.createElement('button');
			btnEliminar.classList.add('btn__eliminar');
			btnEliminar.textContent = 'X';
			btnEliminar.onclick = () => {
				eliminarTweet(tweet.id);
			}

			tweetItem.appendChild(btnEliminar);

			listaTweets.appendChild(tweetItem);


		})
	}
	
	sincronizarStorage();

}

function sincronizarStorage(){

	localStorage.setItem('tweets', JSON.stringify(tweets))

}


function limpiarHTML(){

	while(listaTweets.firstChild){
		listaTweets.removeChild(listaTweets.firstChild);
	}

}

function eliminarTweet(id){

	tweets = tweets.filter(tweet => tweet.id !== id);
	tweetHTML();

}