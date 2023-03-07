let alternador = document.querySelector('.js-botao-chaveador');

alternador.onclick = function() {
    let menu = document.querySelector('.js-menu');
    menu.classList.toggle('menu--exibindo')
}