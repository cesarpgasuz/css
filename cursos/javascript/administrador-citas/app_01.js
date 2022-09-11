//variables
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');
 
const citaObj = {
	mascota: '',
	propietario: '',
	telefono: '',
	fecha: '',
	hora: '',
	sintomas: ''
}

//eventListeners
eventListeners();

function eventListeners(){

	mascotaInput.addEventListener('input', datosCita);
	propietarioInput.addEventListener('input', datosCita);
	telefonoInput.addEventListener('input', datosCita);
	fechaInput.addEventListener('input', datosCita);
	horaInput.addEventListener('input', datosCita);
	sintomasInput.addEventListener('input', datosCita);

	formulario.addEventListener('submit', nuevaCita);

}

//classes
class Citas{
	constructor(){
		this.citas = [];
	}
	agregarCita(cita){
		this.citas = [...this.citas, cita];
	}
	eliminarCitas(id){
		this.citas = this.citas.filter(cita => cita.id !== id);
	}

}

class UI{
	mostrarAlerta(mensaje, tipo){
		const divMensaje = document.createElement('div');

		if(tipo === 'error'){
			divMensaje.classList.add('mensaje__error');
		}else{
			divMensaje.classList.add('mensaje__success');
		}

		divMensaje.textContent = mensaje;

		document.querySelector('.agregar-cita').appendChild(divMensaje);

		setTimeout(() => {
			divMensaje.remove();
		}, 2500)


	}

	mostrarCitas({citas}){

		this.limpiarHTML();

		citas.forEach(cita => {

			const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

			const divCita = document.createElement('div');
			divCita.classList.add('div__cita');
			divCita.dataset.id = id;


			const mascotaTexto = document.createElement('h3');
			mascotaTexto.textContent = mascota;

			const propietarioTexto = document.createElement('p');
			propietarioTexto.innerHTML =`<strong>Propietario:</strong> ${propietario}`;

			const telefonoTexto = document.createElement('p');
			telefonoTexto.innerHTML =`<strong>Telefono:</strong> ${telefono}`;

			const fechaTexto = document.createElement('p');
			fechaTexto.innerHTML =`<strong>Fecha:</strong> ${fecha}`;

			const horaTexto = document.createElement('p');
			horaTexto.innerHTML =`<strong>Propietario:</strong> ${hora}`;

			const sintomasTexto = document.createElement('p');
			sintomasTexto.innerHTML =`<strong>Propietario:</strong> ${sintomas}`;

			const btnEliminar = document.createElement('button');
			btnEliminar.textContent = 'Eliminar X';
			btnEliminar.classList.add('btn__eliminar');
			btnEliminar.onclick = () => eliminarCita(id);

			const btnEditar = document.createElement('button');
			btnEditar.textContent = 'Editar';
			btnEditar.classList.add('btn__editar');



			//elementos
			divCita.appendChild(mascotaTexto);
			divCita.appendChild(propietarioTexto);
			divCita.appendChild(telefonoTexto);
			divCita.appendChild(fechaTexto);
			divCita.appendChild(horaTexto);
			divCita.appendChild(sintomasTexto);
			divCita.appendChild(btnEliminar);
			divCita.appendChild(btnEditar);


			//contenedor general
			contenedorCitas.appendChild(divCita);




		})



	}


	limpiarHTML(){
		while(contenedorCitas.firstChild){
			contenedorCitas.removeChild(contenedorCitas.firstChild);
		}
	}


}

//instanciamos las clases
const administrarCitas = new Citas();
const ui = new UI();



//funciones
function datosCita(e){

	citaObj[e.target.name] = e.target.value;

}

function nuevaCita(e){
	e.preventDefault();

	// realizamos destructuring
	const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;


	//validamos
	if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){
		ui.mostrarAlerta('Todos los campos son obligatorios', 'error');
		return;
	}


	//generamos un id
	citaObj.id = Date.now();

	//agregamos una cita
	administrarCitas.agregarCita({...citaObj});

	//reniciamos el objeto
	reiniciarObjeto();


	//agreamos la cita al html

	ui.mostrarCitas(administrarCitas);


	//reiniciamos el formulario
	formulario.reset();

}


function reiniciarObjeto(){

	citaObj.mascota = '';
	citaObj.propietario = '';
	citaObj.telefono = '';
	citaObj.fecha = '';
	citaObj.hora = '';
	citaObj.sintomas = '';

}


function eliminarCita(id){
	//eliminar
	administrarCitas.eliminarCitas(id);

	//mostrar alerta
	ui.mostrarAlerta('Registro eliminado correctamente');

	//reiniciar 
	ui.mostrarCitas(administrarCitas);



}