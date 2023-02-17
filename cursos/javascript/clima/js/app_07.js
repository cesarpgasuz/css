/// variables
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');


// eventListernes
window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
})


// funciones
function buscarClima(e){
    e.preventDefault();

    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    //validamos
    if(ciudad === '' || pais === ''){
        mostraError('Ambos campos son obligatorios');
        return;
    }

    obtenerClima(ciudad, pais);
}


function obtenerClima(ciudad, pais){

    const appId = '3fa61240a272b1b6e3a122bef77e6476';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    spinner();

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            console.log(resultado);

            limpiarHTML();

            if(resultado.cod === '404'){
                mostraError('ciudad no encontrada');
                return;
            }

            mostrarClima(resultado);


        });

}


function mostrarClima(clima){

    const {name, main:{temp, temp_max, temp_min}} = clima;

    //formatear
    const actual = convertirGrados(temp);
    const max = convertirGrados(temp_max);
    const min = convertirGrados(temp_min);

    const divClima = document.createElement('DIV');
    divClima.classList.add('div__clima');

    const titleCiudad = document.createElement('H2');
    titleCiudad.classList.add('title__ciudad');
    titleCiudad.textContent = `Clima en ${name}`;


    const tempActual = document.createElement('P');
    tempActual.classList.add('temp__actual');
    tempActual.innerHTML = `${actual}&#8451;`;

    const tempMaxima = document.createElement('P');
    tempMaxima.innerHTML = `Temp Max: ${max}&#8451;`;

    const tempMinima = document.createElement('P');
    tempMinima.innerHTML = `Temp Min: ${min}&#8451;`;



    divClima.appendChild(titleCiudad);
    divClima.appendChild(tempActual);
    divClima.appendChild(tempMaxima);
    divClima.appendChild(tempMinima);

    resultado.appendChild(divClima);


}

const convertirGrados = (grados) => parseInt(grados - 273.15);

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }


}


function mostraError(mensaje){

    const mensajeExiste = document.querySelector('.error');

    if(!mensajeExiste){
        const mensajeError = document.createElement('DIV');
        mensajeError.classList.add('mensaje__error', 'error');
        mensajeError.textContent = mensaje;

        document.querySelector('.container').appendChild(mensajeError);

        setTimeout(() => {
            mensajeError.remove();
        }, 3000);
    }
}

function spinner(){

    limpiarHTML();

    const divSpinner = document.createElement('DIV');
    divSpinner.classList.add('spinner');
    divSpinner.innerHTML = `
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
    `;

    resultado.appendChild(divSpinner);

}