function iniciarApp(){

    const resultado = document.querySelector('#resultado');
    const categoriasSelect = document.querySelector('#categorias');
    const divFavorito = document.querySelector('.favoritos');
    const modal = new bootstrap.Modal('#modal', {});
    
    if(categoriasSelect){
        categoriasSelect.addEventListener('change', seleccionarCategoria);
        obtenerCategorias();
    }

    if(divFavorito){
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
        heading.classList.add('text-center', 'my-3');
        heading.textContent = recetas.length ? 'Resultados' : 'No se encotraron Recetas';
        resultado.appendChild(heading);

        recetas.forEach(receta => {

            const {idMeal, strMeal, strMealThumb} = receta;

            const recetaDiv = document.createElement('DIV');
            recetaDiv.classList.add('col-md-3', 'col-sm-3');

            const recetaImagen = document.createElement('IMG');
            recetaImagen.classList.add('img-fluid');
            recetaImagen.src = strMealThumb ?? receta.imagen;
            recetaImagen.alt = `Receta de ${strMeal ?? receta.titulo}`;

            const recetaTitulo = document.createElement('H3');
            recetaTitulo.textContent = strMeal ?? receta.titulo;

            const verRecetaButton = document.createElement('BUTTON');
            verRecetaButton.classList.add('btn', 'btn-danger');
            verRecetaButton.textContent = 'Ver Receta';
            verRecetaButton.onclick = function(){
                obtenerPlatillo(idMeal ?? receta.id);
            }


            recetaDiv.appendChild(recetaImagen);
            recetaDiv.appendChild(recetaTitulo);
            recetaDiv.appendChild(verRecetaButton);

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
        

        const {idMeal, strMeal, strMealThumb, strInstructions} = platillo;

        const modalHeader = document.querySelector('.modal .modal-title');
        const modalBody = document.querySelector('.modal .modal-body');
        

        modalHeader.textContent = strMeal;
        modalBody.innerHTML = `
        
            <img src="${strMealThumb}" class="img-fluid" alt="${strMeal}" />
            <h3>Instrucciones:</h3>
            <p>${strInstructions}</p>
            <h3>Ingredientes y Cantidades</h3>
        `;

        // mostrar instrucciones
        const ingredientesUl = document.createElement('UL');
        for(let i = 1; i <= 20; i++){

            if(platillo[`strIngredient${i}`]){

            const ingredientes = platillo[`strIngredient${i}`];
            const cantidades = platillo[`strMeasure${i}`];

            const ingredientesLi = document.createElement('LI');
            ingredientesLi.innerHTML = `${ingredientes}: <strong>${cantidades}</strong>`;
            ingredientesUl.appendChild(ingredientesLi);

            }
            
        }

        modalBody.appendChild(ingredientesUl);


        // botones guardar y cerrar
        const modalFooter = document.querySelector('.modal .modal-footer');
        limpiarHTML(modalFooter);
        const favoritoBtn = document.createElement('BUTTON');
        favoritoBtn.classList.add('btn', 'btn-danger', 'col');
        favoritoBtn.textContent = existeStorage(idMeal) ? 'Eliminar Favorito' : 'Guardar Favorito';
        favoritoBtn.onclick = function(){

            if(existeStorage(idMeal)){
                eliminarFavorito(idMeal);
                favoritoBtn.textContent = 'Guardar Favorito';
                mostrarToast('Eliminado Correctamente');

                if(divFavorito){
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




        const cerrarBtnModal = document.createElement('BUTTON');
        cerrarBtnModal.classList.add('btn', 'btn-secondary', 'col');
        cerrarBtnModal.textContent = 'Cerrar';
        cerrarBtnModal.onclick = function(){
            modal.hide();
        }

        modalFooter.appendChild(favoritoBtn);
        modalFooter.appendChild(cerrarBtnModal);



        modal.show();

    }


    function guardarFavorito(favorito){
        
        //comprobamos si hay favoritos, en caso de no haber creamos el arreglo
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
        const toastBody = document.querySelector('.toast-body');
        toastBody.textContent = mensaje;

        const toast = new bootstrap.Toast(toastDiv);
        toast.show();
    }

    function obtenerFavoritos(){
        limpiarHTML(divFavorito);
        
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];

        if(favoritos.length){
            mostrarRecetas(favoritos);
            return;
        }

        const noFavoritos = document.createElement('P');
        noFavoritos.classList.add('text-center');
        noFavoritos.textContent = 'No hay elementos en favoritos';
        divFavorito.appendChild(noFavoritos);
    }


    function limpiarHTML(selector){
        while(selector.firstChild){
            selector.removeChild(selector.firstChild);
        }
    }




}


document.addEventListener('DOMContentLoaded', iniciarApp);