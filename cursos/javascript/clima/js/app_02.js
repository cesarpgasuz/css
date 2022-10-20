//variables
const formulario = document.querySelector('#formulario');
const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');

//eventListeners
window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
})


//funciones
function buscarClima(e){
    e.preventDefault();

    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    //validamos
    if(ciudad === '' || pais === ''){
        mostrarAlerta('Todos los campos son obligatorios')
        return;
    }

    consultarAPI(ciudad, pais);


}

function consultarAPI(ciudad, pais){

    const appID = '3fa61240a272b1b6e3a122bef77e6476';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

    cargarSpinner();

    fetch(url)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(datos => {
            limpiarHTML();
            if(datos.cod === '404'){
                mostrarAlerta('Ciudad no Encontrada');
                return;
            }
            mostrarClima(datos);
            console.log(datos);
            formulario.reset();
        })
       
    

}



function mostrarClima(datos){

    const {name, main: {temp, temp_max, temp_min}} = datos;

    const centigrados = kelvinACentigrados(temp);
    const max = kelvinACentigrados(temp_max);
    const min = kelvinACentigrados(temp_min);

    const nombre = document.createElement('h1');
    nombre.textContent = `Clima en ${name}`;

    const divClima = document.createElement('div');
    divClima.classList.add('div__clima');

    const textCentigrados = document.createElement('p');
    textCentigrados.classList.add('temp__actual');
    textCentigrados.innerHTML = `${centigrados} &#8451;`;

    const tempMaxima = document.createElement('p');
    tempMaxima.innerHTML = `Max: ${max} &#8451;`;

    const tempMinima = document.createElement('p');
    tempMinima.innerHTML = `Max: ${min} &#8451;`;

    divClima.appendChild(nombre);
    divClima.appendChild(textCentigrados);
    divClima.appendChild(tempMaxima);
    divClima.appendChild(tempMinima);

    resultado.appendChild(divClima);

}


const kelvinACentigrados = grados => parseInt(grados - 273.15);

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
        }, 2500);
    }

}

function cargarSpinner(){

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