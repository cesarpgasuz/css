//variables
const formulario = document.querySelector('#formulario');
const buscador = document.querySelector('.buscador');
const resultado = document.querySelector('#resultado');
const paginacionDiv = document.querySelector('#paginacion');

const registrosPorPaginas = 40;
let totalPaginas;
let iterador;
let paginaActual = 1;


//eventListeners
window.onload = () => {

    formulario.addEventListener('submit', validarFormulario);

}

//funciones
function validarFormulario(e){
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;

    if(terminoBusqueda === ''){
        mostrarAlerta('Campo Vacio');
        return;
    }

    buscarImagen();

}



function buscarImagen(){

    const termino = document.querySelector('#termino').value;

    const key = '30551190-02e0296e1956956298e1b78a3';

    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${registrosPorPaginas}&page=${paginaActual}`;

    fetch(url)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(datos => {
            console.log(datos);
            if(datos.totalHits > 0){
                totalPaginas = calcularPaginas(datos.totalHits);
                console.log(totalPaginas);
                mostrarImagenes(datos.hits);
            }else{
                mostrarAlerta('No se encontraron Imagenes')
            }
           
            
        })


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
                <p>Likes ${likes}</p>
                <a href="${largeImageURL}" target="_blank" rel="noopener noreferrer">Ver Imagen</a>
            </div>
        
        `;

        
    });

    //limpia si hay un paginador previo
    while(paginacionDiv.firstChild){
        paginacionDiv.removeChild(paginacionDiv.firstChild);
    }

    imprimirPaginador();

}



function calcularPaginas(total){
    return parseInt(Math.ceil(total / registrosPorPaginas));
}


function *crearPaginador(total){

    for(let i = 1; i <= total; i++){
        yield i;
    }

}

function imprimirPaginador(){

    iterador = crearPaginador(totalPaginas);

    while(true){
        const {value, done} = iterador.next();

        if(done){
            return;
        }else{

            const boton = document.createElement('a');
            boton.href = '#';
            boton.classList.add('boton');
            boton.dataset.imagen = value;
            boton.textContent = value;

            boton.onclick = () => {
                paginaActual = value;

                buscarImagen();
            }

            paginacionDiv.appendChild(boton);

        }

    }


}





function mostrarAlerta(mensaje){

    const alerta = document.querySelector('.alerta');

    if(!alerta){
        const mensajeAlerta = document.createElement('p');
        mensajeAlerta.classList.add('alerta', 'mensaje__error');
        mensajeAlerta.textContent = mensaje;

        buscador.appendChild(mensajeAlerta);

        setTimeout(() => {
            mensajeAlerta.remove();
        }, 3500);
    }

}