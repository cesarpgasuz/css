//variables
const formulario = document.querySelector('#formulario');
const contenedorTweets = document.querySelector('#lista-tweets');
let tweets = [];

//eventListeners
eventListeners();

function eventListeners(){

    document.addEventListener('DOMContentLoaded', () => {

        tweets = JSON.parse(localStorage.getItem('tweets')) || [];

        tweetHTML();

    })

    formulario.addEventListener('submit', agregarTweet);

}



//funciones
function agregarTweet(e){
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


function mostrarAlerta(mensaje){

    const alerta = document.querySelector('p.alerta');

    if(!alerta){
        const mensajeAlerta = document.createElement('p');
        mensajeAlerta.classList.add('mensaje__error', 'alerta');
        mensajeAlerta.textContent = mensaje;

        document.querySelector('.six').appendChild(mensajeAlerta);

        setTimeout(() => {
            mensajeAlerta.remove();
        }, 2500);

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
            btnEliminar.textContent = 'X';
            btnEliminar.onclick = () => {
                eliminarTweet(id);
            }

            tweetItem.appendChild(btnEliminar);
            contenedorTweets.appendChild(tweetItem);


        })
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
    while(contenedorTweets.firstChild){
        contenedorTweets.removeChild(contenedorTweets.firstChild);
    }
}