/// variables
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

let articulosCarrito = [];

/// eventListeners
cargarEventListeners();

function cargarEventListeners(){

    listaCursos.addEventListener('click', agregarCurso);

    carrito.addEventListener('click', eliminarCurso);

    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];

        limpiarHTML();
        
        console.log(articulosCarrito);
    })
}



// funciones
function agregarCurso(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }

}

function eliminarCurso(e){

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
        titulo: curso.querySelector('h4').textContent,
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
        });

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

    });

}


function limpiarHTML(){

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }

}