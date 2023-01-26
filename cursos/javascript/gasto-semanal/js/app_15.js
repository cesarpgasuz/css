///// variables
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');



//// eventos
eventListeners();

function eventListeners(){

    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregarGasto);
}


//// classes
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        console.log(this.gastos);
        this.calcularRestante();
    }
    calcularRestante(){
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
    }
    eliminarGastos(id){
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        this.calcularRestante();
    }
}

class UI{

    insertarPresupuesto(cantidad){
        // extraer los valores
        const {presupuesto, restante} = cantidad;
        // agregar al html
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }
    imprimirAlerta(mensaje, tipo){
        //crear div
        const divMensaje = document.createElement('div');
        
        if(tipo === 'error'){
            divMensaje.classList.add('mensaje__error');
        }else{
            divMensaje.classList.add('mensaje__success');
        }
        // agregamos el mensaje
        divMensaje.textContent = mensaje;
        // insertar en el html
        document.querySelector('.primario').insertBefore(divMensaje, formulario);
        //quitar el html
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    mostrarGastos(gastos){

        this.limpiarHTML(); // elimina el gasto previo


        //iterar sobre los gastos
        gastos.forEach(gasto => {
            const {cantidad, nombre, id} = gasto;
            //crear un li

            const nuevoGasto = document.createElement('li');
            nuevoGasto.dataset.id = id;
            // agregar el html del gasto

            nuevoGasto.innerHTML = `
               <strong> ${nombre} </strong> --- ${cantidad}
            `;

            // boton para borrar el gasto
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn__eliminar');
            btnEliminar.textContent = 'Borrar';
            btnEliminar.onclick = () => {
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnEliminar);

            //agregar al html
            gastoListado.appendChild(nuevoGasto);
        });

    }

    limpiarHTML(){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante){

        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj){
        const {presupuesto, restante} = presupuestoObj;
        const restanteDiv = document.querySelector('.restante.alert');
        //comprobar 25%
        if((presupuesto / 4) > restante){
            restanteDiv.classList.add('danger');
            restanteDiv.classList.remove('success', 'warning');
        }else if((presupuesto / 2) > restante){
            restanteDiv.classList.add('warning');
            restanteDiv.classList.remove('success', 'danger');
        }else{
            restanteDiv.classList.add('success');
            restanteDiv.classList.remove('warning', 'danger');
        }

        if(restante <= 0){
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }else{
            formulario.querySelector('button[type="submit"]').disabled = false;
        }
    }

}

// instanciar
const ui = new UI();
let presupuesto;

//// funciones
function preguntarPresupuesto(){

    const presupuestoUsuario = prompt('Cual es tu presupuesto');

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();
        return;
    }

    ///presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto)
    ui.insertarPresupuesto(presupuesto);
}


//añade gastos
function agregarGasto(e){
    e.preventDefault();

    //leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    if(nombre === '' || cantidad === ''){
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
        return;
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad No Valida', 'error');
        return;
    }

    // generar un objeto con el gasto
    const gasto = {
        nombre: nombre,
        cantidad: cantidad,
        id: Date.now()
    }
    
    // añade un nuevo gasto
    presupuesto.nuevoGasto(gasto);

    //mensaje de todo bien
    ui.imprimirAlerta('Gasto Agregado');

    //imprimir los gastos
    ui.mostrarGastos(presupuesto.gastos);

    ui.actualizarRestante(presupuesto.restante);

    ui.comprobarPresupuesto(presupuesto);
    
    //reinicia el formulario
    formulario.reset();

}

function eliminarGasto(id){
    // elimina los gastos del arreglo
    presupuesto.eliminarGastos(id);
    //eliminar los gasto del html
    ui.mostrarGastos(presupuesto.gastos);

    ui.actualizarRestante(presupuesto.restante);

    ui.comprobarPresupuesto(presupuesto);

}