//// variables
const formulario = document.querySelector('#agregar-gasto');
const contenedorGastos = document.querySelector('#gastos ul');

/// eventListeners
eventListeners();

function eventListeners(){

    document.addEventListener('DOMContentLoaded', pedirPresupuesto);
    formulario.addEventListener('submit', agregarGasto);
}


/// classes
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
    mostrarPresupuesto(cantidad){
        const {presupuesto, restante} = cantidad;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    mostrarAlerta(mensaje, tipo){

        const mensajeAlerta = document.createElement('div');

        if(tipo === 'error'){
            mensajeAlerta.classList.add('mensaje__error');
        }else{
            mensajeAlerta.classList.add('mensaje__success');
        }
        mensajeAlerta.textContent = mensaje;

        document.querySelector('.primario').appendChild(mensajeAlerta);

        setTimeout(() => {
            mensajeAlerta.remove();
        }, 3000);
    }

    mostrarGastos(gastos){

        this.limpiarHTML();

        gastos.forEach(gasto => {
            const {nombre, cantidad, id} = gasto;
            const gastoItem = document.createElement('li');
            gastoItem.dataset.id = id;
            gastoItem.innerHTML = `
                <strong>${nombre}</strong> --- ${cantidad} ---
            `;
            //boton eliminar gasto
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn__eliminar');
            btnEliminar.textContent = 'Eliminar X';
            btnEliminar.onclick = () => {
                eliminarGasto(id);
            }

            gastoItem.appendChild(btnEliminar);
            contenedorGastos.appendChild(gastoItem);

        });
    }

    limpiarHTML(){
        while(contenedorGastos.firstChild){
            contenedorGastos.removeChild(contenedorGastos.firstChild);
        }
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }

    actualizarPresupuesto(presupuestoObj){

        const {presupuesto, restante} = presupuestoObj;
        const divRestante = document.querySelector('.restante');

        if((presupuesto / 4) > restante){
            divRestante.classList.add('danger');
            divRestante.classList.remove('success', 'warning');
        }else if((presupuesto / 2) > restante){
            divRestante.classList.add('warning');
            divRestante.classList.remove('success', 'danger');
        }else{
            divRestante.classList.add('success');
            divRestante.classList.remove('warning', 'danger');
        }

        if(restante <= 0){
            formulario.querySelector('button[type="submit"]').disabled = true;
            const agotado = document.createElement('p');
            agotado.textContent = 'Presupuesto Agotado';
            agotado.classList.add('p__agotado');
            agotado.style.color = 'red';
            formulario.appendChild(agotado);
        }else{
            formulario.querySelector('button[type="submit"]').disabled = false;
            const agotado = document.querySelector('p.p__agotado');
            if(agotado){
                agotado.remove();
            }
        }

    }


}

//instanciamos
const ui = new UI();
let presupuesto;


/// funciones
function pedirPresupuesto(){

    const presupuestoUsuario = prompt('Cual es tu Presupuesto?');
    
    //validamos
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();
        return;
    }
    
    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.mostrarPresupuesto(presupuesto);

}

function agregarGasto(e){
    e.preventDefault();

    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    if(nombre === '' || cantidad === ''){
        ui.mostrarAlerta('Ambos campos son obligatorios', 'error');
        return;
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.mostrarAlerta('Cantidad No Valida', 'error');
        return;
    }

    // objecto donde se guardar el gasto
    const gasto = {
        nombre: nombre,
        cantidad: cantidad,
        id: Date.now()
    }
    //agregamo un nuevo gasto
    presupuesto.nuevoGasto(gasto);
    //mensaje de nuevo gasto
    ui.mostrarAlerta('Gasto Agregado Correctamente');
    //mostramos los gastos
    ui.mostrarGastos(presupuesto.gastos);
    // actualizar el restante
    ui.actualizarRestante(presupuesto.restante);
    //actualizar presupuesto
    ui.actualizarPresupuesto(presupuesto);

    formulario.reset();

}

function eliminarGasto(id){

    presupuesto.eliminarGastos(id);
    //mensjae de gasto eliminado
    ui.mostrarAlerta('Gasto Eliminado');
    //mostramos los gastos
    ui.mostrarGastos(presupuesto.gastos);
    // actualizar el restante
    ui.actualizarRestante(presupuesto.restante);
    //actualizar presupuesto
    ui.actualizarPresupuesto(presupuesto);

}