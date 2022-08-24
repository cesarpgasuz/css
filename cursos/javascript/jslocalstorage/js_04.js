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

        tweetHTML();

    })

}


//funciones
function agregarTweet(e){
    e.preventDefault();
    
    const tweet = document.querySelector('#tweet').value;

    if(tweet === ''){
        mostrarError('No has escrito ningun tweet XD');
        return;
    }

    const tweetObjt = {
        id: Date.now(),
        texto: tweet
    }

    tweets = [...tweets, tweetObjt];

    console.log(tweets)
    tweetHTML();

    formulario.reset();


}

function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('mensaje__error', 'error-no-tweet');

    const contenido = document.querySelector('#contenido');

    if(document.querySelectorAll('.error-no-tweet').length === 0){
       contenido.appendChild(mensajeError); 
    }

    setTimeout(() => {
        mensajeError.remove();
    }, 2000)

}


function tweetHTML(){

    limpiarHTML();

    tweets.forEach(tweet => {
        const tweetItem = document.createElement('p');
        tweetItem.textContent = tweet.texto;
        tweetItem.classList.add('tweet');

        const btnEliminar = document.createElement('button');
        btnEliminar.classList.add('btn__eliminar');
        btnEliminar.textContent = 'X';
        
      
        btnEliminar.onclick = () => {
            eliminarTweet(tweet.id);
        }



        listaTweets.appendChild(tweetItem);
        tweetItem.appendChild(btnEliminar);
    })


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