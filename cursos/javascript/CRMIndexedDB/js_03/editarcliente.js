(function(){

    //variables
    let DB;
    let idCliente;
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');

    const formulario = document.querySelector('#formulario');


    //eventListeners
    document.addEventListener('DOMContentLoaded', () => {

        conexionDB();

        formulario.addEventListener('submit', actualizarCliente);

        const parametroURL = new URLSearchParams(window.location.search);
        idCliente = parametroURL.get('id');
        if(idCliente){
            setTimeout(() => {
                obtenerCliente(idCliente);
            }, 100);
            
        }


    });




    //funciones
    function conexionDB(){

        const crearConexion = window.indexedDB.open('crm', 1);
        crearConexion.onerror = function(){
            console.log('hubo un error');
        }
        crearConexion.onsuccess = function(){
            DB = crearConexion.result;
        }
    }


    function obtenerCliente(id){

        const transaction = DB.transaction(['crm'], 'readonly');
        const objectStore = transaction.objectStore('crm');

        const cliente = objectStore.openCursor();
        cliente.onsuccess = function(e){

            const cursor = e.target.result;

            if(cursor){

                if(cursor.value.id === Number(id)){
                    llenarFormulario(cursor.value);
                }

                cursor.continue();

            }

        }




    }

    function llenarFormulario(datosCliente){

        const {nombre, email, telefono, empresa} = datosCliente;

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        
    }

    function actualizarCliente(e){
        e.preventDefault();

        if(nombreInput.value === '' || emailInput.value === '' || telefonoInput.value === '' || emailInput.value === ''){
            mostrarAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        const clienteActualizado = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: Number(idCliente)
        }


        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        objectStore.put(clienteActualizado);

        transaction.onerror = function(){
            mostrarAlerta('Hubo un error', 'error');
        }
        transaction.oncomplete = function(){
            mostrarAlerta('Cliente Guardado');
            formulario.reset();

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 800);

        }




    }




})();