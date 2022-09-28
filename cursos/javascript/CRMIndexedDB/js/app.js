(function() {

    let DB;

    document.addEventListener('DOMContentLoaded', () => {

        crearDB();

    })


    function crearDB(){
        //creamos la base de datos
        const crearDB = window.indexedDB.open('crm', 1);
        //comprobamos si hay errores
        crearDB.onerror = function(){
            console.log('hubo un error');
        }
        //
        crearDB.onsuccess = function(){
            console.log('base de datos creada');

            BD = crearDB.result;

        }
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





})();