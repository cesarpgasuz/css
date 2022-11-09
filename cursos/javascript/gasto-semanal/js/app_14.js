//variables
const formulario = document.querySelector('#agregar-gasto');
const listaGastos = document.querySelector('#gastos ul');
const agotado = document.querySelector('.agotado');


//eventListeners
eventListeners();

function eventListeners(){
    document.addEventListener('DOMContentLoaded', pedirPresupuesto);

    formulario.addEventListener('submit', agregarGasto);

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
        this.calcularRestante();
    }

    calcularRestante(){

        const gastado = this.gastos.reduce((total, gasto) =>  total + gasto.cantidad, 0 );
        this.restante = this.presupuesto - gastado;

    }

    eliminarGastos(id){

        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        this.calcularRestante();

    }



}

class UI{

    mostrarPresupuesto(cantidad){
        const { presupuesto, restante} = cantidad;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    mostrarAlerta(mensaje, tipo){

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
        }, 2500);
    }


 

    mostrarGastos(gastos){

        this.limpiarHTML();

        gastos.forEach(gasto => {
            const {nombre, cantidad, id} = gasto;

            const gastoItem = document.createElement('li');
            gastoItem.dataset.id = id;

            gastoItem.innerHTML = `
                <strong>${nombre}</strong> -- ${cantidad}
            `;

            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn__eliminar');
            btnEliminar.textContent = 'Eliminar Gasto';

            btnEliminar.onclick = () => {
                eliminarGasto(id);
            }


            gastoItem.appendChild(btnEliminar);
            listaGastos.appendChild(gastoItem);

        });



    }

    limpiarHTML(){
        while(listaGastos.firstChild){
            listaGastos.removeChild(listaGastos.firstChild);
        }
    }


    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }


    actualizarPresupuesto(presupuestoObj){

        const restanteDiv = document.querySelector('.restante.alert');
        const {presupuesto, restante} = presupuestoObj;

        if((presupuesto / 4) > restante){
            restanteDiv.classList.add('danger');
            restanteDiv.classList.remove('warning', 'success');
        }else if((presupuesto / 2) > restante){
            restanteDiv.classList.add('warning');
            restanteDiv.classList.remove('danger', 'success');
        }else{
            restanteDiv.classList.add('success');
            restanteDiv.classList.remove('warning', 'danger');
        }


        if(restante <= 0){
            formulario.querySelector('button[type="submit"]').disabled = true;
            agotado.classList.add('show');
            agotado.textContent = 'Se ha terminado el presupuesto';
            
        }else{
            formulario.querySelector('button[type="submit"]').disabled = false;
            agotado.classList.remove('show');
            agotado.textContent = '';
        }



    }



}


const ui = new UI();
let presupuesto;



//funciones
function pedirPresupuesto(){

    const presupuestoUsuario = prompt('Cual es tu presupuesto');

    if(presupuestoUsuario === '' || presupuestoUsuario <= 0 || isNaN(presupuestoUsuario) || presupuestoUsuario === null){
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
        ui.mostrarAlerta('Todos los campos son obligatorios', 'error');
        return;
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.mostrarAlerta('Cantidad no validad', 'error');
        return;
    }


    const gasto = {
        nombre: nombre,
        cantidad: cantidad,
        id: Date.now()
    }

    presupuesto.nuevoGasto(gasto);

    ui.mostrarAlerta('Gasto Agregado');

    ui.mostrarGastos(presupuesto.gastos);

    ui.actualizarRestante(presupuesto.restante);
    
    ui.actualizarPresupuesto(presupuesto);

    formulario.reset();



}


function eliminarGasto(id){

    presupuesto.eliminarGastos(id);

    ui.mostrarAlerta('Gasto Eliminado');

    ui.mostrarGastos(presupuesto.gastos);

    ui.actualizarRestante(presupuesto.restante);

    ui.actualizarPresupuesto(presupuesto);
    
}



