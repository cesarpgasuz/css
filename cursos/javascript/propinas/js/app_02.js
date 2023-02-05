// variables
const guardarClienteBtn = document.querySelector('#guardar-cliente');


let cliente = {
    mesa: '',
    hora: '',
    pedido: []
}

// eventListeners
document.addEventListener('DOMContentLoaded', () => {

    guardarClienteBtn.addEventListener('click', guardarCliente);

});

// funciones


function guardarCliente(){

    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    cliente = {...cliente, mesa, hora};

    //validamos
    const datosCliente = [mesa, hora].some(campo => campo === '');

    if(datosCliente){
        
        const existeError = document.querySelector('p.error');

        if(!existeError){
            const mensajeAlerta = document.createElement('P');
            mensajeAlerta.classList.add('mensaje__error', 'error');
            mensajeAlerta.textContent = 'Ambos campos son obligatorios';

            const formulario = document.querySelector('form');
            formulario.appendChild(mensajeAlerta);

            setTimeout(() => {
                mensajeAlerta.remove();
            },3000)
        }

        return;
    }

    //mostrar contenido
    mostrarInfo();

    // consultar API
    consultarAPI();

}

function mostrarInfo(){


    const seccionesOcultas = document.querySelectorAll('.d-none');

    seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none'));


    const formularioModal = document.querySelector('#formulario');
    const modal = bootstrap.Modal.getInstance(formularioModal);

    modal.hide();


}

function consultarAPI(){

    const url = 'http://localhost:4000/plaatillos';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            console.log(resultado);
        })
        .catch(error => console.log(error))


}