/// variables
const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

let objBusqueda = {
    moneda: '',
    criptomoneda: ''
}
/// eventListeners


window.onload = () => {

    obtenerCriptomonedas();
    criptomonedasSelect.addEventListener('change', leerDatos);
    monedaSelect.addEventListener('change', leerDatos);
    formulario.addEventListener('submit', enviarFormulario);
}

const consultarCriptomonedas = criptomonedas => new Promise(resolve => {
    resolve(criptomonedas);
})

/// funciones
async function obtenerCriptomonedas(){

    const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD';

    try{

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        const criptomonedas = await consultarCriptomonedas(resultado.Data);
        mostrarCriptomonedasSelect(criptomonedas);

    }catch(error){
        console.log(error);
    }

}

function mostrarCriptomonedasSelect(criptomonedas){
    
    criptomonedas.forEach(crypto => {

        const {FullName, Name} = crypto.CoinInfo;

        const options = document.createElement('OPTION');
        options.value = Name;
        options.textContent = FullName;

        criptomonedasSelect.appendChild(options);

    });

}


function leerDatos(e){
    objBusqueda[e.target.name] = e.target.value;
    console.log(objBusqueda);
}

function enviarFormulario(e){
    e.preventDefault();

    const {moneda, criptomoneda} = objBusqueda;

    if(moneda === '' || criptomoneda == ''){
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }
    
    consultarAPI();


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
        }, 3000)
    }

}


async function consultarAPI(){

    const {moneda, criptomoneda} = objBusqueda;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    
    mostrarSpinner();

    try{

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        // console.log(resultado);
        mostrarCriptomonedas(resultado.DISPLAY[criptomoneda][moneda]);


    }catch(error){
        console.log(error)
    }
}

function mostrarCriptomonedas(cotizacion){

    console.log(cotizacion);

    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
    
    const {PRICE, HIGHDAY, LOWDAY, LASTUPDATE} = cotizacion;

    const precio = document.createElement('H3');
    precio.textContent = `Precio: ${PRICE}`;

    const precioAlto = document.createElement('P');
    precioAlto.textContent = `Precio más Alto del Dia: ${HIGHDAY}`;

    const precioBajo = document.createElement('P');
    precioBajo.textContent = `Precio más Bajo del Día: ${LOWDAY}`;

    const actualizacion = document.createElement('P');
    actualizacion.textContent = `Actualizacion: ${LASTUPDATE}`;

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(actualizacion);

}

function mostrarSpinner(){

    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
    

    const spinner = document.createElement('DIV');
    spinner.classList.add('spinner');
    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `;

    resultado.appendChild(spinner);


}