//// variables
const formulario = document.querySelector('#agregar-gasto');
const gastosListado = document.querySelector('#gastos ul');




//////eventListeners
eventListeners();

function eventListeners(){

    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregarGastos);

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
        /*if(gastado > this.presupuesto){
            console.log('has rebasado el presupuesto')
            return;
        }*/
        this.restante = this.presupuesto - gastado;
    }
    borrarGastos(id){
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        this.calcularRestante();
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

    mostrarGastos(gastos){

        this.limpiarHTML();
        
        gastos.forEach(gasto => {
            const gastoItem = document.createElement('li');
            gastoItem.dataset.id = gasto.id;
            gastoItem.innerHTML = `${gasto.nombre} -- $ ${gasto.cantidad}`;

            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn__eliminar');
            btnEliminar.textContent = 'Eliminar X';
            btnEliminar.onclick = () => {
                borrarGasto(gasto.id);
            }
            gastoItem.appendChild(btnEliminar);

            gastosListado.appendChild(gastoItem);

        })

    }


    limpiarHTML(){
        while(gastosListado.firstChild){
            gastosListado.removeChild(gastosListado.firstChild);
        }
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }

    actualizarPresupuesto(presupuestoObj){

        const divRestante = document.querySelector('.restante');
        const {presupuesto, restante} = presupuestoObj;

        if((presupuesto / 4 ) > restante){
            divRestante.classList.remove('success', 'warning');
            divRestante.classList.add('danger');
        }else if((presupuesto / 2 ) > restante){
            divRestante.classList.remove('success', 'danger');
            divRestante.classList.add('warning');
        }else{
            divRestante.classList.remove('danger', 'warning');
            divRestante.classList.add('success');
        }

        if(restante <= 0){
            document.querySelector('button[type="submit"]').disabled = true;
            this.mostrarAlerta('Te has terminado el presupuesto', 'error');
        }else{
            document.querySelector('button[type="submit"]').disabled = false;
        }
        


    }



}

const ui = new UI();

let presupuesto;



////////// funciones
function preguntarPresupuesto(){

    const presupuestoUsuario = prompt('¿cual es tu presupuesto?');
    
   //validamos
   if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();
   }

   presupuesto = new Presupuesto(presupuestoUsuario);

   ui.insertarPresupuesto(presupuesto);

   console.log(presupuesto)

}




function agregarGastos(e){
    e.preventDefault();
    
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    // validamos
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
    //agregamos un nuevo gasto
    presupuesto.nuevoGasto(gasto);

    //mostramos el gasto en el html (extraemos los gastos para no pasar todo el arreglo)
    ui.mostrarGastos(presupuesto.gastos);

    ui.mostrarAlerta('Gasto agregado Correctamente');

    //actualizamos el restante en el html
    ui.actualizarRestante(presupuesto.restante);

    //actualizar los colores cuando se pasa de la mitad del presupuesto
    ui.actualizarPresupuesto(presupuesto);

    //reiniciamos el formulario despues de agregar un gasto
    formulario.reset();


}



//funcion para borrar los gastos
function borrarGasto(id){
    presupuesto.borrarGastos(id);


    //mostramos el gasto en el html (extraemos los gastos para no pasar todo el arreglo)
    ui.mostrarGastos(presupuesto.gastos);

    //actualizamos el restante en el html
    ui.actualizarRestante(presupuesto.restante);

    //actualizar los colores cuando se pasa de la mitad del presupuesto
    ui.actualizarPresupuesto(presupuesto);


}