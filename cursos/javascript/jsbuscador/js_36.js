/// variables
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

const objBusqueda = {
	marca: '',
	year: '',
	minimo: '',
	maximo: '',
	puertas: '',
	transmision: '',
	color: ''
}


/// eventListeners

document.addEventListener('DOMContentLoaded', () => {

	mostrarAutos(autos);
	llenarSelect();
});

marca.addEventListener('change', (e) => {
	objBusqueda.marca = e.target.value;
	filtrarAuto();
});
year.addEventListener('change', (e) => {
	objBusqueda.year = parseInt(e.target.value);
	filtrarAuto();
});
minimo.addEventListener('change', (e) => {
	objBusqueda.minimo = e.target.value;
	filtrarAuto();
});
maximo.addEventListener('change', (e) => {
	objBusqueda.maximo = e.target.value;
	filtrarAuto();
});
puertas.addEventListener('change', (e) => {
	objBusqueda.puertas = parseInt(e.target.value);
	filtrarAuto();
});
transmision.addEventListener('change', (e) => {
	objBusqueda.transmision = e.target.value;
	filtrarAuto();
});
color.addEventListener('change', (e) => {
	objBusqueda.color = e.target.value;
	filtrarAuto();
});






/// funciones


function mostrarAutos(autos){

	limpiarHTML();

	autos.forEach(auto => {

		const {marca, modelo, year, precio, puertas, color, transmision} = auto;
		const autoHTML = document.createElement('P');
		autoHTML.innerHTML = `${marca} -- Modelo: <strong>${modelo}</strong> -- <strong>${year}</strong> -- Precio: <strong>$${precio}</strong> -- <strong>${puertas}</strong> Puertas -- Color: <strong>${color}</strong> -- Transmision: <strong>${transmision}</strong>`;
		resultado.appendChild(autoHTML);

	})
}

function llenarSelect(){

	for(let i = max; i >= min; i--){

		const option = document.createElement('OPTION');
		option.value = i;
		option.textContent = i;
		year.appendChild(option);
	}
}

function filtrarAuto(){

	const resultados = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
	
	if(resultados.length){
		mostrarAutos(resultados);
	}else{
		noAutos();
	}

}

function noAutos(){

	limpiarHTML();

	const noAutos = document.createElement('P');
	noAutos.style.color = 'red';
	noAutos.textContent = 'No se encontrar autos con esos terminos, intenta con otras opciones';
	resultado.appendChild(noAutos);
}

function limpiarHTML(){
	while(resultado.firstChild){
		resultado.removeChild(resultado.firstChild);
	}
}


function filtrarMarca(auto){
	if(objBusqueda.marca){
		return objBusqueda.marca === auto.marca;
	}
	return auto;
}
function filtrarYear(auto){
	if(objBusqueda.year){
		return objBusqueda.year === auto.year;
	}
	return auto;
}
function filtrarMinimo(auto){
	if(objBusqueda.minimo){
		return objBusqueda.minimo <= auto.precio;
	}
	return auto;
}
function filtrarMaximo(auto){
	if(objBusqueda.maximo){
		return objBusqueda.maximo >= auto.precio;
	}
	return auto;
}
function filtrarPuertas(auto){
	if(objBusqueda.puertas){
		return objBusqueda.puertas === auto.puertas;
	}
	return auto;
}
function filtrarTransmision(auto){
	if(objBusqueda.transmision){
		return objBusqueda.transmision === auto.transmision;
	}
	return auto;
}
function filtrarColor(auto){
	if(objBusqueda.color){
		return objBusqueda.color === auto.color;
	}
	return auto;
}

