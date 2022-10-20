//variables
const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');


//eventListeners
window.addEventListener('load', () => {

    formulario.addEventListener('submit', buscarClima);

})

//funciones
function buscarClima(e){
    e.preventDefault();

    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    //validacion
    if(ciudad === '' || pais === ''){
        mostrarAlerta('Todos los campos son obligatorios');
        return;
    }
    
    consultarAPI(ciudad, pais);


}


function consultarAPI(ciudad, pais){

    const appID = '3fa61240a272b1b6e3a122bef77e6476';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

    spinner();

    fetch(url)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(datos => {
            
            limpiarHTML();
            console.log(datos);

            if(datos.cod === '404'){
                mostrarAlerta('ciudad no encontrada');
                return;
            }

            

            obtenerClima(datos);

            formulario.reset();
        })



}

function obtenerClima(datos){

    const {name, main: {temp, temp_max, temp_min}} = datos;

    const centigrados = kelvinACentigrados(temp);
    const max = kelvinACentigrados(temp_max);
    const min = kelvinACentigrados(temp_min);

    const ciudadTemp = document.createElement('h2');
    ciudadTemp.classList.add('title__ciudad');
    ciudadTemp.textContent = `Clima en ${name}`;

    const divClima = document.createElement('div');
    divClima.classList.add('div__clima');

    const tiempoActual = document.createElement('p');
    tiempoActual.classList.add('temp__actual');
    tiempoActual.innerHTML = `${centigrados} &#8451;`;

    const tiempoMax = document.createElement('p');
    tiempoMax.innerHTML = `Max: ${max} &#8451;`;


    const tiempoMin = document.createElement('p');
    tiempoMin.innerHTML = `Min: ${min} &#8451;`;

    divClima.appendChild(ciudadTemp);
    divClima.appendChild(tiempoActual);
    divClima.appendChild(tiempoMax);
    divClima.appendChild(tiempoMin);

    resultado.appendChild(divClima);

}

const kelvinACentigrados = grados => parseInt(grados - 273.15);



function spinner(){

    limpiarHTML();

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    spinner.innerHTML = `
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
    `;

    resultado.appendChild(spinner);
}



function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}




function mostrarAlerta(mensaje){

    const alerta = document.querySelector('p.alerta');

    if(!alerta){

        const mensajeAlerta = document.createElement('p');
        mensajeAlerta.classList.add('mensaje__error', 'alerta');
        mensajeAlerta.textContent = mensaje;

        container.appendChild(mensajeAlerta);

        setTimeout(() => {
            mensajeAlerta.remove();
        }, 3000);
    }

}