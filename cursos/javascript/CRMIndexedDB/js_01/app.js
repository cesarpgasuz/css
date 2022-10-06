(function(){
	//variables
	let DB;
	const contenedorClientes = document.querySelector('#listado-clientes');




	//eventListeners
	document.addEventListener('DOMContentLoaded', () => {

		crearDB();

		if(window.indexedDB.open('crm', 1)){
			obtenerClientes();
		}
		contenedorClientes.addEventListener('click', borrarCliente);


	})





	//funciones
	function obtenerClientes(){

		const abrirConexion = window.indexedDB.open('crm', 1);
		abrirConexion.onerror = function(){
			console.log('hubo un error');
		}
		abrirConexion.onsuccess = function(){
			DB = abrirConexion.result;

			const objectStore = DB.transaction('crm').objectStore('crm');
				objectStore.openCursor().onsuccess = function(e){

				const cursor = e.target.result;

				if(cursor){
					const {nombre, email, telefono, empresa, id} = cursor.value;

					contenedorClientes.innerHTML += `
						<tr>
							<td>${nombre} - ${email}</td>
							<td>${telefono}</td>
							<td>${empresa}</td>
							<td>
								<a href="editar-cliente.html?id=${id}">Editar</a>
								<a href="#" data-cliente="${id}" class="borrar-cliente">Eliminar</a>
							</td>
						</tr>
					`;

					cursor.continue();

					}

				}


		}


	}

	function borrarCliente(e){
		e.preventDefault();
		if(e.target.classList.contains('borrar-cliente')){

			const idCliente = Number(e.target.dataset.cliente);


			const confirmar = confirm('deseas eliminar el cliente');

			if(confirmar){

					const transaction = DB.transaction(['crm'], 'readwrite');
					const objectStore = transaction.objectStore('crm');

					objectStore.delete(idCliente);
					transaction.onerror = function(){
						console.log('hubo un error');
					}
					transaction.oncomplete = function() {
						e.target.parentElement.parentElement.remove();
					}

				

			}

		}


	}









	function crearDB(){

		const crearDB = window.indexedDB.open('crm', 1);
		crearDB.onerror = function(){
			console.log('hubo un error');
		}
		crearDB.onsuccess = function() {
			DB = crearDB.result;
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



})();