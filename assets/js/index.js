const btn = document.querySelector(".humburger-btn")
const sideNav = document.querySelector(".side-nav-container")
const bgNav = document.querySelector(".background-nav")
const sideLinkGames = document.querySelector("[data-link-games]")
const sideLinkHardware = document.querySelector("[data-link-hardware]")

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

sideLinkGames.addEventListener("click", () => {
    const icon = document.querySelector("[data-section-games]")
    const navExpandido = document.querySelector(".side-nav-expandido-games")
    const containerNavExpandido = document.querySelector("#navExpandidoGames")

    icon.classList.toggle("open-icon")

    if (icon.classList.contains('open-icon')) {
        navExpandido.classList.add("showNav")
        containerNavExpandido.style.display = 'flex'
        sideLinkGames.classList.add("showNavExpandidoGames")
    } else {
        navExpandido.classList.remove("showNav")
        containerNavExpandido.style.display = 'none'
        sideLinkGames.classList.remove("showNavExpandidoGames")
    }
})

sideLinkHardware.addEventListener("click", () => {
    const icon = document.querySelector("[data-section-hardware]")
    const NavExpandido = document.querySelector(".side-nav-expandido-hardware")
    const containerNavExpandido = document.querySelector("#navExpandidoHardware")

    icon.classList.toggle("open-icon")

    if (icon.classList.contains('open-icon')) {
        NavExpandido.classList.add("showNav")
        containerNavExpandido.style.display = 'flex'
        sideLinkHardware.classList.add("showNavExpandidoHardware")
    } else {
        NavExpandido.classList.remove("showNav")
        containerNavExpandido.style.display = 'none'
        sideLinkHardware.classList.remove("showNavExpandidoHardware")
    }
})