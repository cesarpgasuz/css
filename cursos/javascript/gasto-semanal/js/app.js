//variables
const formulario = document.querySelector('#agregar-gasto');


//eventlisteners

eventListeners();

function eventListeners(){

    document.addEventListener('DOMContentLoaded', agregarPresupuesto);
}


//classess
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = presupuesto;
        this.restante = presupuesto;
        this.gastos = [];
    }
}

class UI {
    insertarPrepuesto(cantidad){

        document.querySelector('#total').textContent = cantidad.presupuesto;
        document.querySelector('#restante').textContent = cantidad.restante;

    }
}

const ui = new UI (); //instanciamos ui de forma global


let presupuesto;

//funciones
function agregarPresupuesto(){

    const presupuestoUsuario = prompt('cual es tu prespuesto');

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();
    }


    presupuesto = new Presupuesto(presupuestoUsuario); //instanciamos la la classe prespuesto y le asignamos el presupuesto del prompt

    ui.insertarPrepuesto(presupuesto);
    console.log(presupuesto);



}