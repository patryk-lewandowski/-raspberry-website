const burgerIcon = document.querySelector('.head__burger-icon');
const menu = document.querySelector('.menu');
const speciesHeader = document.querySelector('.species__title');

burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('head__burger-icon--active');
    if (burgerIcon.classList.contains('icon-menu')) {
        burgerIcon.style.animation = 'menu-out 0.5s linear both';
        setTimeout(function () {
            menu.classList.toggle('menu--active');
            burgerIcon.classList.toggle('icon-cancel');
            burgerIcon.classList.toggle('icon-menu');
            burgerIcon.style.animation = 'cancel-in 0.5s linear both';
        }, 500);
    } else if (burgerIcon.classList.contains('icon-cancel')) {
        burgerIcon.style.animation = 'cancel-out 0.5s linear both';
        setTimeout(function () {
            menu.classList.toggle('menu--active');
            burgerIcon.classList.toggle('icon-cancel');
            burgerIcon.classList.toggle('icon-menu');
            burgerIcon.style.animation = 'menu-in 0.5s linear both';
        }, 500);
    }


})

const changeSpeciesHeader = () => {
    if (window.innerWidth > 1281) {
        speciesHeader.innerHTML = 'The Best Raspberry Varieties';
    } else {
        speciesHeader.innerHTML = 'The Best </br> Raspberry Varieties';
    }
}


window.addEventListener("resize", changeSpeciesHeader);