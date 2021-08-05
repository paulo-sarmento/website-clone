const sectionSearch = document.querySelector("[data-section-search]")
const searchDialog = document.querySelector(".search__dialog")
const btnClose = document.querySelector(".close-search")
const bgSearch = document.querySelector(".background-search")

const searchInput = document.querySelector(".search__input")
const suggestions = document.querySelector(".search-suggestions")

/*se o usuário clicar em busca na navegação lateral irá mostrar o diálogo de busca*/
sectionSearch.addEventListener("click", () => {
    searchDialog.classList.add("active")
    bgSearch.classList.add("opacity")
    bgSearch.style.width = '100%'
    bgSearch.style.height = '100vh'
    searchInput.classList.add("show-search")
    suggestions.classList.add("show-search")
})

btnClose.addEventListener("click", () => {
    searchDialog.classList.remove("active")
    bgSearch.classList.remove("opacity")
    bgSearch.style.width = '0%'
    bgSearch.style.height = '0vh'
    searchInput.classList.remove("show-search")
    suggestions.classList.remove("show-search")
})

/*se o usuário clicar na parte com opacidade sera fechado a navegação da search bar*/
document.addEventListener("click", (evento) => {
    if (evento.target == bgSearch) {
        searchDialog.classList.remove("active")
        bgSearch.classList.remove("opacity")
        bgSearch.style.width = '0%'
        bgSearch.style.height = '0vh'
        searchInput.classList.remove("show-search")
        suggestions.classList.remove("show-search")
    }
})