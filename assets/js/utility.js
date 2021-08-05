const utilityBar = document.querySelector(".utility")
const utilityBTN = document.querySelector(".utility-search-btn")
const hamburguerBTN = document.querySelector(".hamburguer__container")
const bgNav = document.querySelector(".background-nav")
const dialog = document.querySelector(".search__dialog")
const search__input = document.querySelector(".search__input")
const searchSuggestions = document.querySelector(".search-suggestions")

/*se o botão hamburguer for clicado a barra de utilidades será escondida*/
hamburguerBTN.addEventListener("click", () => {
    utilityBar.classList.toggle("utility-off")
})

/*se o usuário clicar no background da navegação lateral irá remover a classe que esconde a barra de utilidade*/
bgNav.addEventListener("click", (e) => {
    if (e.target == bgNav) {
        utilityBar.classList.remove("utility-off")
    }
})

/*se o usuário clicar no botão da barra de utilidade irá aparecer o diálogo da barra de busca*/
utilityBTN.addEventListener("click", () => {
    dialog.classList.toggle("active")
    search__input.classList.toggle("show-search")
    searchSuggestions.classList.toggle("show-search")
})