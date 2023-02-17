////// variables
const formulario = document.querySelector('#formulario');
const resultadoDiv = document.querySelector('#resultado');
const paginacionDiv = document.querySelector('#paginacion');
const registrosPorPagina = 50;

let totalPaginas;
let iterador;
let paginaActual = 1;

///// eventListeners


window.onload = () => {

    formulario.addEventListener('submit', validarFormulario);

}


/////// funciones
function validarFormulario(e){
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;

    //validamos
    if(terminoBusqueda === ''){
        mostrarAlerta('El campo de busqueda esta vacio');
        return;
    }

    buscarImagenes();

}


function buscarImagenes(){

    const termino = document.querySelector('#termino').value;
    const appKey = '30551190-02e0296e1956956298e1b78a3';
    const url = `https://pixabay.com/api/?key=${appKey}&q=${termino}&per_page=${registrosPorPagina}&page=${paginaActual}`;
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {

            console.log(datos);

            if(datos.totalHits === 0 || datos.hits.length === 0){
                limpiarHTML(resultadoDiv);
                limpiarHTML(paginacionDiv);
                mostrarAlerta('No se encontraron Imagenes');
                return;
            }
           
            totalPaginas = calcularPaginas(datos.totalHits);
            // console.log(totalPaginas);
            mostrarImagenes(datos.hits);
        })

}


function mostrarImagenes(imagenes){

    limpiarHTML(resultadoDiv);

    imagenes.forEach(imagen => {

        const {likes, largeImageURL, previewURL} = imagen;

        resultado.innerHTML += `
        
            <div class="imagen-pix">
                <img src="${previewURL}" loading="lazy" />
                <p>Likes: <strong>${likes}</strong></p>
                <a href="${largeImageURL}" target="_blank" rel="noopener noreferrer">Ver Imagen</a>
            </div>
        
        `;
    });

    //limpiamos el paginador previo
    limpiarHTML(paginacionDiv);

    //mostramos el paginador
    mostrarPaginador();

}


function *crearPaginador(total){

    for(let i = 1; i <= total; i++){
        yield i;
    }
}


function calcularPaginas(total){
    return parseInt(Math.ceil(total / registrosPorPagina));
}

function mostrarPaginador(){

   iterador = crearPaginador(totalPaginas);
    
    while(true){

        const {value, done} = iterador.next();

        if(done) return;

        const boton = document.createElement('A');
        boton.classList.add('boton');
        boton.href ="#";
        boton.dataset.imagen = value;
        boton.textContent = value;
        boton.onclick = () => {

            paginaActual = value;
            buscarImagenes();

        }
        
        paginacionDiv.appendChild(boton);


    }

}

function limpiarHTML(selector){
    while(selector.firstChild){
        selector.removeChild(selector.firstChild);
    }
}

function mostrarAlerta(mensaje){

    const existeAlerta = document.querySelector('.alerta');

    if(!existeAlerta){
        const mensajeAlerta = document.createElement('DIV');
        mensajeAlerta.classList.add('mensaje__error', 'alerta');
        mensajeAlerta.textContent = mensaje;
        resultado.appendChild(mensajeAlerta);

        setTimeout(() => {
            mensajeAlerta.remove();
        }, 3000);
    }

}