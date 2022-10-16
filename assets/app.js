let hamburger = document.querySelector('header nav .hamburger')
let navUl = document.querySelector('header nav ul')
hamburger.addEventListener('click', function () {
    navUl.classList.toggle('open');
})
console.log(hamburger);