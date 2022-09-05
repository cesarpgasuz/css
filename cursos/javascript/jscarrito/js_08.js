///variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];




//eventlisteners
eventListeners();

function eventListeners(){

	listaCursos.addEventListener('click', agregarCurso);
	carrito.addEventListener('click', borrarCurso);

	

	document.addEventListener('DOMContentLoaded', () => {

		articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
	    mostrarCurso();
	})

	vaciarCarritoBtn.addEventListener('click', (e) => {
		e.preventDefault();
		articulosCarrito = [];

		console.log(articulosCarrito);
		limpiarHTML();
		localStorage.removeItem('carrito');
	})


}





//funciones

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
		
		const cursoId = e.target.getAttribute('data-id');

		articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

		console.log(articulosCarrito);

		mostrarCurso();

	}
}



function leerDatosCurso(curso){

	const infoCurso = {
		imagen: curso.querySelector('img').src,
		titulo: curso.querySelector('h4').textContent,
		precio: curso.querySelector('.precio').textContent,
		id: curso.querySelector('a').getAttribute('data-id'),
		cantidad: 1
	}


	const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);

	if(existe){
		const cursos = articulosCarrito.map(curso => {
			if(curso.id === infoCurso.id){
				curso.cantidad++;
				return curso;
			}else{
				return curso;
			}
		});
			
			articulosCarrito = [...cursos];

	}else{
		articulosCarrito = [...articulosCarrito, infoCurso];
	}


	

	mostrarCurso();

	console.log(articulosCarrito);

}


function mostrarCurso(){

	limpiarHTML();

	articulosCarrito.forEach(curso => {
		const row = document.createElement('tr');
		row.innerHTML = `
			<td><img src="${curso.imagen}" width="50px"></td>
			<td>${curso.titulo}</td>
			<td>${curso.precio}</td>
			<td>${curso.cantidad}</td>
			<td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>

		`;

		contenedorCarrito.appendChild(row);

	})


	sincronizarStorage();

}



function sincronizarStorage(){
	localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}


function limpiarHTML(){
	while(contenedorCarrito.firstChild){
		contenedorCarrito.removeChild(contenedorCarrito.firstChild);
	}
}