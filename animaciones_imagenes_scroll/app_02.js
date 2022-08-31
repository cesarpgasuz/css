const imagenes = document.querySelectorAll('.image_animation');



const callback = (entries) => {

	entries.forEach(entry => {
		console.log(entry);
		if(entry.isIntersecting){
			console.log('si es visible')
			entry.target.classList.add('visible');
		}else{
			console.log('no es visible')
		}
	})


}



const options = {
	//root: null,
	//rootMargin: '0px',
	threshold: 0.75
}


const observador = new IntersectionObserver(callback, options);

imagenes.forEach(imagen => {
	observador.observe(imagen);
})