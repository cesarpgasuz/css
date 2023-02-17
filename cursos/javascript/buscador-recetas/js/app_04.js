function iniciarApp(){

    const resultado = document.querySelector('#resultado');
    const categoriasSelect = document.querySelector('#categorias');
    const modal = new bootstrap.Modal('#modal');

    const favoritosDiv = document.querySelector('.favoritos');

    if(categoriasSelect){
        categoriasSelect.addEventListener('change', seleccionarCategoria);
        obtenerCategorias();
    }

    if(favoritosDiv){
        obtenerFavoritos();
    }

    function obtenerCategorias(){

        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarCategorias(resultado.categories))
    }

    function mostrarCategorias(categorias = []){

        categorias.forEach(categoria => {
            const {strCategory} = categoria;

            const option = document.createElement('OPTION');
            option.value = strCategory;
            option.textContent = strCategory;

            categoriasSelect.appendChild(option);

        });
    }

    function seleccionarCategoria(e){
        const categoria = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarRecetas(resultado.meals));
    }

    function mostrarRecetas(recetas = []){

        limpiarHTML(resultado);

        const heading = document.createElement('H2');
        heading.classList.add('text-center');
        heading.textContent = recetas.length ? 'Resultados' : 'No se encontraron Recetas';
        resultado.appendChild(heading);

        recetas.forEach(receta => {
            const{idMeal, strMeal, strMealThumb} = receta;

            const recetaDiv = document.createElement('DIV');
            recetaDiv.classList.add('col-md-4', 'col-sm-4');

            const recetaImg = document.createElement('IMG');
            recetaImg.classList.add('img-fluid');
            recetaImg.src = strMealThumb ?? receta.imagen;
            recetaImg.alt = `Receta de ${strMeal ?? receta.titulo}`;

            const recetaTitle = document.createElement('H3');
            recetaTitle.textContent = strMeal ?? receta.titulo;

            const verRecetaBtn = document.createElement('BUTTON');
            verRecetaBtn.classList.add('btn', 'btn-danger');
            verRecetaBtn.textContent = 'Ver Receta';
            verRecetaBtn.onclick = function(){
                obtenerPlatillo(idMeal ?? receta.id);
            }

            recetaDiv.appendChild(recetaImg);
            recetaDiv.appendChild(recetaTitle);
            recetaDiv.appendChild(verRecetaBtn);
            

            resultado.appendChild(recetaDiv);


        });

    }


    function obtenerPlatillo(id){

        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarPlatilloModal(resultado.meals[0]));
    }

    function mostrarPlatilloModal(platillo){


        const {idMeal, strMeal, strInstructions, strMealThumb} = platillo;

        const modalTitle = document.querySelector('.modal .modal-title');
        const modalBody = document.querySelector('.modal .modal-body');

        modalTitle.textContent = strMeal;
        modalBody.innerHTML = `
        
            <img src="${strMealThumb}" class="img-fluid" alt="${strMeal}" />
            <h2>Instrucciones</h2>
            <p>${strInstructions}</p>
            <h2>Ingredientes y Cantidades</h2>
        `;

        // ingredientes y cantidades
        const ingredientesUl = document.createElement('UL');
        for(let i = 1; i <= 20; i++){

            if(platillo[`strIngredient${i}`]){

                const ingredientes = platillo[`strIngredient${i}`];
                const cantidades = platillo[`strMeasure${i}`];

                const ingredienteLi = document.createElement('LI');
                ingredienteLi.innerHTML = `${ingredientes}: <strong>${cantidades}</strong>`;

                ingredientesUl.appendChild(ingredienteLi);
            }

        }
        
        modalBody.appendChild(ingredientesUl);
        

        // botones favorito y cerrar
        const modalFooter = document.querySelector('.modal .modal-footer');

        limpiarHTML(modalFooter); // limpiamos botones previos
        const favoritoBtn = document.createElement('BUTTON');
        favoritoBtn.classList.add('btn', 'btn-danger', 'col');
        favoritoBtn.textContent = existeStorage(idMeal) ? 'Eliminar Favorito' : 'Guardar Favorito';
        favoritoBtn.onclick = function(){

            if(existeStorage(idMeal)){
                eliminarFavorito(idMeal);
                favoritoBtn.textContent = 'Guardar Favorito';
                mostrarToast('Eliminado Correctamente');

                if(favoritosDiv){
                    obtenerFavoritos();
                    modal.hide();
                }

                return;
            }

            guardarFavorito({
                id: idMeal,
                titulo: strMeal,
                imagen: strMealThumb
            });
            favoritoBtn.textContent = 'Eliminar Favorito';
            mostrarToast('Agregado Correctamente');
        }


        const cerrarModal = document.createElement('BUTTON');
        cerrarModal.classList.add('btn', 'btn-secondary', 'col');
        cerrarModal.textContent = 'Cerrar';
        cerrarModal.onclick = function(){
            modal.hide();
        }

        modalFooter.appendChild(favoritoBtn);
        modalFooter.appendChild(cerrarModal);


        //mostramos el modal
        modal.show();
    }


    function guardarFavorito(favorito){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        localStorage.setItem('favoritos', JSON.stringify([...favoritos, favorito]));
    }

    function existeStorage(id){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        return favoritos.some(favorito => favorito.id === id);
    }

    function eliminarFavorito(id){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        const nuevosFavoritos = favoritos.filter(favorito => favorito.id !== id);
        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
    }

    function mostrarToast(mensaje){

        const toastDiv = document.querySelector('#toast');
        const toast = new bootstrap.Toast(toastDiv);
        const toastBody = document.querySelector('.toast-body');
        toastBody.textContent = mensaje;

        toast.show(); // mostrarmos el toast o alerta emergente

    }

    function obtenerFavoritos(){
        limpiarHTML(favoritosDiv);

        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
       
        if(favoritos.length){
            mostrarRecetas(favoritos);
            return;
        }

        const noFavoritosTitle = document.createElement('H3');
        noFavoritosTitle.classList.add('text-center');
        noFavoritosTitle.textContent = 'No se encontraron Favoritos';
        favoritosDiv.appendChild(noFavoritosTitle);
        
    }

    function limpiarHTML(selector){
        while(selector.firstChild){
            selector.removeChild(selector.firstChild);
        }
    }


}


document.addEventListener('DOMContentLoaded', iniciarApp);