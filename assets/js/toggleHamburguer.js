const btn = document.querySelector(".humburger-btn")
const sideNav = document.querySelector(".side-nav-container")
const opacity = document.querySelector(".background-nav")

/*se o botão hamburguer for clicado a navegação lateral sera mostrada*/
btn.addEventListener("click", () => {
    sideNav.classList.toggle("is-active")
    opacity.classList.toggle("opacity")
})

/*se o usuário clicar na parte com opacidade sera fechado a navegação lateral*/
document.addEventListener("click", (evento) => {
    if (evento.target == opacity) {
        sideNav.classList.remove("is-active")
        opacity.classList.remove("opacity")
    }
})