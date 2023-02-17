//// variables
const formulario = document.querySelector('#agregar-gasto');
const contenedorGastos = document.querySelector('#gastos ul');


/// eventListeners
eventListeners();

function eventListeners(){

    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
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
        this.calcularRestante();
    }
    calcularRestante(){
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
    }
    eliminarGasto(id){
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
    imprimirAlerta(mensaje, tipo){
        const mensajeAlerta = document.createElement('p');
        
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
            gastoItem.innerHTML = ` <strong>${nombre}</strong> -- $ ${cantidad} ----`;

            //boton para eliminar gastos
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn__eliminar');
            btnEliminar.textContent = 'Eliminar Gasto';
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
        const divRestante = document.querySelector('.restante.alert');
        const {presupuesto, restante} = presupuestoObj;

        if((presupuesto / 4) > restante){
            divRestante.classList.add('danger');
            divRestante.classList.remove('success', 'warning');
        }else if((presupuesto / 2) > restante){
            divRestante.classList.add('warning');
            divRestante.classList.remove('success', 'danger');
        }else{
            divRestante.classList.add('success');
            divRestante.classList.remove('danger', 'warning');
        }

        if(restante <= 0){
            formulario.querySelector('button[type="submit"]').disabled = true;
            const agotado = document.createElement('p');
            agotado.classList.add('p__agotado');
            agotado.style.color = 'red';
            agotado.textContent = 'Presupuesto Agotado';
            document.querySelector('.primario').appendChild(agotado);
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




// funciones
function preguntarPresupuesto(){

    const presupuestoUsuario = prompt('Cual es tu presupuesto');

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

    //validamos
    if(nombre === '' || cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad No Valida', 'error');
        return;
    }

    //generamos un objeto donde guardaremos los gastos
    const gasto = {
        nombre: nombre,
        cantidad: cantidad,
        id: Date.now()
    }
    //agregamos el nuevo gasto
    presupuesto.nuevoGasto(gasto);
    //mostramos una aleta del nuevo gasto
    ui.imprimirAlerta('Gasto Agregado Correctamente');
    //mostrarmos los gastos
    ui.mostrarGastos(presupuesto.gastos);
    //actualizamos el restante
    ui.actualizarRestante(presupuesto.restante);
    // actualizamos el presupuesto
    ui.actualizarPresupuesto(presupuesto);
    //limpiamos el formulario
    formulario.reset();

}

function eliminarGasto(id){
    //eliminamos el gasto
    presupuesto.eliminarGasto(id);
    //mensaje de gasto eliminado
    ui.imprimirAlerta('Gasto Eliminado');
    //mostrarmos los gastos
    ui.mostrarGastos(presupuesto.gastos);
    //actualizamos el restante
    ui.actualizarRestante(presupuesto.restante);
    // actualizamos el presupuesto
    ui.actualizarPresupuesto(presupuesto);

}