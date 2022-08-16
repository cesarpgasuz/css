//variables
const resultado = document.querySelector('#resultado');
const max = new Date().getFullYear();
const min = max - 10;


const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

//listeners
document.addEventListener('DOMContentLoaded', () =>{

    mostrarAuto(autos);
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
    console.log(datosBusqueda)
    filtrarAuto();
})





//funciones
function mostrarAuto(autos){
    limpiarHTML();

    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
            ${auto.marca} -- ${auto.modelo} -- ${auto.year} -- ${auto.precio} -- ${auto.puertas} Puertas -- ${auto.color} -- ${auto.transmision}
        `;

        resultado.appendChild(autoHTML);

    })


}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

function llenarSelect(){

    for(let i = max; i >= min; i--){
        const opciones = document.createElement('option');
        opciones.value = i;
        opciones.textContent = i;

        year.appendChild(opciones);

    }

}


function filtrarAuto(){

    const resultado = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor );
    
    if(resultado.length){

        mostrarAuto(resultado);

    }else{
        noAutos();
    }
    


}


function noAutos(){

    limpiarHTML();
    const noAutosText = document.createElement('p');
    noAutosText.style.color = 'red';
    noAutosText.textContent = 'No hay autos con esos criterios, elige otras opciones';
    resultado.appendChild(noAutosText);
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