//variables
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');
const divPaginacion = document.querySelector('#paginacion');
const buscador = document.querySelector('.buscador');

const porPagina = 35;
let totalPaginas;
let paginaActual = 1;
let iterador;

//eventListeners
window.onload = () => {

    formulario.addEventListener('submit', buscarImagen);


}



//funciones
function buscarImagen(e){
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;

    if(terminoBusqueda === ''){
        mostrarAlerta('Escribe un termino de busqueda');
        return;
    }

    consultarAPI();



}


function consultarAPI(){

    const termino = document.querySelector('#termino').value;

    const appID = '30551190-02e0296e1956956298e1b78a3';

    const url = `https://pixabay.com/api/?key=${appID}&q=${termino}&per_page=${porPagina}&page=${paginaActual}`;

    spinner();

    fetch(url)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(datos => {
            
            console.log(datos);
            if(datos.totalHits > 0){
                totalPaginas = calcularPaginas(datos.totalHits);
                obtenerImagenes(datos.hits)
            }else{
                mostrarAlerta('No se encontraron imagenes');
            }


        })
    

}

function obtenerImagenes(imagenes){

    limpiarHTML();
    const spinner = document.querySelector('.spinner');
    if(spinner){
        spinner.remove();
    }

    imagenes.forEach(imagen => {

        const {likes, previewURL, largeImageURL} = imagen;

        resultado.innerHTML += `
        
            <div class="imagen-pix">
                <img src="${previewURL}">
                <p>Likes ${likes}</p>
                <a href="${largeImageURL}" target="_blank" rel="noopener noreferrer">Ver Imagen</a>
            </div>
        
        `;


        
    });

     //limpia si hay un paginador previo
     while(divPaginacion.firstChild){
        divPaginacion.removeChild(divPaginacion.firstChild);
    }

    imprimirPaginador();

}


function calcularPaginas(paginas){

    return parseInt(Math.ceil(paginas / porPagina));

}


function *crearPaginador(total){

    for(let i = 1; i <= total; i++){
        yield i;
    }

}

function imprimirPaginador(){

    iterador = crearPaginador(totalPaginas);

    
    
    while(true){

        const {done, value} = iterador.next();

        if(done){
            return;
        }else{

            const boton = document.createElement('a');
            boton.classList.add('boton');
            boton.href = "#";
            boton.textContent = value;
            boton.dataset.imagen = value;

            boton.onclick = () => {
                paginaActual = value;
                consultarAPI();
            }

            divPaginacion.appendChild(boton);

        }


    }
}





function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}


function spinner(){

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    spinner.innerHTML = `
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
    `;

   document.querySelector('#divSpinner').appendChild(spinner);


}


function mostrarAlerta(mensaje){

    limpiarHTML();

    const alerta = document.querySelector('.alerta');

    if(!alerta){

       const mensajeAlerta = document.createElement('p');
        mensajeAlerta.classList.add('alerta', 'mensaje__error');
        mensajeAlerta.textContent = mensaje;

        document.querySelector('.buscador').appendChild(mensajeAlerta);

        setTimeout(() => {
            mensajeAlerta.remove();
        }, 2000); 
    }
    
}