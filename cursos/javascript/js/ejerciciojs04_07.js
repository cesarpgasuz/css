//creamos las variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


//cargamos los event listeners
cargarEventListeners();

function cargarEventListeners(){

    listaCursos.addEventListener('click', agregarCurso);
    carrito.addEventListener('click', borrarCurso);
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        console.log(articulosCarrito)
        limpiarHTML();

    });

}



//creamos la funcion para agregar el curso
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
       const cursoSeleccionado = e.target.parentElement.parentElement;
                                          
        leerDatosCurso(cursoSeleccionado);

    }

}

//eliminar curso del carrito
function borrarCurso(e){
   if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);
        console.log(articulosCarrito)
        carritoHTML();

   }
}





//creamos la funcion para leer los datos del curso seleccionado
function leerDatosCurso(curso){

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //actualizar la cantidad de cursos
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);

    if(existe){
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


    
    console.log(articulosCarrito)

    carritoHTML();

}



//mostramos el html 
function carritoHTML(){

    limpiarHTML();

    articulosCarrito.forEach( curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${curso.imagen}" width="50"></td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>
        `;

        contenedorCarrito.appendChild(row);

    })



}



//limpiarmos el html
function limpiarHTML(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}