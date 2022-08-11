const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const year = document.querySelector('#year');
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



document.addEventListener('DOMContentLoaded', () => {

    mostrarAutos(autos); //funcion para mostrar los autos
    llenarSelect(); // funcion para mostrar los años


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
})
maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = e.target.value;
})
puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = e.target.value;
})
transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;
})
color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda)
})



//funcion para mostrar los autos de la base de datos
function mostrarAutos(autos){

    limpiarHTML();

    autos.forEach( auto => {
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
            ${auto.marca} - ${auto.modelo} -- año ${auto.year} -- precio ${auto.precio} -- ${auto.puertas} -- ${auto.color} -- ${auto.transmision}
        `;

        resultado.appendChild(autoHTML);
    })

}


//limpiar html previo
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

//funcion para mostrar los años en el select
function llenarSelect(){

    for(let i = max; i >= min; i--){
        const opciones = document.createElement('option');
        opciones.textContent = i;
        opciones.value = i;

        year.appendChild(opciones);

    }

}


//funcion para filtrar el auto
function filtrarAuto(auto){

    const resultado = autos.filter( filtrarMarca).filter( filtrarYear );
    console.log(resultado);
    mostrarAutos(resultado);

}


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