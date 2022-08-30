window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    let $title = document.querySelector('#title');
    let $sinopsis = document.querySelector('#sinopsis')
    let $rating = document.querySelector('#rating');
    let $awards = document.querySelector('#awards');
    let $release_date = document.querySelector('#release_date');
    let $length = document.querySelector('#length');
    let $genre_id = document.querySelector('#genre_id');
    let errors = {};
    let form = document.querySelector('form')
    $title.focus();

    function validarVacio(event) {
        let name = event.target.name;
        if (this.value == "") {
            errors[name] = "No puedes dejar el campo vacio";
            let $divError = document.querySelector('.error-' + name);
            $divError.innerHTML = errors[name];
        }
    };

    function validarRangoEntre(min, max) {
        return function (event) {
            let name = event.target.name;
            if (this.value < min || this.value > max) {
                errors[name] = "No es posible agregar ese valor";
                let $divError = document.querySelector('.error-' + name);
                $divError.innerHTML = errors[name];
            }
        }
    }

    $title.addEventListener('blur', validarVacio);
    $sinopsis.addEventListener('blur', validarVacio);
    $rating.addEventListener('blur', validarRangoEntre(0, 10));
    $rating.addEventListener('blur', validarVacio);
    $awards.addEventListener('blur', validarRangoEntre(0, 10));
    $awards.addEventListener('blur', validarVacio);
    $release_date.addEventListener('blur', validarVacio);
    $length.addEventListener('blur', validarRangoEntre(60, 360));
    $length.addEventListener('blur', validarVacio);
    $genre_id.addEventListener('blur', validarVacio);

    // form.addEventListener('submit', function (e) {
    //         e.preventDefault();
    // })
}