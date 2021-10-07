'use-strict';

// References

const sidebar = document.querySelector('.side-nav');

const items = document.querySelectorAll('.side-nav__item');

// console.log(items);

// items.forEach(element => {
//     console.log(element);
//     element.classList.remove('side-nav__item--active');
//     // element.classList.remove('--active')
// });

sidebar.addEventListener('click', function (e) {
    const clicked = e.target.closest('.side-nav__item');
    console.log(clicked);

    if (!clicked) return;

    // Link attivo

    items.forEach(e => e.classList.remove('side-nav__item--active'))
    clicked.classList.add('side-nav__item--active');

    // scheda attiva
    // console.log(clicked.dataset.tab);

    // Qualcosa da mostrare

    // tabsContent.forEach(e => e.classList.remove('operations__content--active'))
    // document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')



});