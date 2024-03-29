//variables
const formulario = document.querySelector('#agregar-gasto');
const gastosListado = document.querySelector('#gastos ul')

//eventlisteners
eventListeners();

function eventListeners(){

    document.addEventListener('DOMContentLoaded', pedirPresupuesto);
    formulario.addEventListener('submit', agregarGastos);

}



//classes
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        console.log(this.gastos);
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
        }, 2500);

    }



    gastoListado(gastos){
    
        this.limpiarHTML();

        gastos.forEach(gasto => {

            const nuevoGasto = document.createElement('li');
            nuevoGasto.dataset.id = gasto.id;
            nuevoGasto.innerHTML = `${gasto.nombre} -- ${gasto.cantidad}`;
            
            const eliminaGasto = document.createElement('button');
            eliminaGasto.classList.add('eliminar__gasto');
            eliminaGasto.textContent = 'Eliminar X';

            nuevoGasto.appendChild(eliminaGasto);

            gastosListado.appendChild(nuevoGasto);


        })

    }

    limpiarHTML(){
        while(gastosListado.firstChild){
            gastosListado.removeChild(gastosListado.firstChild);
        }
    }




}

const ui = new UI();

let presupuesto;

//funciones
function pedirPresupuesto(){

    const presupuestoUsuario = prompt('cual es tu presupuesto');

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();
    }

    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto);


    console.log(presupuesto);

}



function agregarGastos(e){
    e.preventDefault();
   
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    if(nombre === '' || cantidad === ''){
        ui.mostrarAlerta('Todos los campos son obligatorios', 'error');
        return;
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.mostrarAlerta('Cantidad no Valida', 'error');
        return;
    }

    
    const gasto = {
        nombre: nombre,
        cantidad: cantidad,
        id: Date.now()
    }

    presupuesto.nuevoGasto(gasto);

    ui.mostrarAlerta('Gasto agregado Correctamente');

    const {gastos} = presupuesto
    ui.gastoListado(gastos);
 

    formulario.reset();

}