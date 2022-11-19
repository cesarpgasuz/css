/// variables
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const carrito = document.querySelector('#carrito');
const btnVaciarCarrito = document.querySelector('#vaciar-carrito');

let articulosCarrito = [];


//eventListeners
eventListeners();

function eventListeners(){

    document.addEventListener('DOMContentLoaded', () => {

        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

        carritoHTML();


    })

    listaCursos.addEventListener('click', agregarCurso);
    carrito.addEventListener('click', borrarCurso);
    btnVaciarCarrito.addEventListener('click', () => {

        articulosCarrito = [];
        console.log(articulosCarrito);
        localStorage.removeItem('carrito');
        limpiarHTML();

    })

}


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

        const idCurso = e.target.dataset.id;

        articulosCarrito = articulosCarrito.filter(curso => curso.id !== idCurso);

        console.log(articulosCarrito);

        carritoHTML();

    }

}

function leerDatosCurso(curso){


    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
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

    carritoHTML();

}


function carritoHTML(){

    limpiarHTML();

    articulosCarrito.forEach(curso => {

        const {imagen, titulo, precio, id, cantidad} = curso;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${imagen}" width="50px"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${id}">X</a></td>
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