const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){

    const url = 'data/datos.txt';

    fetch(url)
        .then(respuesta => {
            console.log(respuesta); //Response {type: 'basic', url: 'http://127.0.0.1:5500/cursos/fetch/data/datos.txt', 
                                    //redirected: false, status: 200, ok: true, …}
            console.log(respuesta.status);     // 200
            console.log(respuesta.statusText); // OK
            console.log(respuesta.url);        // http://127.0.0.1:5500/cursos/fetch/data/datos.txt
            console.log(respuesta.type);       // basic

            return respuesta.text()
        })
        .then( datos => {        // datos viene del return
            console.log(datos);  // Informacion desde un archivo .txt
        })
        .catch(error => {
            console.log(error);
        })

}