/// variables
const formulario = document.querySelector('#formulario');
const contenedorTweets = document.querySelector('#lista-tweets ul');
const limpiarStorage = document.querySelector('#limpiar-storage');


let tweets = [];
/// eventListeners

eventListeners();

function eventListeners(){

	formulario.addEventListener('submit', agregarTweet);
	document.addEventListener('DOMContentLoaded', function(){

		tweets = JSON.parse(localStorage.getItem('tweet')) || [];
		tweetHTML();

	});
	limpiarStorage.addEventListener('click', function(){
		localStorage.clear();
	})
}


/// funciones
function agregarTweet(e){
	e.preventDefault();

	const tweet = document.querySelector('#tweet').value;

	if(tweet === ''){
		mostrarError('No has agregado ningun tweet');
		return;
	}

	const tweetObj = {
		texto: tweet,
		id: Date.now()
	}


	tweets = [...tweets, tweetObj];
	console.log(tweets);
	tweetHTML();
	formulario.reset();

}

function mostrarError(mensaje){

	const mensajeError = document.createElement('P');
	mensajeError.classList.add('mensaje__error');
	mensajeError.textContent = mensaje;
	document.querySelector('#contenido').appendChild(mensajeError);

	setTimeout(() => {
		mensajeError.remove();
	}, 2500)
}

function eliminarTweet(id) {
	tweets = tweets.filter(tweet => tweet.id !== id);
	console.log(tweets);
	tweetHTML();
}

function tweetHTML(){

	limpiarHTML();

	if(tweets.length > 0){

		tweets.forEach(tweet => {

		const {texto, id} = tweet;
		const tweetItem = document.createElement('li');
		tweetItem.classList.add('tweet');
		tweetItem.dataset.id = id;
		tweetItem.textContent = texto;

		const btnEliminar = document.createElement('button');
		btnEliminar.classList.add('btn__eliminar');
		btnEliminar.textContent = 'X';
		btnEliminar.onclick = () => {
			eliminarTweet(id);
		}

		tweetItem.appendChild(btnEliminar);
		contenedorTweets.appendChild(tweetItem);


		});
	}

	sincronizarStorage();

}

function sincronizarStorage(){

	localStorage.setItem('tweet', JSON.stringify(tweets));

}


function limpiarHTML() {
	while(contenedorTweets.firstChild){
		contenedorTweets.removeChild(contenedorTweets.firstChild);
	}
}