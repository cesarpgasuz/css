//variables
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');





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

           if(datos.cod === '404'){
                const noCity = document.createElement('p');
                noCity.textContent = 'Ciudad no Encontrada';
                noCity.style.color = 'red';
                resultado.appendChild(noCity);
                return;
           }
             obtenerClima(datos);
           
           
        })




}



function obtenerClima(datos){

    const {main: {temp, temp_max, temp_min}} = datos;

    const centigrados = convertirACentrigrados(temp);
    const max = convertirACentrigrados(temp_max);
    const min = convertirACentrigrados(temp_min);

    const tempActual = document.createElement('h4');
    tempActual.classList.add('temp__actual');
    tempActual.innerHTML = `${centigrados} &#8451;`;

    const tempMaxima = document.createElement('p');
    tempMaxima.innerHTML = `Temp Max: ${max} &#8451;`;

    const tempMinima = document.createElement('p');
    tempMinima.innerHTML = `Temp Min: ${min} &#8451;`;


    const divClima = document.createElement('div');
    divClima.classList.add('div__clima');


    divClima.appendChild(tempActual);
    divClima.appendChild(tempMaxima);
    divClima.appendChild(tempMinima);

    resultado.appendChild(divClima);
    


}


const convertirACentrigrados = (temperatura) => parseInt(temperatura - 273.1);

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}





function mostrarAlerta(mensaje){

    const alerta = document.querySelector('p.alerta');

    if(!alerta){
         const mensajeAlerta = document.createElement('p');
        mensajeAlerta.classList.add('alerta', 'mensaje__error');
        mensajeAlerta.textContent = mensaje;
        formulario.appendChild(mensajeAlerta);

        setTimeout(() => {
            mensajeAlerta.remove();
        }, 1500);
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