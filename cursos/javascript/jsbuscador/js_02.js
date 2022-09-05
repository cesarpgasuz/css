//varibles
const marca = document.querySelector('#marca');
const maximo = document.querySelector('#maximo');
const minimo = document.querySelector('#minimo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
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

//funciones

document.addEventListener('DOMContentLoaded', () => {

    filtrarAutos(autos); // funcion para filtrar los autos
    llenarSelect(); // funcion para llenar el select
})

marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;
    autoFiltrado();
})
year.addEventListener('change', (e) => {
    datosBusqueda.year = parseInt(e.target.value);
    autoFiltrado();
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
    console.log(datosBusqueda);
})






function filtrarAutos(autos){

    limpiarHTML();

    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
            ${auto.marca} - ${auto.modelo} - Año ${auto.year} - Precio ${auto.precio} -- ${auto.puertas} Puertas -- ${auto.color} -- Transmision ${auto.transmision}
            
            `;

        resultado.appendChild(autoHTML);

    })

}


function llenarSelect(){

    for(let i = max; i >= min; i--){
        const opciones = document.createElement('option');
        opciones.textContent = i;
        opciones.value = i;

        year.appendChild(opciones)

    }

}


function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}


function autoFiltrado(auto){

    const resultados = autos.filter( filtrarMarca ).filter( filtrarYear);
    
    filtrarAutos(resultados);


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