const btn = document.querySelector(".humburger-btn")
const sideNav = document.querySelector(".side-nav-container")
const bgNav = document.querySelector(".background-nav")

btn.addEventListener("click", () => {
    sideNav.classList.toggle("is-active")
    bgNav.classList.toggle("bg-active")
})

document.addEventListener("click", (evento) => {
    if (evento.target == bgNav) {
        sideNav.classList.remove("is-active")
        bgNav.classList.remove("bg-active")
    }
})

