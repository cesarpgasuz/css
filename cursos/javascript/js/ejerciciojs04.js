//variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];


cargarEventListeners();

function cargarEventListeners(){
    //evento para agregar al carrito al presionar el boton de curso
    listaCursos.addEventListener('click', agregarCurso);

    //elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; //reseteamos el arreglo

        limpiarHTML(); //eliminamos el html
    })

}

function agregarCurso(e){
    e.preventDefault();


    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
       
        leerDatosCurso(cursoSeleccionado);
    }
    
}


//elimina curso del carrito
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        //elimina del arreglo de articuloscarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId );


        carritoHTML(); // iterar sobre el carrito y mostrar su html
    }
}












//lee el contenido del html al que le dimos click y extrae la informacion

function leerDatosCurso(curso){
    // console.log(curso) 


    //crear un objeto con el contenido del curso actual

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id );
    if(existe){
        //actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id ){
                curso.cantidad++;
                return curso; // retorna el objeto actualizado
            }else{
                return curso; //retorna los objetos que no son los duplicados
            }
        });
        articulosCarrito = [...cursos];

    }else{
         //agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }


   
    

    console.log(articulosCarrito);

    carritoHTML();

}


//muestra el carrito de compras en el html

function carritoHTML() {

    //limpiar html

    limpiarHTML();

    //recorre el carrito y genera html

    articulosCarrito.forEach( curso => {
       //podemos aplicar destructuring
       // const {imagen, titulo, precio, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${curso.imagen}" width="50px"></td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>
        
        `;


        //agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row);

    })

}


//elimina los curso del tbody

function limpiarHTML(){
    //forma lenta
    // contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}