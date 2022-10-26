(function(){

	//variables
	let DB;
	const listadoClientes = document.querySelector('#listado-clientes');

	//eventListeners
	document.addEventListener('DOMContentLoaded', () => {

		crearDB();

		if(window.indexedDB.open('crm', 1)){
			obtenerClientes();
		}
	})

		


	function obtenerClientes(){

		const conexionDB = window.indexedDB.open('crm',1);
		conexionDB.onerror = function(){
			console.log('hubo un error');
		}
		conexionDB.onsuccess = function(){

			DB = conexionDB.result;

			const objectStore = DB.transaction('crm').objectStore('crm');
			objectStore.openCursor().onsuccess = function(e){

				const cursor = e.target.result;

				if(cursor){

					const {nombre, email, telefono, empresa, id} = cursor.value;

					listadoClientes.innerHTML += `

						<tr>
							<td>${nombre} -- ${email}</td>
							<td>${telefono}</td>
							<td>${empresa}</td>
							<td>
								<a href="editar-cliente.html?id=${id}">Editar Cliente</a>
								<a href="#" class="borrarCliente">Borrar Cliente</a>
							</td>
						</tr>
					`;

					cursor.continue();

				}


			}


		}
		

	}



	//funciones
	function crearDB(){

		const crearDB = window.indexedDB.open('crm', 1);

		crearDB.onerror = function(){
			console.log('hubo un error');
		}
		crearDB.onsuccess = function(){
			console.log('base de datos creada');
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



})();