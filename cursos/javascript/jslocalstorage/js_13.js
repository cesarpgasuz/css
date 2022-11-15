//variables
const contenido = document.querySelector('#contenido');
const formulario = document.querySelector('#formulario');
const contenedorTweets = document.querySelector('#lista-tweets ul');
let tweets = [];


//eventListeners
eventListeners();

function eventListeners(){

	document.addEventListener('DOMContentLoaded', () => {

		tweets = JSON.parse(localStorage.getItem('tweet')) || [];
		tweetHTML();

	})


	formulario.addEventListener('submit', enviarFormulario);
}




//funciones
function enviarFormulario(e){
	e.preventDefault();

	const tweet = document.querySelector('#tweet').value;

	if(tweet === ''){
		mostrarAlerta('No has escrito ningun tweet');
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




function tweetHTML(){

	limpiarHTML();

	if(tweets.length > 0){
		tweets.forEach(tweet => {

		const {texto, id} = tweet;

		const tweetItem = document.createElement('li');
		tweetItem.classList.add('tweet');
		tweetItem.textContent = texto;
		tweetItem.dataset.id = id;

		const btnEliminar = document.createElement('button');
		btnEliminar.textContent = 'Eliminar';
		btnEliminar.classList.add('btn__eliminar');

		btnEliminar.onclick = () => {
			eliminarTweet(id);
		}

		tweetItem.appendChild(btnEliminar);
		contenedorTweets.appendChild(tweetItem);

		})


	}

	
	sincronizarStorage();
}



function sincronizarStorage(){

	localStorage.setItem('tweet', JSON.stringify(tweets));

}


function eliminarTweet(id){

	tweets = tweets.filter(tweet => tweet.id !== id);
	tweetHTML();

}




function limpiarHTML(){
	while(contenedorTweets.firstChild){
		contenedorTweets.removeChild(contenedorTweets.firstChild);
	}
}






function mostrarAlerta(mensaje){

	const alerta = document.querySelector('p.alerta');

	if(!alerta){
		const mensajeAlerta = document.createElement('p');
		mensajeAlerta.classList.add('mensaje__error', 'alerta');
		mensajeAlerta.textContent = mensaje;

		contenido.appendChild(mensajeAlerta);

		setTimeout(() => {
			mensajeAlerta.remove();
		},2500);
	}

	

}
