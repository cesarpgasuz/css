const imagenes = document.querySelectorAll('.image_animation');


const callback = (entries, observador) => {

	entries.forEach(entry => {



		if(entry.isIntersecting){
			entry.target.classList.add('active');
			console.log(entry)
		}

	})

}



const options = {
	//root: null,
	//rootMargin: '0px',
	threshold: 1
}

const observador = new IntersectionObserver(callback, options);

imagenes.forEach(imagen => {
	observador.observe(imagen);
})