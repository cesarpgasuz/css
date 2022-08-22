// variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');

let tweets = [];



///eventlisteners
eventListeners();

function eventListeners(){

	formulario.addEventListener('submit', agregarTweet);
	document.addEventListener('DOMContentLoaded', () => {

		tweets = JSON.parse(localStorage.getItem('tweets')) || [];

		tweetHTML();

	})

}


//funciones
function agregarTweet(e){
	e.preventDefault();
	
	const tweet = document.querySelector('#tweet').value;

	if(tweet.length < 0 ){
		mostrarError();
		return;
	}

	const tweetObj = {
		id: Date.now(),
		texto: tweet,
	}

	tweets = [...tweets, tweetObj];
	console.log(tweets);


	tweetHTML();
	formulario.reset();


}

function mostrarError(){
	const mensajeError = document.createElement('p');
	mensajeError.textContent = 'escribe un tweet';
	mensajeError.classList.add('mensaje__error');

	const contenido = document.querySelector('#contenido');

	contenido.appendChild(mensajeError);

	setTimeout(() => {
		mensajeError.remove();
	}, 1500)
}



function tweetHTML(){

	limpiarHTML();

	tweets.forEach(tweet => {
		const tweetItem = document.createElement('p');
		tweetItem.classList.add('tweet');
		tweetItem.textContent = tweet.texto;

		listaTweets.appendChild(tweetItem);
	})

	sincronizarStorage();


}

function sincronizarStorage(){

	localStorage.setItem('tweets', JSON.stringify(tweets));
}


function limpiarHTML(){
	while(listaTweets.firstChild){
		listaTweets.removeChild(listaTweets.firstChild);
	}
}
