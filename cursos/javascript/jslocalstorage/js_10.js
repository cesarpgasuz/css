//variables
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

	//validamos
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
	const mensajeError = document.createElement('p');
	mensajeError.classList.add('mensaje__error');
	mensajeError.textContent = mensaje;

	formulario.appendChild(mensajeError);

	setTimeout(() => {
		mensajeError.remove();
	}, 2500)


}

function tweetHTML(){

	limpiarHTML();

	if(tweets.length > 0){

		tweets.forEach(tweet => {
				const {texto, id} = tweet;
				const tweetItem = document.createElement('div');
				tweetItem.classList.add('tweet');
				tweetItem.dataset.id = id;
				tweetItem.innerHTML = `${texto}`;

				const btnEliminar = document.createElement('button');
				btnEliminar.textContent = 'Eliminar';
				btnEliminar.classList.add('btn__eliminar');
				btnEliminar.onclick = () => eliminarTweet(id);

				tweetItem.appendChild(btnEliminar);

				listaTweets.appendChild(tweetItem);

			})


	}

	


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

function eliminarTweet(id){

	tweets = tweets.filter(tweet => tweet.id !== id);
	console.log(tweets);

	tweetHTML();
}