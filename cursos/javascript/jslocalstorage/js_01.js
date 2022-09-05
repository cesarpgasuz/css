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

    tweetHTML();

    formulario.reset();

}

function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('mensaje__error');

    const contenido = document.querySelector('#contenido');

    contenido.appendChild(mensajeError);


    setTimeout(() => {
        mensajeError.remove();
    }, 2500)

}


function tweetHTML(){

    limpiarHTML();

    if(tweets.length > 0){

        tweets.forEach(tweet => {

            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'x';
            btnEliminar.classList.add('btn__eliminar');

            btnEliminar.onclick = () => {
                eliminarTweet(tweet.id);
            }

            const tweetItem = document.createElement('p');
            tweetItem.textContent = tweet.texto;
            tweetItem.classList.add('tweet');

            tweetItem.appendChild(btnEliminar);

            listaTweets.appendChild(tweetItem);


        })

    }

    sincronizarStorage();

}



function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}


function eliminarTweet(id){

    tweets = tweets.filter(tweet => tweet.id !== id);
    tweetHTML();


}



function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}