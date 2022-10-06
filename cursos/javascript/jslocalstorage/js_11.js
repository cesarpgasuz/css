//variables
const listaTweets = document.querySelector('#lista-tweets');
const formulario = document.querySelector('#formulario');
let tweets = [];


//eventListeners
eventListeners();

function eventListeners(){

	document.addEventListener('DOMContentLoaded', () => {
		
		tweets = JSON.parse(localStorage.getItem('tweets')) || [];
		tweetHTML();

	} )

	formulario.addEventListener('submit', agregarTweet);

}



//Funcinoes
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
	console.log(tweets);
	
	tweetHTML();

	formulario.reset();
}


function mostrarError(mensaje){

	const error = document.querySelector('p.error');

	if(!error){

		const mensajeError = document.createElement('p');
		mensajeError.classList.add('mensaje__error', 'error');
		mensajeError.textContent = mensaje;

		document.querySelector('#contenido').appendChild(mensajeError);

		setTimeout(() => {
			mensajeError.remove();
		},2000)
	}

}


function tweetHTML(){

	limpiarHTML();

	if(tweets.length > 0){

		tweets.forEach(tweet => {

			const {texto, id} = tweet;

			const tweetItem = document.createElement('p');
			tweetItem.classList.add('tweet');
			tweetItem.textContent = texto;
			tweetItem.dataset.id = id;

			const btnEliminar = document.createElement('button');
			btnEliminar.classList.add('btn__eliminar');
			btnEliminar.textContent = 'Eliminar';

			btnEliminar.onclick = () => {
				eliminarTweet(id);
			}


			tweetItem.appendChild(btnEliminar);
			listaTweets.appendChild(tweetItem);
		})

	}

	sincronizarStorage();

}


function limpiarHTML(){
	while(listaTweets.firstChild){
		listaTweets.removeChild(listaTweets.firstChild);
	}
}


function eliminarTweet(id){

	tweets = tweets.filter(tweet => tweet.id !== id);
	console.log(tweets);
	tweetHTML();

}

function sincronizarStorage(){

	localStorage.setItem('tweets', JSON.stringify(tweets));

}
