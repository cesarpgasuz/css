//variables
const formulario = document.querySelector('#formulario');
const buscador = document.querySelector('.buscador');
const resultado = document.querySelector('#resultado');
const paginacionDiv = document.querySelector('#paginacion');

const registrosPorPagina = 40;
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

    //validamos
    if(terminoBusqueda === ''){
        mostrarAlerta('Campo Vacio');
        return;
    }

    buscarImagenes();

}



function buscarImagenes(){

    const termino = document.querySelector('#termino').value;

    const key = '30551190-02e0296e1956956298e1b78a3';

    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${registrosPorPagina}&page=${paginaActual}`;

    fetch(url)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(datos => {
            console.log(datos)
            totalPaginas = calcularPaginas(datos.totalHits);
            console.log(totalPaginas);
            mostrarImagenes(datos.hits);
        })

}



function mostrarImagenes(imagenes){

    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }

    imagenes.forEach(imagen => {
        
        const {largeImageURL, likes, previewURL} = imagen;

        resultado.innerHTML += `
        
            <div class="image-pix">
                <img src="${previewURL}">
                <p>Likes: ${likes}</p>
                <a href="${largeImageURL}" target="_blank" rel="noopener noreferrer">ver imagen</a>
            </div>
        
        `;

    });

    //limpia el paginador previo si existe
    while(paginacionDiv.firstChild){
        paginacionDiv.removeChild(paginacionDiv.firstChild);
    }

    //generamos el paginador.
    imprimirPaginador();    

}

//funcion para calcular el total de paginas segun el registro total
function calcularPaginas(total){
    return parseInt(Math.ceil(total / registrosPorPagina));
}

//creacion de un generador para la creacion del paginador
function *crearPaginador(total){

    for(let i = 1; i <= total; i++){
        yield i;
    }

}

//mostramos el paginador
function imprimirPaginador(){
    iterador = crearPaginador(totalPaginas);

    while(true){
        
        const {value, done} = iterador.next();

       if(done){
            return;
       }else{
            const boton = document.createElement('a');
            boton.href = '#';
            boton.classList.add('siguiente', 'boton');
            boton.textContent = value;
            boton.dataset.pagina = value;

            boton.onclick = () => {
                
                paginaActual = value;

                buscarImagenes();

            }

            paginacionDiv.appendChild(boton);
       }

    }

}


function mostrarAlerta(mensaje){

    const alerta = document.querySelector('p.alerta');

    if(!alerta){
        const mensajeAlerta = document.createElement('p');
        mensajeAlerta.classList.add('alerta', 'mensaje__error');
        mensajeAlerta.textContent = mensaje;

        buscador.appendChild(mensajeAlerta);

        setTimeout(() => {
            mensajeAlerta.remove();
        }, 2500);
    }
    
}