(function(){
	//variables
	let DB;
	const formulario = document.querySelector('#formulario');


	//eventListeners

	document.addEventListener('DOMContentLoaded', () => {

		conectarDB();

		formulario.addEventListener('submit', nuevoCliente);

	})


	//funciones
	function conectarDB(){

		const abrirConexion = window.indexedDB.open('crm', 1);
		abrirConexion.onerror = function(){
			console.log('hubo un error');
		}
		abrirConexion.onsuccess = function() {
			DB = abrirConexion.result;
		}

	}

	function nuevoCliente(e){
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
			id: Date.now(),
		}


		const transaction = DB.transaction(['crm'], 'readwrite');
		const objectStore = transaction.objectStore('crm');

		objectStore.add(cliente);

		transaction.onerror = function(){
			console.log('hubo un error');
		}
		transaction.oncomplete = function(){
			mostrarAlerta('Cliente Agregado');
			formulario.reset();

			setTimeout(() => {
				window.location.href = 'index.html';
			},1000)

		}





	}



	


})();