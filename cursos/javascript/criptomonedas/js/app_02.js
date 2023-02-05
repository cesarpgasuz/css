/// variables
const formulario = document.querySelector('#formulario');
const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}

/// eventListernes


document.addEventListener('DOMContentLoaded', () => {

    obtenerCriptomonedas();
    
    monedaSelect.addEventListener('change', obtenerDatos);
    criptomonedasSelect.addEventListener('change', obtenerDatos);
    formulario.addEventListener('submit', validarInfo);

})

const consultarCriptomonedas = (criptomonedas) => new Promise(resolve => {
   resolve (criptomonedas);
})

//// funciones
function obtenerCriptomonedas(){

    const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => consultarCriptomonedas(resultado.Data))
        .then(criptomonedas => mostrarCriptomonedasSelect(criptomonedas));
}

function mostrarCriptomonedasSelect(criptomonedas){

    console.log(criptomonedas)
    
    criptomonedas.forEach(crypto => {
        
        const {FullName, Name} = crypto.CoinInfo;

        const option = document.createElement('OPTION');
        option.value = Name;
        option.textContent = FullName;

        criptomonedasSelect.appendChild(option);

    });


}

function obtenerDatos(e){

    objBusqueda[e.target.name] = e.target.value;

}

function validarInfo(e){
    e.preventDefault();
    // realizamos destructuring
    const {moneda, criptomoneda} = objBusqueda;
    //validamos
    if(moneda === '' || criptomoneda === ''){
        mostrarAlerta('uno o ambos campos estan vacios');
        return;
    }

    mostrarCriptomonedas(moneda, criptomoneda);

}


function mostrarCriptomonedas(moneda, criptomoneda){

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
   
    spinner();
   
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => imprimirCrypto(resultado.DISPLAY[criptomoneda][moneda]))
      
}

function imprimirCrypto(cryptomoneda){
    
    limpiarHTML();

    const {PRICE, HIGHDAY, LOWDAY, LASTUPDATE} = cryptomoneda;

    const precio = document.createElement('H4');
    precio.innerHTML = `Precio: <strong>${PRICE}</strong>`;

    const precioAlto = document.createElement('P');
    precioAlto.innerHTML = `Precio más alto del Dia: <strong>${HIGHDAY}</strong>`;

    const precioBajo = document.createElement('P');
    precioBajo.innerHTML = `Precio más bajo del Día: <strong>${LOWDAY}</strong>`;

    const actualizacion = document.createElement('P');
    actualizacion.innerHTML = `Ultima Actualizacion: <strong>${LASTUPDATE}</strong>`

    
    resultado.appendChild(precio)
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo)
    resultado.appendChild(actualizacion)


}

function mostrarAlerta(mensaje){

    const error = document.querySelector('p.error');

    if(!error){
        const mensajeAlerta = document.createElement('P');
        mensajeAlerta.classList.add('mensaje__error', 'error');
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


function spinner(){

    limpiarHTML();

    const spinnerDiv = document.createElement('DIV');
    spinnerDiv.classList.add('spinner');
    spinnerDiv.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `;

    resultado.appendChild(spinnerDiv);

}