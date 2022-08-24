const imagenes = [...document.querySelectorAll('.image_animation')];


function cargarImagen(entradas, observador){

    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            console.log(entrada)
            entrada.target.classList.add('visible')
        }
    });

}

const opciones = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1,
}

const observador = new IntersectionObserver(cargarImagen, opciones);

imagenes.forEach(imagen => {
    observador.observe(imagen)
})