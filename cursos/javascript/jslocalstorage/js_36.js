/// variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets ul');
const limpiarStorage = document.querySelector('#limpiar-storage');
let tweets = [];

/// eventListeners
eventListeners();

function eventListeners(){

	limpiarStorage.addEventListener('click', () => {
		localStorage.clear();
	});

	document.addEventListener('DOMContentLoaded', () => {

		tweets = JSON.parse(localStorage.getItem('tweets')) || [];
		tweetHTML();

	});

	formulario.addEventListener('submit', agregarTweet);

}


//// funcines
function agregarTweet(e){
	e.preventDefault();

	const tweet = document.querySelector('#tweet').value.trim();

	if(tweet === ''){
		mostrarError('No has escrito ningun tweet');
		return;
	}

	/// objeto para guardar los tweets
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

	const mensajeError = document.querySelector('p.error');

	if(!mensajeError){

		const mensajeError = document.createElement('P');
		mensajeError.classList.add('mensaje__error', 'error');
		mensajeError.textContent = mensaje;
		formulario.appendChild(mensajeError);

		setTimeout(() => {
			mensajeError.remove();
		}, 3000)
	
	}

}

function tweetHTML() {

	limpiarHTML();
	

	if(tweets.length > 0){

		tweets.forEach(tweet => {
		const {texto, id} = tweet;

		const tweetItem = document.createElement('LI');
		tweetItem.classList.add('tweet');
		tweetItem.dataset.id = id;
		tweetItem.textContent = texto;

		const tweetButton = document.createElement('BUTTON');
		tweetButton.classList.add('btn__eliminar');
		tweetButton.textContent = 'X';
		tweetButton.onclick = () => {
			eliminarTweet(id);
		}

		tweetItem.appendChild(tweetButton);

		listaTweets.appendChild(tweetItem);

		});
	}

	sincronizarStorage();

}


function eliminarTweet(id){

	tweets = tweets.filter(tweet => tweet.id !== id);
	tweetHTML();

}


function sincronizarStorage(){

	localStorage.setItem('tweets', JSON.stringify(tweets));
}



function limpiarHTML(){
	while(listaTweets.firstChild){
		listaTweets.removeChild(listaTweets.firstChild);
	}
}