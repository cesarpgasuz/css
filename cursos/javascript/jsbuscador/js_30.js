///variables
const resultado = document.querySelector('#resultado');
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
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

/// eventListeners
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
    llenarSelect();
});

marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener('change', (e) => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});
minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});
maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});
puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});
transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});
color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
});


/// funciones
function mostrarAutos(autos){

    limpiarHTML();
    
    autos.forEach(auto => {
        const {marca, modelo, year, precio, puertas, color, transmision} = auto;
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `
        
            ${marca} -- Modelo: ${modelo} -- Año: ${year} -- Precio: ${precio} -- ${puertas} Puertas -- COlor: ${color} -- Transmision: ${transmision}
        `;

        resultado.appendChild(autoHTML);

    })
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

    const resultados = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    
    if(resultados.length){
        mostrarAutos(resultados);
    }else{
        noAutos();
    }

}

function noAutos(){
    
    limpiarHTML();
    const mensajeError = document.createElement('p');
    mensajeError.style.color = 'red';
    mensajeError.textContent = 'No se encontraron autos con esas caracteristicas, intenta con otras opciones';
    resultado.appendChild(mensajeError);
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return datosBusqueda.marca === auto.marca;
    }
    return auto;
}
function filtrarYear(auto){
    if(datosBusqueda.year){
        return datosBusqueda.year === auto.year;
    }
    return auto;
}
function filtrarMinimo(auto){
    if(datosBusqueda.minimo){
        return datosBusqueda.minimo <= auto.precio;
    }
    return auto;
}
function filtrarMaximo(auto){
    if(datosBusqueda.maximo){
        return datosBusqueda.maximo >= auto.precio;
    }
    return auto;
}
function filtrarPuertas(auto){
    if(datosBusqueda.puertas){
        return datosBusqueda.puertas === auto.puertas;
    }
    return auto;
}
function filtrarTransmision(auto){
    if(datosBusqueda.transmision){
        return datosBusqueda.transmision === auto.transmision;
    }
    return auto;
}
function filtrarColor(auto){
    if(datosBusqueda.color){
        return datosBusqueda.color === auto.color;
    }
    return auto;
}