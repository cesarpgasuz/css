//variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];



//eventlisteneres
eventListeners();

function eventListeners(){

	formulario.addEventListener('submit', agregarTweet);

	document.addEventListener('DOMContentLoaded', () => {

		tweets = JSON.parse(localStorage.getItem('tweets')) || [];

		crearTweet();


	})

}

//funciones
function agregarTweet(e){
	e.preventDefault();
	const tweet = document.querySelector('#tweet').value;

	if(tweet === ''){
		mostrarError('No has escrito ningun tweet');
		return;
	}

	const tweetObj = {
		id: Date.now(),
		texto: tweet
	}

	tweets = [...tweets, tweetObj];

	console.log(tweets);

	crearTweet();
	formulario.reset();

}


function mostrarError(error){
	const mensajeError = document.createElement('p');
	mensajeError.classList.add('mensaje__error');
	mensajeError.textContent = error;

	const contenido = document.querySelector('#contenido');
	contenido.appendChild(mensajeError);

	setTimeout(() => {
		mensajeError.remove();
	}, 2500)
}



function crearTweet(){

	limpiarHTML();

	if(tweets.length > 0 ){

		tweets.forEach(tweet => {
			const tweetItem = document.createElement('p');
			tweetItem.textContent = tweet.texto;
			tweetItem.classList.add('tweet');
			listaTweets.appendChild(tweetItem);

			const btnEliminar = document.createElement('button');
			btnEliminar.textContent = 'X';

			btnEliminar.onclick = () => {
				eliminarTweet(tweet.id);
			}
			tweetItem.appendChild(btnEliminar);


		})


	}
	sincronizarStorage();

}


function sincronizarStorage(){
	localStorage.setItem('tweets', JSON.stringify(tweets));
}





function eliminarTweet(id){
	tweets = tweets.filter(tweet => tweet.id !== id);
	console.log(tweets);
	crearTweet();
}

function limpiarHTML(){
	while(listaTweets.firstChild){
		listaTweets.removeChild(listaTweets.firstChild);
	}
}

