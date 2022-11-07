(function(){

	//variables
	let DB;
	const formulario = document.querySelector('#formulario');


	//eventListeners
	document.addEventListener('DOMContentLoaded', () => {

		conexionDB();
		formulario.addEventListener('submit', validarFormulario);

	})




	//funciones
	function conexionDB(){

		const crearConexion = window.indexedDB.open('crm', 1);
		
		crearConexion.onerror = function(){
			console.log('hubo un error');
		}
		crearConexion.onsuccess = function(){
			console.log('conexion exitosa');
			DB = crearConexion.result;
		}

	}

	function validarFormulario(e){
		e.preventDefault();

		////
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

		agregarCliente(cliente)

		

	}

	function agregarCliente(cliente){

		const transaction = DB.transaction(['crm'], 'readwrite');
		const objectStore = transaction.objectStore('crm');

		objectStore.add(cliente);

		transaction.oncomplete = function(){
			mostrarAlerta('Cliente Agregado');
			formulario.reset();
			
			setTimeout(() => {
				window.location.href = 'index.html'
			}, 1200);
			
		}
		transaction.onerror = function(){
			console.log('hubo un error');
		}



	}



	






})();