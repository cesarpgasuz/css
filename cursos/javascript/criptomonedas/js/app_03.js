// variables
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');
const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}

// eventListeners

window.onload = () => {

    obtenerCriptomonedas();
    criptomonedasSelect.addEventListener('change', leerDatos);
    monedaSelect.addEventListener('change', leerDatos);
    formulario.addEventListener('submit', validarFormulario);

}

const consultarCriptomonedas = criptomonedas => new Promise(resolve => {
    resolve (criptomonedas);
});

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

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;

        criptomonedasSelect.appendChild(option);
    });

}

function leerDatos(e){

    objBusqueda[e.target.name] = e.target.value;
}

function validarFormulario(e){
    e.preventDefault();

    const {moneda, criptomoneda} = objBusqueda;
    //validamos
    if(moneda === '' || criptomoneda === ''){
        mostrarAlerta('Hay campos vacios');
        return;
    }

    consultarAPI();
}


function consultarAPI(){

    const {moneda, criptomoneda} = objBusqueda;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    
    mostrarSpinner();

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            mostrarCriptomoneda(resultado.DISPLAY[criptomoneda][moneda]);
        })
}

function mostrarCriptomoneda(criptomoneda){

    limpiarHTML();

    const {PRICE, LASTUPDATE, HIGHDAY, LOWDAY} = criptomoneda;

    const precio = document.createElement('H2');
    precio.innerHTML = `Precio: <strong>${PRICE}</strong>`;

    const precioAlto = document.createElement('P');
    precioAlto.innerHTML = `Precio más Alto: <strong>${HIGHDAY}</strong>`;

    const precioBajo = document.createElement('P');
    precioBajo.innerHTML = `Precio más Bajo: <strong>${LOWDAY}</strong>`;

    const actualizacion = document.createElement('P');
    actualizacion.innerHTML = `Actualizacion: <strong>${LASTUPDATE}</strong>`;

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(actualizacion);

}


function mostrarAlerta(mensaje){

    const existeAlerta = document.querySelector('p.alerta');

    if(!existeAlerta){
        const mensajeAlerta = document.createElement('P');
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