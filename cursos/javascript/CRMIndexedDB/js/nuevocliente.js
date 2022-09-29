(function(){


    let DB;
    const formulario = document.querySelector('#formulario');

    //abrimos la conexion
    document.addEventListener('DOMContentLoaded', () => {

        abrirConexion();
        formulario.addEventListener('submit', validarFormulario);

    })

    function abrirConexion(){

        const abrirConexion = window.indexedDB.open('crm', 1);
        abrirConexion.onerror = function(){
            console.log('hubo un error');
        }
        abrirConexion.onsuccess = function(){
            console.log('conexion lista');

            DB = abrirConexion.result;

        }


    }


    function validarFormulario(e){
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;


        if(nombre === '' || email === '' || telefono === '' || empresa === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        const cliente = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            empresa: empresa,
            id: Date.now()
        }

        agregarCLiente(cliente);

    }


    function agregarCLiente(cliente){

        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        objectStore.add(cliente);

        transaction.onerror = function(){
            mostrarAlerta('hubo un error', 'error');
        }
        transaction.oncomplete = function(){
            mostrarAlerta('cliente agregado')

            setTimeout(() => {
                window.location.href = 'index.html'
            }, 800)
        }


    }
    


    function mostrarAlerta(mensaje, tipo){

        const divMensaje = document.createElement('div');
        divMensaje.classList.add('alerta');

        const alerta = document.querySelector('.alerta');

        if(!alerta){

            if(tipo === 'error'){
                divMensaje.classList.add('mensaje__error');
             }else{
                divMensaje.classList.add('mensaje__success');
             }

             divMensaje.textContent = mensaje;

            formulario.appendChild(divMensaje);

            setTimeout(() => {
                 divMensaje.remove();
            }, 2500);
        }

        

    }




})();