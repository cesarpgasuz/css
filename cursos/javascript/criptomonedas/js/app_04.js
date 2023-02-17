// variables
const resultado = document.querySelector('#resultado');
const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}

// eventListerners

window.addEventListener('load', () => {
    obtenerCriptomonedas();
    criptomonedasSelect.addEventListener('change', leerDatos);
    monedaSelect.addEventListener('change', leerDatos);
    formulario.addEventListener('submit', enviarFormulario);
})

const consultarCriptomonedas = criptomonedas => new Promise(resolve => {
    resolve (criptomonedas);
})

// funciones
function obtenerCriptomonedas(){

    const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => consultarCriptomonedas(resultado.Data))
        .then(criptomonedas => mostrarCriptomonedasSelect(criptomonedas));
}

function mostrarCriptomonedasSelect(criptomonedas){

    criptomonedas.forEach(cripto => {

        const {FullName, Name} = cripto.CoinInfo;

        const option = document.createElement('OPTION');
        option.value = Name;
        option.textContent = FullName;

        criptomonedasSelect.appendChild(option);
        
    });


}

function leerDatos(e){
    objBusqueda[e.target.name] = e.target.value;
}

function enviarFormulario(e){
    e.preventDefault();

    const {moneda, criptomoneda} = objBusqueda;

    if(moneda === '' || criptomoneda === ''){
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }

    consultarAPI();
}


function consultarAPI(){
    //variables utilizando destrunturing sobre el objeto
    const {moneda, criptomoneda} = objBusqueda;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    mostrarSpinner();

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarCotizacion(resultado.DISPLAY[criptomoneda][moneda]));
}

function mostrarCotizacion(cotizacion){

    limpiarHTML();
    
    const {LASTUPDATE, HIGHDAY, LOWDAY, PRICE} = cotizacion;

    const precio = document.createElement('H2');
    precio.innerHTML = `Precio: ${PRICE}`;

    const precioAlto = document.createElement('P');
    precioAlto.innerHTML = `Precio más alto del dia: <strong>${HIGHDAY}</strong>`;

    const precioBajo = document.createElement('P');
    precioBajo.innerHTML = `Precio más bajo del dia: <strong>${LOWDAY}</strong>`;

    const actualizacion = document.createElement('P');
    actualizacion.innerHTML = `Actualizacion: <strong>${LASTUPDATE}</strong>`;

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(actualizacion);

}


function mostrarAlerta(mensaje){

    const existeAlerta = document.querySelector('.alerta');

    if(!existeAlerta){
        const mensajeAlerta = document.createElement('DIV');
        mensajeAlerta.classList.add('mensaje__error', 'alerta');
        mensajeAlerta.textContent = mensaje;

        resultado.appendChild(mensajeAlerta);

        setTimeout(() => {
            mensajeAlerta.remove();
        }, 3000); 
    }
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarSpinner(){

    limpiarHTML();

    const spinner = document.createElement('DIV');
    spinner.classList.add('spinner');
    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `;

    resultado.appendChild(spinner);


}