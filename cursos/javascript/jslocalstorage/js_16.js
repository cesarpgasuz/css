///// variables
const formulario = document.querySelector('#formulario');
const contenedorTweets = document.querySelector('#lista-tweets ul');

let tweets = [];

//// eventListeners
eventListeners();

function eventListeners(){

	formulario.addEventListener('submit', agregarTweet);
	document.addEventListener('DOMContentLoaded', () => {

		tweets = JSON.parse(localStorage.getItem('tweet')) || [];
		tweetHTML();
	});
}



/////// funciones
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

	formulario.reset();
	
	tweetHTML();


}

function tweetHTML(){

	limpiarHTML();

	if(tweets.length > 0){

		tweets.forEach(tweet => {
			const {texto, id} = tweet;

			const li = document.createElement('li');
			li.innerHTML = `${texto}`;
			li.classList.add('tweet');
			li.dataset.id = id;
			contenedorTweets.appendChild(li);

			const btnEliminar = document.createElement('button');
			btnEliminar.textContent = 'X';
			btnEliminar.classList.add('btn__eliminar');
			btnEliminar.onclick = () => {
				eliminarTweet(id);
			}

			li.appendChild(btnEliminar);


		});
	}


	sincronizarStorage();

}

function sincronizarStorage(){

	localStorage.setItem('tweet', JSON.stringify(tweets));

}

function eliminarTweet(id){

	tweets = tweets.filter(tweet => tweet.id !== id);
	console.log(tweets);
	tweetHTML();

}



function limpiarHTML(){
	while(contenedorTweets.firstChild){
		contenedorTweets.removeChild(contenedorTweets.firstChild);
	}
}

function mostrarError(mensaje){

	const mensajeError = document.createElement('P');
	mensajeError.classList.add('mensaje__error');
	mensajeError.textContent = mensaje;

	document.querySelector('.container').appendChild(mensajeError);

	setTimeout(() => {
		mensajeError.remove();

	}, 2500)



}