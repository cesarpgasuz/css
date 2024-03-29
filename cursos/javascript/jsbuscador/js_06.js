//////////////////////////
///////////////////////////variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');




const resultado = document.querySelector('#resultado');
const max = new Date().getFullYear();
const min = max - 10;


const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

///////////////////////////
//////////////////////////eventlisteners
document.addEventListener('DOMContentLoaded',  () => {

    mostrarAutos(autos);
    llenarSelect();

})


marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
})
year.addEventListener('change', (e) => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
})
minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
})
maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
})
puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
})
transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
})
color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
    console.log(datosBusqueda);
})



//////////////////////////////////////////////
///////////////////////////////////////funciones


////////////////// iterar sobre la base de datos de autos
function mostrarAutos(autos){

    limpiarHTML();

    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `
            ${auto.marca} -- ${auto.modelo} -- <strong> Año ${auto.year} </strong> -- Precio <strong>${auto.precio}</strong> -- ${auto.puertas} Puertas -- Color ${auto.color} --- ${auto.transmision}
        
        `;

        resultado.appendChild(autoHTML);


    })


}

///////////// llenar el select
function llenarSelect(){

    for(let i = max; i >= min; i--){
        const opciones = document.createElement('option');
        opciones.value = i;
        opciones.textContent = i;

        year.appendChild(opciones);

    }


}




/////////// funcion para filtrar los autos
function filtrarAuto(){

    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor );
    
    if(resultado.length){  
        mostrarAutos(resultado);
    }else{
        noResultados();
    }
}


////////////// funcion para mostrar un mensaje cuando no se encuentra un auto
function noResultados(){
    limpiarHTML();

    const noAutos = document.createElement('p');
    noAutos.textContent = 'No hay autos con esas caracteristicas, elige otras opciones';
    noAutos.style.color = 'red';

    resultado.appendChild(noAutos);

}

/////////////// funcion para limpiar el prev
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}


//////////////////// funciones para filtrar por categorias

function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    }
    return auto;
}

function filtrarYear(auto){
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    }
    return auto;
}

function filtrarMinimo(auto){
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}

function filtrarMaximo(auto){
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
}

function filtrarPuertas(auto){
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}

function filtrarTransmision(auto){
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    }
    return auto;
}

function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    }
    return auto;
}


