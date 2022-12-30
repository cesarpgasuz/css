/////// variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets ul');
let tweets = [];


//// eventListeners
eventListeners();

function eventListeners(){

    // cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);
    // cuando el documento esta lista
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        console.log(tweets);
        crearHTML();
    });
}




////// funciones
function agregarTweet(e){
    e.preventDefault();

    const tweet = document.querySelector('#tweet').value;

    // validacion
    if(tweet === ''){
        mostrarError('un mensaje no puede ir vacio');
        return; // evita que se ejecuten mas lineas de codigo
    }

    const tweetObj = {
        id: Date.now(),
        texto: tweet 
    }

    // añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];
    console.log(tweets);

    /// funcion para imprimir los tweets
    crearHTML();

    // reiniciar el formulario
    formulario.reset();

}

// mostrar mensaje de error
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('mensaje__error');

    //insertar en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout(() => {
        mensajeError.remove(); // elimina la alerta despues de 3 segundos
    }, 3000);

}

function crearHTML(){

    limpiarHTML();

    if(tweets.length > 0){

        tweets.forEach(tweet => {
            // crear todo el html
            const li = document.createElement('li');
            li.innerText = tweet.texto;
            li.classList.add('tweet');

            // agregar boton de eliminar
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn__eliminar');
            btnEliminar.textContent = 'X';
            li.appendChild(btnEliminar);

            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            // insertar en el html
            listaTweets.appendChild(li);
        });

    }

    sincronizarStorage();
}

function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

/// eliminar un tweet
function borrarTweet(id){
    tweets = tweets.filter(tweet => tweet.id !== id);
    console.log(tweets);
    crearHTML();
}

function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }

}