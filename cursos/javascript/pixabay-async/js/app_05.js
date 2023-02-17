const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const paginacionDiv = document.querySelector('#paginacion');

const registrosPorPagina = 40;
let totalPaginas;
let iterador;
let paginaActual = 1;

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e){
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;
    //validamos
    if(terminoBusqueda === ''){
        mostrarAlerta('Agrega un termino de busqueda');
        return;
    }
    
    buscarImagenes();
}

function buscarImagenes(){
    const termino = document.querySelector('#termino').value;
    const key = '30551190-02e0296e1956956298e1b78a3';
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${registrosPorPagina}&page=${paginaActual}`;

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            console.log(resultado);
            totalPaginas = calcularPaginas(resultado.totalHits);
            console.log(totalPaginas)
            mostrarImagenes(resultado.hits);
        });

}


function mostrarImagenes(imagenes){
   
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
    //iteramos
    imagenes.forEach(imagen => {
        const {previewURL, likes, views, largeImageURL} = imagen;

        resultado.innerHTML += `
            <div class="imagen-pix">
                <img src="${previewURL}">
                <p><span>Likes: ${likes}</span> <strong>Vistas: ${views}</strong></p>
                <a href="${largeImageURL}" target="_blank" rel="noopener noreferrer">Ver Imagen</a>
            </div>
        `;

    });
    
    //limpiar el paginador previo
    while(paginacionDiv.firstChild){
        paginacionDiv.removeChild(paginacionDiv.firstChild)
    }
    //generamos el paginador
    imprimirPaginador();

}


function imprimirPaginador(){
    iterador = crearPaginador(totalPaginas);

    while(true){
        const {value, done} = iterador.next();

        if(done)return;

        const boton = document.createElement('a');
        boton.href = '#';
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add('siguiente','boton');
        boton.onclick = () => {
            paginaActual = value;
            // console.log(paginaActual);
            buscarImagenes();
        }
        paginacionDiv.appendChild(boton);

    }
}

// generados 
function *crearPaginador(total){
    for(let i = 1; i <= total; i++){
        yield i;
    }
}

function calcularPaginas(total){
    return parseInt(Math.ceil(total / registrosPorPagina));
}



function mostrarAlerta(mensaje){

    const alerta = document.querySelector('.alerta');

    if(!alerta){
        const mensajeAlerta = document.createElement('p');
        mensajeAlerta.classList.add('mensaje__error', 'alerta');
        mensajeAlerta.textContent = mensaje;

        formulario.appendChild(mensajeAlerta);

        setTimeout(() => {
            mensajeAlerta.remove();
        },3000);
    }
}