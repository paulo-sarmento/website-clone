const btn = document.querySelector(".humburger-btn")
const sideNav = document.querySelector(".side-nav-container")
const bgNav = document.querySelector(".background-nav")

btn.addEventListener("click", () => {
    sideNav.classList.toggle("is-active")
})

document.addEventListener("click", (evento) => {
    if (evento.target == bgNav) {
        sideNav.classList.remove("is-active")
    }
})