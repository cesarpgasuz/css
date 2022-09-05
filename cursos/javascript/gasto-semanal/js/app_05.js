/////// variables
const formulario = document.querySelector('#agregar-gasto');
const gastosListado = document.querySelector('#gastos ul');





///// eventListeners
eventListeners();

function eventListeners(){

    document.addEventListener('DOMContentLoaded', pedirPresupuesto);
    formulario.addEventListener('submit', agregarGasto);

}






//////// classes
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        //console.log(this.gastos);
        this.calcularRestante();
    }
    calcularRestante(){
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;

        console.log(this.restante);
    }
    eliminarGastos(id){
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        console.log(this.gastos);
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

    mostrarGasto(gastos){
        
        this.limpiarHTML();

        gastos.forEach(gasto => {

            const gastoLista = document.createElement('li');
            gastoLista.dataset.id = gasto.id;
            gastoLista.innerHTML = `${gasto.nombre} -- $ ${gasto.cantidad}`;
            
            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'Eliminar X';
            btnEliminar.classList.add('btn__eliminar');
            btnEliminar.onclick = () => {
                eliminarGasto(gasto.id);
            }

            gastoLista.appendChild(btnEliminar);

            gastosListado.appendChild(gastoLista);

        })

    }

    limpiarHTML(){
        while(gastosListado.firstChild){
            gastosListado.removeChild(gastosListado.firstChild)
        }
    }



    actualizarRestante(restante){

        document.querySelector('#restante').textContent = restante;

    }

    actualizarGasto(presupuestoObj){

        const divRestante = document.querySelector('.restante');

        if((presupuestoObj.presupuesto / 4) > presupuestoObj.restante){
           divRestante.classList.remove('success', 'warning');
           divRestante.classList.add('danger');
        }else if((presupuestoObj.presupuesto / 2) > presupuestoObj.restante){
            divRestante.classList.remove('success', 'danger');
            divRestante.classList.add('warning');
        }else{
            divRestante.classList.remove('warning', 'danger');
            divRestante.classList.add('success');
        }



        if(presupuestoObj.restante <= 0){
            ui.mostrarAlerta('Te has terminado el presupuesto', 'error');
            document.querySelector('button[type="submit"]').disabled = true;
        }else{
            document.querySelector('button[type="submit"]').disabled = false;
        }


    }
   




}

const ui = new UI();

let presupuesto;


////////// funciones
function pedirPresupuesto(){

    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

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


    ui.mostrarAlerta('Gasto agregado correctamente');

    console.log('agregando gasto....')


    ui.mostrarGasto(presupuesto.gastos);

    ui.actualizarRestante(presupuesto.restante)

    ui.actualizarGasto(presupuesto);


    formulario.reset();

}




function eliminarGasto(id){
    presupuesto.eliminarGastos(id);

    ui.mostrarGasto(presupuesto.gastos);

    ui.actualizarRestante(presupuesto.restante)

    ui.actualizarGasto(presupuesto);

   


}


