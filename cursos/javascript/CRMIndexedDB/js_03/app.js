(function(){

    //variables
    let DB;
    const contenedorClientes = document.querySelector('#listado-clientes');
    const clientes = document.querySelector('.clientes');

    //eventListeners
    document.addEventListener('DOMContentLoaded', () => {
         
        crearDB();

        if(window.indexedDB.open('crm', 1)){
            obtenerClientes();
        }
        clientes.addEventListener('click', eliminarCliente);
        
    });



    //funciones
    function crearDB(){

       const crearDB = window.indexedDB.open('crm', 1);
       
       crearDB.onerror = function(){
            console.log('hubo un error');
       }
       crearDB.onsuccess = function(){
            DB = crearDB.result;
       }
       crearDB.onupgradeneeded = function(e){

            const db = e.target.result;

            const objectStore = db.createObjectStore('crm', {
                keyPath: 'id',
                autoIncrement: true
            });

            objectStore.createIndex('nombre', 'nombre', {unique: false});
            objectStore.createIndex('email', 'email', {unique: true});
            objectStore.createIndex('telefono', 'telefono', {unique: false});
            objectStore.createIndex('empresa', 'empresa', {unique: false});
            objectStore.createIndex('id', 'id', {unique: true});

            console.log('base de datos creada y lista');


       }

    }

    /////////////////////////

    function obtenerClientes(){


        const crearConexion = window.indexedDB.open('crm', 1);
        crearConexion.onerror = function(){
            console.log('hubo un error');
        }
        crearConexion.onsuccess = function(){

            DB = crearConexion.result;

            const objectStore = DB.transaction('crm').objectStore('crm');
            objectStore.openCursor().onsuccess = function(e){

            const cursor = e.target.result;
                if(cursor){
                    
                    const {nombre, email, telefono, empresa, id} = cursor.value;

                    contenedorClientes.innerHTML += `
                    
                        <tr>
                            <td><span class="nombre">${nombre}</span> -- ${email}</td>
                            <td>${telefono}</td>
                            <td>${empresa}</td>
                            <td>
                                <a href="editar-cliente.html?id=${id}">Editar</a>
                                <a href="#" class="borrar-cliente" data-cliente="${id}">Eliminar</a>
                            </td>
                        </tr>
                    
                    `;
                    
                    cursor.continue();

                }
            
            }


        }

    }


    function eliminarCliente(e){


        if(e.target.classList.contains('borrar-cliente')){
            
            const idCliente = Number(e.target.dataset.cliente);
            const datosCliente = e.target.parentElement.parentElement;
            const nombre = datosCliente.querySelector('td span.nombre').textContent;

            const confirmar = confirm(`Quieres borrar al Cliente ${nombre}`);

            if(confirmar){

                const transaction = DB.transaction(['crm'], 'readwrite');
                const objectStore = transaction.objectStore('crm');
                objectStore.delete(idCliente);
                transaction.onerror = function(){
                    mostrarAlerta('Hubo un error', 'error');
                 }
                transaction.oncomplete = function(){
                   e.target.parentElement.parentElement.remove();
                }


            }

        }


    }




})();