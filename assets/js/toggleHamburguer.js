const hamburguer = document.querySelector(".nav__hamburguer")
const sideNav = document.querySelector(".side-nav-container")
const background = document.querySelector(".background-nav")

/*se o botão hamburguer for clicado a navegação lateral sera mostrada*/
hamburguer.addEventListener("click", () => {
    sideNav.classList.toggle("is-active")
    background.classList.toggle("opacity")

    opacityCheck(background);
})

/*se o usuário clicar na parte com opacidade sera fechado a navegação lateral*/
document.addEventListener("click", (e) => {
    if (e.target == background) {
        sideNav.classList.remove("is-active")
        background.classList.remove("opacity")
        background.style.width = '0%'
        background.style.height = '0vh'
    }
})