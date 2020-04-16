const burgerIcon = document.querySelector('.head__burger-icon');
const menu = document.querySelector('.menu');
const speciesHeader = document.querySelector('.species__title');

burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('head__burger-icon--active');
    burgerIcon.classList.toggle('icon-menu');
    burgerIcon.classList.toggle('icon-cancel');
    menu.classList.toggle('menu--active');
})

const changeSpeciesHeader = () => {
    if (window.innerWidth > 1281) {
        speciesHeader.innerHTML = 'The Best Raspberry Varieties';
    } else {
        speciesHeader.innerHTML = 'The Best </br> Raspberry Varieties';
    }
}


window.addEventListener("resize", changeSpeciesHeader);