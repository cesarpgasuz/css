function iniciarApp(){

    const categoriasSelect = document.querySelector('#categorias');
    const divFavoritos = document.querySelector('.favoritos');
    const resultado = document.querySelector('#resultado');

    const modal = new bootstrap.Modal('#modal', {});

    if(categoriasSelect){ 
        // en la pagina de favoritos no existe el select por lo que se comprueba si existe 
        // y en caso de no existir no se ejecuta el codigo
        categoriasSelect.addEventListener('change', seleccionarCategoria);
        obtenerCategorias();
    }

    // si existe la etique favoritos mandamos llamar la funcion que muestra los favoritos de localstorage
    if(divFavoritos){
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
            option.textContent = strCategory;
            option.value = strCategory;

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
        heading.classList.add('text-center', 'my-5');
        heading.textContent = recetas.length ? 'Resultados' : 'No se encontraron Recetas';
        resultado.appendChild(heading);


        recetas.forEach(receta => {

            const {idMeal, strMeal, strMealThumb} = receta;

            const divReceta = document.createElement('DIV');
            divReceta.classList.add('col-md-3', 'col-sm-3');

            const imgReceta = document.createElement('IMG');
            imgReceta.classList.add('img-fluid');
            imgReceta.src = strMealThumb ?? receta.imagen;
            imgReceta.alt = `Receta de ${strMeal ?? receta.titulo} `;
            
            const titleReceta = document.createElement('H3');
            titleReceta.classList.add('text-center');
            titleReceta.textContent = strMeal ?? receta.titulo;

            const buttonReceta = document.createElement('BUTTON');
            buttonReceta.classList.add('btn', 'btn-danger');
            buttonReceta.textContent = 'Ver Receta';
            buttonReceta.onclick = function(){
                obtenerPlatillo(idMeal ?? receta.id);
            }

            divReceta.appendChild(imgReceta);
            divReceta.appendChild(titleReceta);
            divReceta.appendChild(buttonReceta);

            resultado.appendChild(divReceta);

        });

    }

    function limpiarHTML(selector){
        while(selector.firstChild){
            selector.removeChild(selector.firstChild);
        }
    }


    function obtenerPlatillo(id){

        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarPlatillo(resultado.meals[0]));
    }

    function mostrarPlatillo(platillo){

        // console.log(platillo)

        const {idMeal, strMeal, strInstructions, strMealThumb} = platillo;

        const titleModal = document.querySelector('.modal .modal-title');
        const bodyModal = document.querySelector('.modal .modal-body');

        titleModal.textContent = strMeal;
        bodyModal.innerHTML = `

            <img src="${strMealThumb}" class="img-fluid" alt="${strMeal}" />
            <h3>Instrucciones</h3>
            <p>${strInstructions}</p>
            <h3>Ingredientes y Cantidades</h3>
        
        `;
        
        // obtener ingredientes y cantidades
        const listadoUl = document.createElement('UL');

        for(let i = 1; i <= 20; i++){
            if(platillo[`strIngredient${i}`]){

                const ingrediente = platillo[`strIngredient${i}`];
                const cantidad = platillo[`strMeasure${i}`];

                const listadoLi = document.createElement('LI');
                listadoLi.innerHTML = `${ingrediente} <strong>${cantidad}</strong>`;

                listadoUl.appendChild(listadoLi);

            }
        }

        bodyModal.appendChild(listadoUl);

        /// mostrar botones de favorito y cerrar
        const modalFooter = document.querySelector('.modal-footer');

        limpiarHTML(modalFooter);

        const btnFavorito = document.createElement('BUTTON');
        btnFavorito.classList.add('btn', 'btn-danger', 'col');
        btnFavorito.textContent = existeStorage(idMeal) ? 'Eliminar Favorito' : 'Guardar Favorito';
        btnFavorito.onclick = function(){

            if(existeStorage(idMeal)){
                eliminarFavorito(idMeal);
                btnFavorito.textContent = 'Guardar Favorito';
                mostrarToast('Eliminado Correctamente');

                if(divFavoritos){
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
            btnFavorito.textContent = 'Eliminar Favorito';
            mostrarToast('Agregado Correctamente');
        }

        const btnCerrar = document.createElement('BUTTON');
        btnCerrar.classList.add('btn', 'btn-secondary', 'col');
        btnCerrar.textContent = 'Cerrar';
        btnCerrar.onclick = function(){
            modal.hide();
        }
        
        modalFooter.appendChild(btnFavorito);
        modalFooter.appendChild(btnCerrar);


        // muestra el modal
        modal.show();

    }

    function guardarFavorito(platillo){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        localStorage.setItem('favoritos', JSON.stringify([...favoritos, platillo]));

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

        const divToast = document.querySelector('#toast');
        const toastBody = document.querySelector('.toast-body');
        toastBody.textContent = mensaje;

        const toast = new bootstrap.Toast(divToast);

        toast.show();

    }


    function obtenerFavoritos(){

        limpiarHTML(divFavoritos);
        
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];

        if(favoritos.length){
            mostrarRecetas(favoritos);
            return;
        }

        const noFavoritos = document.createElement('P');
        noFavoritos.classList.add('text-center');
        noFavoritos.textContent = 'No hay elementos en favoritos';
        divFavoritos.appendChild(noFavoritos);
    }

}


document.addEventListener('DOMContentLoaded', iniciarApp);