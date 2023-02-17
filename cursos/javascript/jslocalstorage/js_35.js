//// variables
const listaTweets = document.querySelector('#lista-tweets ul');
const formulario = document.querySelector('#formulario');

let tweets = [];

/// eventListeners
eventListeners();

function eventListeners(){

    formulario.addEventListener('submit', agregarTweet);
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweet')) || [];
        tweetHTML();
    })

}



/// funciones
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

    formulario.reset();

    tweetHTML();

}

function eliminarTweet(id){

    tweets = tweets.filter(tweet => tweet.id !== id);
    tweetHTML();

}


function tweetHTML(){

    limpiarHTML();

    if(tweets.length > 0){

        tweets.forEach(tweet => {
            const {texto, id} = tweet;

            const tweetItem = document.createElement('li');
            tweetItem.classList.add('tweet');
            tweetItem.dataset.id = id;
            tweetItem.innerHTML = texto;
            //boton eliminar tweet
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn__eliminar');
            btnEliminar.textContent = 'X';
            btnEliminar.onclick = () => {
                eliminarTweet(id);
            }
            tweetItem.appendChild(btnEliminar);

            listaTweets.appendChild(tweetItem);

        })


    }

    sincronizarStorage();


}

function sincronizarStorage(){

    localStorage.setItem('tweet', JSON.stringify(tweets));

}


function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

function mostrarError(mensaje){

    const mensajeError = document.createElement('p');
    mensajeError.classList.add('mensaje__error');
    mensajeError.textContent = mensaje;

    document.querySelector('.container').appendChild(mensajeError);

    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}