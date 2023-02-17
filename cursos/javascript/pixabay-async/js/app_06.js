// variables
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');
const paginacionDiv = document.querySelector('#paginacion');

const registrosPorPagina = 35;
let totalPaginas;
let iterador;
let paginaActual = 1;

// eventListeners

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

// funciones
function validarFormulario(e){
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;

    if(terminoBusqueda === ''){
        mostrarAlerta('Ingresa un termino de busqueda');
        return;
    }
    
    buscarImagen();

}


function buscarImagen(){

    const termino = document.querySelector('#termino').value;
    const appKey = '30551190-02e0296e1956956298e1b78a3';
    const url = `https://pixabay.com/api/?key=${appKey}&q=${termino}&per_page=${registrosPorPagina}&page=${paginaActual}`;
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            console.log(resultado);
            totalPaginas = calcularPaginas(resultado.totalHits);
            mostrarImagenes(resultado.hits);
        });



}


function mostrarImagenes(imagenes){

    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }

    imagenes.forEach(imagen => {

        const {largeImageURL, likes, previewURL} = imagen;

        resultado.innerHTML += `
        
            <div class="imagen-pix">
                <img src="${previewURL}">
                <p>Likes: <strong>${likes}</strong></p>
                <a href="${largeImageURL}" target="_blank" rel="noopener noreferrer">Ver Imagen</a>
            </div>
        `;


    });

   

    //limpiamos el paginador previo
    while(paginacionDiv.firstChild){
        paginacionDiv.removeChild(paginacionDiv.firstChild);
    }

    mostrarPaginador();

}

function *crearPaginador(total){
    console.log(total)
    for(let i = 1; i <= total; i++){
        yield i;
    }

}


function mostrarPaginador(){

    iterador = crearPaginador(totalPaginas);
   
    while(true){

        const {value, done} = iterador.next();

        if(done) return;

        //creamos un boton
        const boton = document.createElement('A');
        boton.classList.add('boton');
        boton.href = "#";
        boton.dataset.imagen = value;
        boton.textContent = value;
        boton.onclick = () => {

            paginaActual = value;
            buscarImagen();
            
        }


        paginacionDiv.appendChild(boton);



    }

}



function calcularPaginas(total){
    return parseInt(Math.ceil(total / registrosPorPagina));
}





function mostrarAlerta(mensaje){

    const alertaExiste = document.querySelector('.alerta');

    if(!alertaExiste){
        const mensajeAlerta = document.createElement('DIV');
        mensajeAlerta.classList.add('mensaje__error', 'alerta');
        mensajeAlerta.textContent = mensaje;

        resultado.appendChild(mensajeAlerta);

        setTimeout(() => {
            mensajeAlerta.remove();
        }, 3000);
    }

}
