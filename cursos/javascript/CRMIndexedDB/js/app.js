(function(){
    //variables
    let DB;

    //eventListeners
    document.addEventListener('DOMContentLoaded', () => {

        crearDB();

        if(window.indexedDB.open('crm', 1)){
            obtenerCliente();
        }

    })

    //funciones
    
    function crearDB(){
        //creamos la base de datos
        const crearDB = window.indexedDB.open('crm', 1);
        //verificacon errores
        crearDB.onerror = function(){
            console.log('hubo un error');
        }
        //
        crearDB.onsuccess = function(){
            console.log('base de datos creada');
            DB = crearDB.result;
            console.log(DB)
        }

        //configuracion
        crearDB.onupgradeneeded = function(e){

            const db = e.target.result;

            const objectStore = db.createObjectStore('crm', {
                keyPath: 'id',
                autoIncrement: true
            })

            objectStore.createIndex('nombre', 'nombre', {unique: false});
            objectStore.createIndex('email', 'email', {unique: true});
            objectStore.createIndex('telefono', 'telefono', {unique: false});
            objectStore.createIndex('empresa', 'empresa', {unique: false});
            objectStore.createIndex('id', 'id', {unique: true});

            console.log('base de datos creada y lista');

        }


    }

    function obtenerCliente(){

        const abrirConexion = window.indexedDB.open('crm',1);
            abrirConexion.onerror = function(){
                 console.log('hubo un error');
            };

            abrirConexion.onsuccess = function(){

                DB =abrirConexion.result;

                const objectStore = DB.transaction('crm').objectStore('crm');

                objectStore.openCursor().onsuccess = function(e){

                    const cursor = e.target.result;

                    if(cursor){

                        const {nombre, email, telefono, empresa, id} = cursor.value;
                        const listadoCliente = document.querySelector('#listado-clientes');

                        listadoCliente.innerHTML += `

                            <tr>
                                <td>${nombre} - ${email}</td>
                                <td>${telefono}</td>
                                <td>${empresa}</td>
                                <td><a href="editar-cliente.html?id=${id}">Editar</a></td>
                                <td><a href="#" data-cliente="${id}">Eliminar</a></td>

                            <tr>
                        
                        `;

                        cursor.continue();


                    }else{
                        console.log('son todos los datos');
                    }



            }



        }





    }



})();