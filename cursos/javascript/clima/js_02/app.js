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
        mostrarAlerta('Todos los campos son obligatorios');
        return;
    }

    consultarAPI(ciudad, pais);


}


function consultarAPI(ciudad, pais){

    const appID = '3fa61240a272b1b6e3a122bef77e6476';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

    fetch(url)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(datos => {
            limpiarHTML();

            console.log(datos);
            if(datos.cod === '404'){
                mostrarAlerta('Ciudad No Encontrada');
                return;
            }

            mostrarClima(datos);
        })

}


function mostrarClima(datos){

    const{main: {temp, temp_max, temp_min}} = datos;

    const centigrados = kelvinACentigrados(temp);

    const divClima = document.createElement('div');
    divClima.classList.add('div__clima');

    const temActual = document.createElement('p');
    temActual.classList.add('temp__actual');
    temActual.innerHTML = `${centigrados} &#8451;`;

    divClima.appendChild(temActual);
    resultado.appendChild(divClima);

}

function kelvinACentigrados(grados){
    return parseInt(grados - 273.15);
}


function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}



function mostrarAlerta(mensaje){
    
    const alerta = document.querySelector('.alerta');

    if(!alerta){
        const mensajeAlerta = document.createElement('div');
        mensajeAlerta.classList.add('mensaje__error', 'alerta');
        mensajeAlerta.textContent = mensaje;

        container.appendChild(mensajeAlerta);

        setTimeout(() => {
            mensajeAlerta.remove();
        }, 1500);
    }

}