(function(){

    let DB;
    const formulario = document.querySelector('#formulario');


    document.addEventListener('DOMContentLoaded', () => {

       
        conectarDB();
        formulario.addEventListener('submit', validarFormulario);

    })

    
    function conectarDB(){

        const abrirConexion = window.indexedDB.open('crm', 1);
        abrirConexion.onerror = function(){
            console.log('hubo un error');
        }
        abrirConexion.onsuccess = function(){
            DB = abrirConexion.result;
        }

    }


    function validarFormulario(e){
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        //validamoos
        if(nombre === '' || email === '' || telefono === '' || empresa === ''){
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        const datosCliente = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            empresa: empresa,
            id: Date.now()
        }

        nuevoCliente(datosCliente);


    }


    function nuevoCliente(cliente){

        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        objectStore.add(cliente);

        transaction.onerror = function(){
            imprimirAlerta('hubo un error', 'error');
        }
        transaction.oncomplete = function(){
            imprimirAlerta('Cliente Guardado con Exito');

            setTimeout(() => {
                window.location.href = 'index.html'
            },700)
        }




    }









})();