/// variables

const guardarClienteBtn = document.querySelector('#guardar-cliente');

let cliente = {
    mesa: '',
    hora: '',
    pedido: []
}

const categorias = {
    1: 'Comida',
    2: 'Bebidas',
    3: 'Postres'
}

/// eventListeners

document.addEventListener('DOMContentLoaded', function(){
    guardarClienteBtn.addEventListener('click', guardarCliente);
})


/// funciones
function guardarCliente(){

    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    const camposVacios = [mesa, hora].some(campo => campo === '');

    if(camposVacios){

        const existeAlerta = document.querySelector('p.alerta');

        if(!existeAlerta){
            const mensajeAlerta = document.createElement('P');
            mensajeAlerta.classList.add('mensaje__error', 'alerta');
            mensajeAlerta.textContent = 'Ambos campos son obligatorios';
            document.querySelector('.modal-body form').appendChild(mensajeAlerta);

            setTimeout(() => {
                mensajeAlerta.remove();
            }, 3000);
        }
        
        return;
    }


    // agregamos al objeto
    cliente = {...cliente, mesa, hora}

    //creamos una instancia para eliminar el modal
    const formularioModal = document.querySelector('#formulario');
    const modal = bootstrap.Modal.getInstance(formularioModal);
    modal.hide();

    /// mostramos la secciones ocultas
    mostrarSecciones();
    //obtenemos los platillos
    obtenerPlatillos();

}


function mostrarSecciones(){

    const seccionesOcultas = document.querySelectorAll('.d-none');
    seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none'));
}

function obtenerPlatillos(){

    const url = 'http://localhost:4000/platillos';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarPlatillos(resultado))
        .catch(error => console.log(error))

}

function mostrarPlatillos(platillos){
    // console.log(platillos)

    const contenedor = document.querySelector('#platillos .contenido');

    platillos.forEach(platillo => {

        const {categoria, id, nombre, precio} = platillo;

        const platilloDiv = document.createElement('DIV');
        platilloDiv.classList.add('platillo__div');

        const platilloTitle = document.createElement('H3');
        platilloTitle.textContent = nombre;

        const platilloCategoria = document.createElement('P');
        platilloCategoria.classList.add('platillo__categoria');
        platilloCategoria.textContent = categorias[categoria];

        const platilloPrecio = document.createElement('P');
        platilloPrecio.classList.add('platillo__precio');
        platilloPrecio.textContent = `Precio: $${precio}`;

        // input para las cantidades
        const inputCantidad = document.createElement('INPUT');
        inputCantidad.type = 'number';
        inputCantidad.min = 0;
        inputCantidad.value = 0;
        inputCantidad.id = `platillo-${id}`;
        inputCantidad.onchange = function(){
            const cantidad = parseInt(inputCantidad.value);
            agregarPedido({...platillo, cantidad});
        }


        platilloDiv.appendChild(platilloTitle);
        platilloDiv.appendChild(platilloCategoria);
        platilloDiv.appendChild(platilloPrecio);
        platilloDiv.appendChild(inputCantidad);

        contenedor.appendChild(platilloDiv);

    });
    

}


function agregarPedido(producto){

    // console.log(producto);

    let {pedido} = cliente;

    if(producto.cantidad > 0){

        if(pedido.some(articulo => articulo.id === producto.id)){

            const pedidoActualizado = pedido.map(articulo => {
                if(articulo.id === producto.id){
                    articulo.cantidad = producto.cantidad;
                }
                return articulo;
            })

            cliente.pedido = [...pedidoActualizado];


        }else{
            cliente.pedido = [...pedido, producto];
        }

    }else{

            const resultado = pedido.filter(articulo => articulo.id !== producto.id);
            cliente.pedido = [...resultado];




    }


    // console.log(cliente.pedido);
    //limpiamos el html previo
    limpiarHTML();

    if(cliente.pedido.length){
       mostrarResumen(); 
    }else{
        const resumenDiv = document.querySelector('#resumen .contenido');
        const pedidosMensaje = document.createElement('P');
        pedidosMensaje.classList.add('text-center');
        pedidosMensaje.textContent = 'Añade los elementos del pedido';
        resumenDiv.appendChild(pedidosMensaje);
    }
    


}


function mostrarResumen(){

    const {mesa, hora, pedido} = cliente;

    const resumenDiv = document.querySelector('#resumen .contenido');

    const resumenCol = document.createElement('DIV');
    resumenCol.classList.add('col-md-6');

    const mesaResumen = document.createElement('H3');
    mesaResumen.textContent = `Mesa: ${mesa}`;

    const horaResumen = document.createElement('P');
    horaResumen.textContent = `Hora: ${hora}`;

    const heading = document.createElement('H3');
    heading.textContent = 'Platillos Consumidos';

    // iteramos sobre pedido y los agregamos al html
    const pedidoUl = document.createElement('UL');
    pedidoUl.classList.add('pedido__ul');

    pedido.forEach(producto => {

        const {cantidad, id, nombre, precio} = producto;

        const pedidoLi = document.createElement('LI');
        pedidoLi.classList.add('pedido__li');
        
        const pedidoNombre = document.createElement('H4');
        pedidoNombre.textContent = nombre;

        const pedidoPrecio = document.createElement('P');
        pedidoPrecio.textContent = `Precio: ${precio}`;

        const pedidoCantidad = document.createElement('P');
        pedidoCantidad.textContent = `Cantidad: ${cantidad}`;

        const subtotal = calcularSubtotal(cantidad, precio);
        const pedidoSubtotal = document.createElement('P');
        pedidoSubtotal.textContent = `Subtotal: $${subtotal}`;

        //// boton para eliminar desde el resumen
        const borrarPedidoBtn = document.createElement('BUTTON');
        borrarPedidoBtn.classList.add('btn', 'btn-danger');
        borrarPedidoBtn.textContent = 'Borrar Pedido';
        borrarPedidoBtn.onclick = function(){

            borrarPedido(id)
        }


        pedidoLi.appendChild(pedidoNombre);
        pedidoLi.appendChild(pedidoPrecio);
        pedidoLi.appendChild(pedidoCantidad);
        pedidoLi.appendChild(pedidoSubtotal);
        pedidoLi.appendChild(borrarPedidoBtn);

        pedidoUl.appendChild(pedidoLi);

    });



    resumenCol.appendChild(mesaResumen);
    resumenCol.appendChild(horaResumen);
    resumenCol.appendChild(heading);
    resumenCol.appendChild(pedidoUl);

    resumenDiv.appendChild(resumenCol);



    mostrarPropinas()
}

function limpiarHTML(){

    const resumenDiv = document.querySelector('#resumen .contenido');

    while(resumenDiv.firstChild){
        resumenDiv.removeChild(resumenDiv.firstChild);
    }

}

const calcularSubtotal = (cantidad, precio) => cantidad * precio;

function borrarPedido(id){

    const {pedido} = cliente;

    const resultado = pedido.filter(articulo => articulo.id !== id);
    cliente.pedido = [...resultado];

    console.log(cliente.pedido);
    //limpiamos el html previo;
    limpiarHTML();

    if(cliente.pedido.length){
        mostrarResumen(); 
     }else{
        const resumenDiv = document.querySelector('#resumen .contenido');
        const pedidosMensaje = document.createElement('P');
        pedidosMensaje.classList.add('text-center');
        pedidosMensaje.textContent = 'Añade los elementos del pedido';
        resumenDiv.appendChild(pedidosMensaje);

     }

     const productoEliminado = `#platillo-${id}`;
     const inputEliminado = document.querySelector(productoEliminado);
     inputEliminado.value = 0;

}

function mostrarPropinas(){

    const resumenDiv = document.querySelector('#resumen .contenido');

    /// div contenedor de radios
    const resumenCol = document.createElement('DIV');
    resumenCol.classList.add('col-md-6');

    const resumenRadios = document.createElement('DIV');
    resumenRadios.classList.add('resumen__radios');

    // radio 10%
    const propina10 = document.createElement('INPUT');
    propina10.type = 'radio';
    propina10.value = '10';
    propina10.name = 'propina';
    propina10.onclick = calcularPropina;

    const propina10Label = document.createElement('LABEL');
    propina10Label.textContent = '10%';

    const propina10Div = document.createElement('DIV');

    propina10Div.appendChild(propina10);
    propina10Div.appendChild(propina10Label);


    // radio 25%
    const propina25 = document.createElement('INPUT');
    propina25.type = 'radio';
    propina25.value = '25';
    propina25.name = 'propina';
    propina25.onclick = calcularPropina;

    const propina25Label = document.createElement('LABEL');
    propina25Label.textContent = '25%';

    const propina25Div = document.createElement('DIV');

    propina25Div.appendChild(propina25);
    propina25Div.appendChild(propina25Label);

     // radio 50%
     const propina50 = document.createElement('INPUT');
     propina50.type = 'radio';
     propina50.value = '50';
     propina50.name = 'propina';
     propina50.onclick = calcularPropina;
 
     const propina50Label = document.createElement('LABEL');
     propina50Label.textContent = '50%';
 
     const propina50Div = document.createElement('DIV');
 
     propina50Div.appendChild(propina50);
     propina50Div.appendChild(propina50Label);


    const heading = document.createElement('H3');
    heading.textContent = 'Propina';

    resumenRadios.appendChild(heading);
    resumenRadios.appendChild(propina10Div);
    resumenRadios.appendChild(propina25Div);
    resumenRadios.appendChild(propina50Div);


    resumenCol.appendChild(resumenRadios);

    resumenDiv.appendChild(resumenCol);

    


}


function calcularPropina(){

    let {pedido} = cliente;

    let subtotal = 0;

    pedido.forEach(articulo => {
         subtotal += articulo.cantidad * articulo.precio;
    })

    const propinaSeleccionada = document.querySelector('[name="propina"]:checked').value;

    const propina = ((subtotal * parseInt(propinaSeleccionada)) / 100);

    const total = subtotal + propina;

    mostrarPropinasHTML(subtotal, propina, total);
}

function mostrarPropinasHTML(subtotal, propina, total){

    const resumenDiv = document.querySelector('#resumen .contenido > div:nth-child(2)');

    const resumenTotales = document.createElement('DIV');
    resumenTotales.classList.add('resumen__totales');

    const resumenTotalesDiv = document.createElement('DIV');

    const resumenSubtotal = document.createElement('P');
    resumenSubtotal.textContent = `Subtotal: $${subtotal}`;

    const resumenPropina = document.createElement('P');
    resumenPropina.textContent = `Propina: $${propina}`;

    const resumenTotal = document.createElement('P');
    resumenTotal.textContent = `Total: $${total}`;

    const ttotales = document.querySelector('.resumen__totales');

    if(ttotales){
        ttotales.remove();
    }

    resumenTotalesDiv.appendChild(resumenSubtotal);
    resumenTotalesDiv.appendChild(resumenPropina);
    resumenTotalesDiv.appendChild(resumenTotal);

    resumenTotales.appendChild(resumenTotalesDiv);

    resumenDiv.appendChild(resumenTotales);

}