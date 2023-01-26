const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){

    const url = 'data/empleado.json';
    fetch(url)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(resultado => {
            console.log(resultado);
        })
}

// al ser un arrow function
// y pasarle solo un parametro se da por implicito el return
function obtenerDatos(){

    const url = 'data/empleado.json';
    fetch(url)
        .then(respuesta =>  respuesta.json())
        // .then(resultado => console.log(resultado))
        .then(resultado => mostrarHTML(resultado))
}


// se puede hacer destructuring directamente 👇
function mostrarHTML({empresa, id, nombre, trabajo}){

    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
        <p>${nombre}</p>
        <p>${id}</p>
        <p>${empresa}</p>
        <p>${trabajo}</p>
    `;

}