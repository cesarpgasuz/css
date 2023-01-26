const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

//para hacerlo de forma automatica
document.addEventListener('DOMContentLoaded', obtenerDatos);

function obtenerDatos(){

    const url = 'data/empleados.json';

    fetch(url)
        .then(respuesta => respuesta.json())
        // .then(resultado => console.log(resultado))
        .then(resultado => mostrarHTML(resultado))

}

function mostrarHTML(empleados){
    const contenido = document.querySelector('.contenido');

    let html = '';

    empleados.forEach(empleado => {
        const {id, nombre, empresa, trabajo} = empleado;

        html += `
            <p>${nombre}</p>
            <p>${id}</p>
            <p>${empresa}</p>
            <p>${trabajo}</p>
        `;
        
    });

    contenido.innerHTML = html;
}