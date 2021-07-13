const sectionSearch = document.querySelector("[data-section-search]")
const searchDialog = document.querySelector(".search-dialog")
const btnClose = document.querySelector(".close-search")
const opacitySearch = document.querySelector(".background-search")

const testa = document.querySelector(".search-input")
const testaa = document.querySelector(".search-suggestions")

sectionSearch.addEventListener("click", () => {
    searchDialog.classList.add("active")
    opacitySearch.classList.add("opacity")
    opacitySearch.style.width = '100%'
    opacitySearch.style.height = '100vh'
    testa.classList.add("show-search")
    testaa.classList.add("show-search")
})

btnClose.addEventListener("click", () => {
    searchDialog.classList.remove("active")
    opacitySearch.classList.remove("opacity")
    opacitySearch.style.width = '0%'
    opacitySearch.style.height = '0vh'
    testa.classList.remove("show-search")
    testaa.classList.remove("show-search")
})

/*se o usuário clicar na parte com opacidade sera fechado a navegação da search bar*/
document.addEventListener("click", (evento) => {
    if (evento.target == opacitySearch) {
        searchDialog.classList.remove("active")
        opacitySearch.classList.remove("opacity")
        opacitySearch.style.width = '0%'
        opacitySearch.style.height = '0vh'
        testa.classList.remove("show-search")
        testaa.classList.remove("show-search")
    }
})