//variables
const listaCursos = document.querySelector('#lista-cursos');
const carrito = document.querySelector('#carrito');
const listaCarrito = document.querySelector('#lista-carrito');
const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

//eventListeners
eventListeners();

function eventListeners(){

	listaCursos.addEventListener('click', agregarCurso);
	carrito.addEventListener('click', borrarCurso);
	btnVaciarCarrito.addEventListener('click', () => {

		articulosCarrito = [];
		console.log(articulosCarrito);
		limpiarHTML();

		localStorage.removeItem('carrito');
	});

	document.addEventListener('DOMContentLoaded', () => {

		articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

		carritoHTML();

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

		const cursoId = e.target.dataset.id;
		
		articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

		console.log(articulosCarrito);

		carritoHTML();

	}


}



function leerDatosCurso(curso){

	const infoCurso = {
		imagen: curso.querySelector('img').src,
		nombre: curso.querySelector('h4').textContent,
		precio: curso.querySelector('.precio').textContent,
		id: curso.querySelector('a').dataset.id,
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
		})

		articulosCarrito = [...cursos];

	}else{

		articulosCarrito = [...articulosCarrito, infoCurso];
	}




	

	console.log(articulosCarrito);

	carritoHTML();

}


function carritoHTML(){

	limpiarHTML();

	articulosCarrito.forEach(curso => {

		const {imagen, nombre, precio, cantidad, id} = curso;

		const row = document.createElement('tr');
		row.innerHTML = `
			<td><img src="${imagen}" width="50px"></td>
			<td>${nombre}</td>
			<td>${precio}</td>
			<td>${cantidad}</td>
			<td><a href="#" data-id="${id}" class="borrar-curso">Eliminar</a></td>
		`;

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