//variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//addeventlisteners
eventListeners();

function eventListeners(){

	formulario.addEventListener('submit', agregarTweet);

	document.addEventListener('DOMContentLoaded', () => {

		tweets = JSON.parse(localStorage.getItem('tweets')) || [];
		console.log(tweets);
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

	crearTweet();
	formulario.reset();


}

function mostrarError(mensaje){
	const mensajeError = document.createElement('p');
	mensajeError.textContent = mensaje;
	mensajeError.classList.add('mensaje__error');

	const contenido = document.querySelector('#contenido');
	contenido.appendChild(mensajeError);

	setTimeout(() => {
		mensajeError.remove();
	},2000)
}


function crearTweet(){

	limpiarHTML();

	if(tweets.length > 0){

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

		});


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
	crearTweet();
}