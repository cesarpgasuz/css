/// variables
const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
});

function buscarClima(e){
    e.preventDefault();

    //validar
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if(ciudad === '' || pais === ''){
        mostrarError('Ambos campos son obligatorios');
        return;
    }

    //consultar api
    consultarAPI(ciudad, pais);
}



function consultarAPI(ciudad, pais){

    const appId = '3fa61240a272b1b6e3a122bef77e6476';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    spinner(); // muestra un spinner

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            limpiarHTML();
            console.log(datos);
            if(datos.cod === '404'){
                mostrarError('Ciudad No Encotrada');
                return;
            }
            //imprime la respuesta en el HTML
            mostrarClima(datos);
        })

}

function mostrarClima(datos){

    const {name, main: {temp, temp_max, temp_min}} = datos;

    const nombreCiudad = document.createElement('h3');
    nombreCiudad.textContent = `Clima en ${name}`;
    nombreCiudad.classList.add('title__ciudad');

    const centigrados = kelvinACentigrados(temp);
    const max = kelvinACentigrados(temp_max);
    const min = kelvinACentigrados(temp_min);

    const actual = document.createElement('p');
    actual.innerHTML = `${centigrados} &#8451;`;
    actual.classList.add('temp__actual');

    const tempMaxima = document.createElement('p');
    tempMaxima.innerHTML = `Max: ${max} &#8451;`;

    const tempMinima = document.createElement('p');
    tempMinima.innerHTML = `Min: ${min} &#8451;`;

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('div__clima');

    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMaxima);
    resultadoDiv.appendChild(tempMinima);
    resultado.appendChild(resultadoDiv);
}

const kelvinACentigrados = (grados) => parseInt(grados - 273.15);


function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}


function mostrarError(mensaje){

    const alerta = document.querySelector('.error');

    if(!alerta){
        const alerta = document.createElement('div');
        alerta.classList.add('mensaje__error', 'error');
        alerta.textContent = mensaje;

        container.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

function spinner(){

    limpiarHTML();

    const divSpinner = document.createElement('div');
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