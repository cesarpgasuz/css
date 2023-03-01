//// variables
const listaCursos = document.querySelector('#lista-cursos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const carrito = document.querySelector('#carrito');
const listaCarrito = document.querySelector('#lista-carrito tbody');
const limpiarStorage = document.querySelector('#limpiar-storage');

let articulosCarrito = [];


/// eventListeners


document.addEventListener('DOMContentLoaded', function(){

	listaCursos.addEventListener('click', agregarCurso);

	limpiarStorage.addEventListener('click', function(){
		localStorage.clear();
	});

	carrito.addEventListener('click', borrarCurso);

	vaciarCarritoBtn.addEventListener('click', function(){
		articulosCarrito = [];
		console.log(articulosCarrito);
		localStorage.removeItem('carrito');
		limpiarHTML();
	})


	articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
	mostrarHTML();

});


/// funciones
function agregarCurso(e){
	e.preventDefault();

	if(e.target.classList.contains('agregar-carrito')){
		const cursoSeleccionado = e.target.parentElement.parentElement;

		leerDatosCurso(cursoSeleccionado);
	}
}

function borrarCurso(e){
	e.preventDefault();

	if(e.target.classList.contains('borrar-curso')){
		const cursoId = e.target.dataset.id;
		articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
		console.log(articulosCarrito);
		mostrarHTML();
	}
}

function leerDatosCurso(curso){

	const infoCurso = {
		titulo: curso.querySelector('h4').textContent,
		imagen: curso.querySelector('img').src,
		precio: curso.querySelector('.precio').textContent,
		id: curso.querySelector('a').dataset.id,
		cantidad: 1
	}



	const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);

	if(existe){

		const cursos = articulosCarrito.map(curso => {

			if(curso.id === infoCurso.id){
				curso.cantidad ++;
				return curso;
			}else{
				return curso;
			}

		})

		articulosCarrito = [...cursos];



	}else{
		
		articulosCarrito = [...articulosCarrito, infoCurso];

	}


	
	console.log(articulosCarrito);
	mostrarHTML();

}


function mostrarHTML(){

	limpiarHTML();

	articulosCarrito.forEach(curso => {

		const {titulo, imagen, precio, cantidad, id} = curso;

		const row = document.createElement('tr');

		row.innerHTML = `

			<td><img src="${imagen}" width="50px" /></td>
			<td>${titulo}</td>
			<td>${precio}</td>
			<td>${cantidad}</td>
			<td><a href="#" class="borrar-curso" data-id="${id}">borrar curso</a></td>

		`
		listaCarrito.appendChild(row);


	})

	sincronizarStorage();

}


function sincronizarStorage(){

	localStorage.setItem('carrito', JSON.stringify(articulosCarrito));

}


function limpiarHTML(){
	while(listaCarrito.firstChild){
		listaCarrito.removeChild(listaCarrito.firstChild);
	}
}



