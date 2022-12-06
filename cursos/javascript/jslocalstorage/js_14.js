////// variables
const formulario = document.querySelector('#formulario');
const contenedorTweets = document.querySelector('#lista-tweets ul');

let tweets = [];



//// eventListeners

eventListeners();

function eventListeners(){

    document.addEventListener('DOMContentLoaded', () => {

        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        mostrarTweets();

    })


    formulario.addEventListener('submit', agregarTweet);

}




//// funciones
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

    formulario.reset();

    mostrarTweets();

}



function mostrarTweets(){

    limpiarHTML();

    tweets.forEach(tweet => {

        const {texto, id} = tweet;

        const tweetItem = document.createElement('li');
        tweetItem.classList.add('tweet');
        tweetItem.dataset.id = id;
        tweetItem.innerHTML = `${texto}`;

        const btnEliminar = document.createElement('button');
        btnEliminar.classList.add('btn__eliminar');
        btnEliminar.textContent = 'X';

        btnEliminar.onclick = () => {
            eliminarTweet(id);
        }


        tweetItem.appendChild(btnEliminar);
        contenedorTweets.appendChild(tweetItem);

    })


    sincronizarStorage();

}

function sincronizarStorage(){

    localStorage.setItem('tweets', JSON.stringify(tweets));

}


function eliminarTweet(id){

    tweets = tweets.filter(tweet => tweet.id !== id);

    console.log(tweets);

    mostrarTweets();
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

        document.querySelector('.container').appendChild(mensajeAlerta);

        setTimeout(() => {
            mensajeAlerta.remove();
        }, 2500);

    }

}