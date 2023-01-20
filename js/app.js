// import "../node_modules/scrollreveal/dist/scrollreveal.es";

// let abs = document.querySelector('.aboutUs')

// ScrollReveal().reveal(abs);

// import ScrollReveal from "scrollreveal";

// ScrollReveal().reveal('.home', {delay: 100})
// ScrollReveal().reveal('.popular', { delay: 400 });
// ScrollReveal().reveal('.recently', { delay: 400 });
// ScrollReveal().reveal('.newsletter', { delay: 400 });
// ScrollReveal().reveal('.aboutUs',{delay: 300})

let changeTheme = document.getElementById('theme');
let body = document.getElementById('body');

changeTheme.onclick = () => {
    changeTheme.classList.toggle('active');
    body.classList.toggle('active');
}