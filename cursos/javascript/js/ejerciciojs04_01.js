// creamos las variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


// cargamos los eventlisteners
cargarEventListeners();

function cargarEventListeners(){

    listaCursos.addEventListener('click', agregarCurso);


}

//creamos la funcion para agregar el curso

function agregarCurso(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;

        leerDatosCurso(cursoSeleccionado);
    }
   



}

//leemos los datos del curso seleccionado y creamos un objeto nuevo con el curso actual

function leerDatosCurso(curso){

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //comprobamos si ya existe el curso en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);
    if(existe){
        //actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
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


// agregamos al html y arreglo creado con los cursos

function carritoHTML(){


    limpiarHTML();

    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${curso.imagen}" alt="${curso.titulo}" width="50"></td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td><a href="#" class="borrar-curso" data="${curso.id}">X</a></td>
        
        `;

        contenedorCarrito.appendChild(row);



    })

}

//limpiamos el html
function limpiarHTML(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }

}