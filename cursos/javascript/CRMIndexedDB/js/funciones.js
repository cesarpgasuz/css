/////////////////funcion para conectarse a la base de datos

function conectarDB(){
    //se crea la base de datos, y si ya se ha creado se conecta
    const abrirConexion = window.indexedDB.open('crm', 1);
    //comprobamos si hay erroes
    abrirConexion.onerror = function(){
        console.log('hubo un error');
    }
    abrirConexion.onsuccess = function(){
        console.log('conectado a la base de datos');

        DB = abrirConexion.result;
    }


}

////////////funcion para mostrar las alertas
function mostrarAlerta(mensaje, tipo){

    const divMensaje = document.createElement('div');
    divMensaje.classList.add('alerta');

    const alerta = document.querySelector('.alerta');
    console.log(alerta)

    if(!alerta){

         if(tipo === 'error'){
                divMensaje.classList.add('mensaje__error');
            }else{
                divMensaje.classList.add('mensaje__success');
            }
            divMensaje.textContent = mensaje;

            formulario.appendChild(divMensaje);

            setTimeout(() => {
                divMensaje.remove();

            }, 2000)


    }

   

}