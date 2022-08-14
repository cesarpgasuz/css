//variables
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const resultado = document.querySelector('#resultado');
const max = new Date().getFullYear();
const min = max - 10;
const year = document.querySelector('#year');



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






function mostrarAuto(autos){

    limpiarHTML();

    autos.forEach( auto => {
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
            ${auto.marca} - ${auto.modelo} -- Año ${auto.year} - ${auto.puertas} Puertas -- ${auto.color} -- ${auto.transmision}
        `;

        resultado.appendChild(autoHTML);
    })
    


}



function llenarSelect(){

    for(let i = max; i>= min; i--){
        const opciones = document.createElement('option');
        opciones.value = i;
        opciones.textContent = i;

        year.appendChild(opciones);

    }
}




function filtrarAuto(auto){

    const resultados = autos.filter( filtrarMarca ).filter( filtrarYear );
   
    mostrarAuto(resultados);


}


function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
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