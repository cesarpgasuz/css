//variables
const resultado = document.querySelector('#resultado');
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const max = new Date().getFullYear();
const min = max - 10;

const datosBusqueda = {
	marca: '',
	year: '',
	minimo: '',
	maximo: '',
	puertas: '',
	transmision: '',
	color: ''
}


//eventListeners

document.addEventListener('DOMContentLoaded', () => {

	mostrarAutos(autos);
	llenarSelect();

})

marca.addEventListener('change', (e) => {
	datosBusqueda.marca = e.target.value;
	filtrarAuto();
})
year.addEventListener('change', (e) => {
	datosBusqueda.year = parseInt(e.target.value);
	filtrarAuto();
})
minimo.addEventListener('change', (e) => {
	datosBusqueda.minimo = e.target.value;
	filtrarAuto();
})
maximo.addEventListener('change', (e) => {
	datosBusqueda.maximo = e.target.value;
	filtrarAuto();
})
puertas.addEventListener('change', (e) => {
	datosBusqueda.puertas = parseInt(e.target.value);
	filtrarAuto();
})
transmision.addEventListener('change', (e) => {
	datosBusqueda.transmision = e.target.value;
	filtrarAuto();
})
color.addEventListener('change', (e) => {
	datosBusqueda.color = e.target.value;
	filtrarAuto();
	console.log(datosBusqueda);
})


//funciones
function mostrarAutos(autos){

	limpiarHTML();

	autos.forEach(auto => {

		const {marca, modelo, year, precio, puertas, color, transmision} = auto;

		const autoHTML = document.createElement('p');
		autoHTML.innerHTML = `
			${marca} -- ${modelo} -- ${year} <strong>Precio:</strong> ${precio} -- ${puertas} Puertas -- Color ${color} -- Transmision ${transmision}
		`;

		resultado.appendChild(autoHTML);


	})



}

function llenarSelect(){

	for(let i = max; i >= min; i--){
		const opciones = document.createElement('option');
		opciones.textContent = i;
		opciones.value = i;

		year.appendChild(opciones);
	}


}

function filtrarAuto(){

	const resultados = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
	
	if(resultados.length){
		mostrarAutos(resultados);
	}else{
		noResultados();
	}


}



 function noResultados(){

 	limpiarHTML();

 	const mensajeError = document.createElement('p');
 	mensajeError.style.color = 'red';
 	mensajeError.textContent = 'No se encontraron autos con esos criterios, intenta con otras opciones';
 	resultado.appendChild(mensajeError);

 }

function limpiarHTML(){
	while(resultado.firstChild){
		resultado.removeChild(resultado.firstChild);
	}
}


function filtrarMarca(auto){
	if(datosBusqueda.marca){
		return auto.marca === datosBusqueda.marca;
	}
	return auto;
}
function filtrarYear(auto){
	if(datosBusqueda.year){
		return auto.year === datosBusqueda.year;
	}
	return auto;
}
function filtrarMinimo(auto){
	if(datosBusqueda.minimo){
		return auto.precio >= datosBusqueda.minimo;
	}
	return auto;
}
function filtrarMaximo(auto){
	if(datosBusqueda.maximo){
		return auto.precio <= datosBusqueda.maximo;
	}
	return auto;
}
function filtrarPuertas(auto){
	if(datosBusqueda.puertas){
		return auto.puertas === datosBusqueda.puertas;
	}
	return auto;
}
function filtrarTransmision(auto){
	if(datosBusqueda.transmision){
		return auto.transmision === datosBusqueda.transmision;
	}
	return auto;
}
function filtrarColor(auto){
	if(datosBusqueda.color){
		return auto.color === datosBusqueda.color;
	}
	return auto;
}