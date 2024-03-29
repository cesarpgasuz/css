
const imagenes = document.querySelectorAll('.image_animation');


const callback = (entries, observador) => {

	entries.forEach(entry => {
		if(entry.isIntersecting){
			console.log(entry)
			entry.target.classList.add('active');
		}
	})

}



const options = {
	threshold: 1
}

const observador = new IntersectionObserver(callback, options);

imagenes.forEach(imagen => {
	observador.observe(imagen);
})