//variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


//eventlisteners

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
    e.preventDefault()
   
    const tweet = document.querySelector('#tweet').value;
    
    if(tweet === ''){
        mostrarError('No has escrito ningun tweet');
        return;
    }

    const tweeObt = {
        id: Date.now(),
        texto: tweet
    }

    tweets = [...tweets, tweeObt];

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
    }, 2500);

}


function tweetHTML(){

    limpiarHTML();

    if(tweets.length > 0){

        tweets.forEach(tweet => {
            const tweetItem = document.createElement('p');
            tweetItem.textContent = tweet.texto;
            tweetItem.classList.add('tweet');

            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'X';
            btnEliminar.classList.add('btn__eliminar');
            
            btnEliminar.onclick = () => {
                eliminarTweet(tweet.id);
            };

            tweetItem.appendChild(btnEliminar);


            listaTweets.appendChild(tweetItem);


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
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}