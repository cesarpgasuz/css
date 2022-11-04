//variables
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');
const divPaginacion = document.querySelector('#paginacion');
const buscador = document.querySelector('.buscador');

const registrosPorPagina = 35;
let totalPaginas;
let iterador;
let paginaActual = 1;


//eventListeners
window.addEventListener('load', () => {

    formulario.addEventListener('submit', validarFormulario);

})



//funciones
function validarFormulario(e){
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;

    if(terminoBusqueda === ''){
        mostrarAlerta('No has escrito ningun termino');
        return;
    }

    buscarImagen();

}


function buscarImagen(){

    const termino = document.querySelector('#termino').value;

    const appId = '30551190-02e0296e1956956298e1b78a3';

    const url = `https://pixabay.com/api/?key=${appId}&q=${termino}&per_page=${registrosPorPagina}&page=${paginaActual}`;

    fetch(url)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(datos => {
           
            console.log(datos);

            if(datos.totalHits > 0 ){

                totalPaginas = contarPaginas(datos.totalHits);
                mostrarImagenes(datos.hits);
                
                console.log(totalPaginas);
                
            }



        })

}




function mostrarImagenes(imagenes){

    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }

    imagenes.forEach(imagen => {

        const {likes, previewURL, largeImageURL} = imagen;

        resultado.innerHTML += `

            <div class="imagen-pix">
                <img src="${previewURL}">
                <p><strong>Likes:</strong> ${likes}</p>
                <a href="${largeImageURL}" target="_blank" rel="noopener noreferer">ver Imagen</a>
            </div>
        
        `;


        
    });

    while(divPaginacion.firstChild){
        divPaginacion.removeChild(divPaginacion.firstChild);
    }

    imprimirPaginador();

}


function contarPaginas(total){

    return parseInt(Math.ceil(total / registrosPorPagina));

}


function *paginador(total){

    for(let i = 1; i <= total; i++){
        yield i;
    }

}


function imprimirPaginador(){

    iterador = paginador(totalPaginas);
    
    while(true){

        const {value, done} = iterador.next();

        if(done){
            return;
        }else{

            const boton = document.createElement('a');
            boton.href = "#";
            boton.classList.add('boton');
            boton.textContent = value;
            boton.dataset.imagen = value;

            boton.onclick = () => {

                paginaActual = value;
                buscarImagen();

            }

            divPaginacion.appendChild(boton);

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
        }, 2000);
    }

}