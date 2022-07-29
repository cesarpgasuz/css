//creamos las variables
const carrito = document.querySelector('#carrito ');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const btnVaciarCarrito =  document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


//cargamos los eventlisteners
eventlisteners();

function eventlisteners(){

    listaCursos.addEventListener('click', agregarCurso);

    carrito.addEventListener('click', borrarCurso);

    btnVaciarCarrito.addEventListener('click', () => {
        articulosCarrito = [];
        console.log(articulosCarrito)
        limpiarHTML();
    })

}



//funcion para agregar los cursos
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
       
        const cursoSeleccionado = e.target.parentElement.parentElement;

        leerDatosCurso(cursoSeleccionado);

    }
}

//funcion para borrar un curso
function borrarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso')){
       
        const cursoId = e.target.getAttribute('data-id');

        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);
        console.log(articulosCarrito)
        carritoHTML();

    }
}


//funcion para leer los datos del curso seleccionado
function leerDatosCurso(curso){

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //actualizamos la cnatidad de cursos
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



    
    console.log(articulosCarrito);

    carritoHTML();

}


//mostrar html
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


//limpiar el html
function limpiarHTML(){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}