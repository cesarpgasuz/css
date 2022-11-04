//variables
const container = document.querySelector('.container');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');




//eventListeners

window.onload = () => {

    formulario.addEventListener('submit', buscarCiudad);

}






//funciones
function buscarCiudad(e){
    e.preventDefault();

    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

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

            console.log(datos)
            if(datos.cod === '404'){
                mostrarAlerta('Ciudad no encontrada');
                return;
            }

            imprimirClima(datos);


        })



}


function imprimirClima(datos){

    const {name, main: {temp, temp_min, temp_max}} = datos;

    const centigrados = convertirACentigrados(temp);
    const min = convertirACentigrados(temp_min);
    const max = convertirACentigrados(temp_max);


    const divClima = document.createElement('div');
    divClima.classList.add('div__clima');

    const nombreCiudad = document.createElement('h2');
    nombreCiudad.innerHTML = `Tiempo en ${name}`;

    const tiempoActual = document.createElement('p');
    tiempoActual.classList.add('temp__actual');
    tiempoActual.innerHTML = `${centigrados}&#8451;`;

    const tiempoMin = document.createElement('p');
    tiempoMin.innerHTML = `Min: ${min}&#8451;`;

    const tiempoMax = document.createElement('p');
    tiempoMax.innerHTML = `Max: ${max}&#8451;`;

    divClima.appendChild(nombreCiudad);
    divClima.appendChild(tiempoActual);
    divClima.appendChild(tiempoMin);
    divClima.appendChild(tiempoMax);

    resultado.appendChild(divClima);



}



const convertirACentigrados = grados => parseInt(grados - 273.15);

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}



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

