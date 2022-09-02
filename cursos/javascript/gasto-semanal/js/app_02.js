//variables
const formulario = document.querySelector('#agregar-gasto');



//eventlisteners
eventListeners();

function eventListeners(){

    document.addEventListener('DOMContentLoaded', pedirPresupuestoUsuario);
    formulario.addEventListener('submit', agregarGasto);
}


//clasess
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
}

class UI{
    insertarPresupuesto(cantidad){
        document.querySelector('#total').textContent = cantidad.presupuesto;
        document.querySelector('#restante').textContent = cantidad.restante;
    }
    mostrarAlerta(mensaje, tipo){
        const divMensaje = document.createElement('div');

        if(tipo === 'error'){
            divMensaje.classList.add('mensaje__error');
        }else{
            divMensaje.classList.add('mensaje__success');
        }

        divMensaje.textContent = mensaje;

        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);

    }
}

const ui = new UI();

let presupuesto;

//funciones
function pedirPresupuestoUsuario(){

    const presupuestoUsuario = prompt('Cual es tu presupuesto');

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();
    }
    

    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto);

    console.log(presupuesto);
}

function agregarGasto(e){
    e.preventDefault();

    const nombre = document.querySelector('#gasto').value;
    const cantidad = document.querySelector('#cantidad').value;


    if(nombre === '' || cantidad === ''){
        ui.mostrarAlerta('Todos los campoos son obligatorios', 'error');
        return;
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.mostrarAlerta('Cantidad no Valida', 'error');
        return;
    }

    console.log('agregando gasto ...');
}