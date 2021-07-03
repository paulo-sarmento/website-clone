const sectionGames = document.querySelector("[data-section-games]")
const sectionHardware = document.querySelector("[data-section-hardware]")

/*escutador de evento em games e hardware no menu lateral, se acionados adiciona a classe "open" ao 
dropdown e se o dropdown possuir a classe "open" chama a função mostrarSecao() que pega como parâmetros a seção,
o container da seção e o <li></li> da seção, adicionando respectivamente as classes "show", "flex", "height-transition"
se não possuir a classe open chama a função ocultarSecao() que pega como parâmetros a seção, o container da seção e o
<li></li> da seção, e remove as classes "show" e "height-transition" e adiciona display none para o container*/

sectionGames.addEventListener('click', () => {
    let section = document.querySelector(".side-nav-expandido-games")
    let sectionContainer = document.querySelector("#container-expandido-games")
    let dropdownBTN = document.querySelector("[data-section-games-btn]")
    
    dropdownBTN.classList.toggle("open")

    if (dropdownBTN.classList.contains('open')) {
        mostrarSecao(section, sectionContainer, sectionGames)
    } else {
        ocultarSecao(section, sectionContainer, sectionGames)
    }

})

sectionHardware.addEventListener('click', () => {
    let section = document.querySelector(".side-nav-expandido-hardware")
    let sectionContainer = document.querySelector("#container-expandido-hardware")
    let dropdownBTN = document.querySelector("[data-section-hardware-btn]")

    dropdownBTN.classList.toggle("open")

    if (dropdownBTN.classList.contains('open')) {
        mostrarSecao(section, sectionContainer, sectionHardware)
    } else {
        ocultarSecao(section, sectionContainer, sectionHardware)
    }

})

const mostrarSecao = (section, container, li) => {
    section.classList.add("show")
    container.style.display = 'flex'
    li.classList.add("height-transition")
}

const ocultarSecao = (section, container, li) => {
    section.classList.remove("show")
    container.style.display = 'none'
    li.classList.remove("height-transition")
}