const imagenes = document.querySelectorAll('.image_animation');

const callback = entries => {

	entries.forEach(entry => {
		console.log(entry);

		if(entry.isIntersecting){
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