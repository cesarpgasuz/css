const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}
//crear un promise
const obtenerCriptomonedas = criptomonedas => new Promise(resolve => {
    resolve(criptomonedas);
})

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();
    formulario.addEventListener('submit', enviarFormulario);
    criptomonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);
});

function consultarCriptomonedas(){

    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => obtenerCriptomonedas(resultado.Data))
        .then(criptomonedas => selectCriptomonedas(criptomonedas))

}

function selectCriptomonedas(criptomonedas){

    criptomonedas.forEach(cripto => {
        console.log(cripto)
        const {FullName, Name} = cripto.CoinInfo;
        
        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;

        criptomonedasSelect.appendChild(option);
    });
}

function leerValor(e){
    objBusqueda[e.target.name] = e.target.value;
}

function enviarFormulario(e){
    e.preventDefault();

    //validar
    const {moneda, criptomoneda} = objBusqueda;

    if(moneda === '' || criptomoneda == ''){
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }
    
    ///consultar api
    consultarAPI();
}

function consultarAPI(){

    const {moneda, criptomoneda} = objBusqueda;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

    mostrarSpinner();

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(cotizacion => {
            mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]);
        })
}

function mostrarCotizacionHTML(cotizacion){

    limpiarHTML();

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = cotizacion;
    const precio = document.createElement('p');
    precio.innerHTML = `El Precio es: <strong>${PRICE}</strong>`;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `Precio más alto del dia: <strong>${HIGHDAY}</strong>`;

    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `Precio más bajo del dia: <strong>${LOWDAY}</strong>`;

    const ultimaHora = document.createElement('p');
    ultimaHora.innerHTML = `Variacion ultimas 24 horas: <strong>${CHANGEPCT24HOUR}%</strong>`;

    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `Ultima Actualizacion: <strong>${LASTUPDATE}</strong>`;


    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimaHora);
    resultado.appendChild(ultimaActualizacion);
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarAlerta(mensaje){

    const existeError = document.querySelector('.error');

    if(!existeError){
        const mensajeAlerta = document.createElement('div');
        mensajeAlerta.classList.add('error');
        mensajeAlerta.textContent = mensaje;
        formulario.appendChild(mensajeAlerta);

        setTimeout(() => {
            mensajeAlerta.remove();
        }, 3000);
    }

}

function mostrarSpinner(){
    limpiarHTML();

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `;

    resultado.appendChild(spinner);
}