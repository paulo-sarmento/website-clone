const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
const img = document.createElement('img')
img.id = 'carousel-img'

document.body.appendChild(lightbox)

images = document.querySelectorAll('.carousel-img')

for (let i = 0; i < images.length; i++) {

    images[i].addEventListener('click', (e) => {
        lightbox.classList.add('active')
        const arrowr = document.createElement('i')
        const arrowl = document.createElement('i')
        arrowr.id = 'arrowr'
        arrowl.id = 'arrowl'
        arrowr.classList.add('fas', 'fa-arrow-right')
        arrowl.classList.add('fas', 'fa-arrow-left')

        img.src = images[i].src

        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }

        lightbox.appendChild(img)
        lightbox.appendChild(arrowr)
        lightbox.appendChild(arrowl)
        
        var currentSlide = i
        /*currentSlide será igual a valor de I no for loop, para que o slider se inicie no indice clicado pelo usuário.
        Se o currentSlide for maior ou igual ao tamanho do array de imagens ele sera setado para 0.
        Se o currentSlide for menor ou igual ao tamanho do array de imagens a variável prevSlider recebe o valor de currentSlide + 1,
        e passa esse valor como indice do array de imagens para que o seu source seja alterado e a imagem mostrada em tela e caso o
        prevSlider for maior ou igual ao tamanho do array de imagens o prevSlider também é setado para 0.
        */
        arrowr.addEventListener('click', () => {

            if (currentSlide >= images.length) {currentSlide = 0}
            
            var nextSlide = currentSlide
            nextSlide += 1
            
            if (nextSlide >= images.length) {nextSlide = 0}
            
            img.src = images[nextSlide].src
            
            currentSlide++
        })
        
        arrowl.addEventListener('click', () => {

            if (currentSlide < 0) {currentSlide = (images.length - 1)}

                var prevSlide = currentSlide
                prevSlide -= 1
                
                if (prevSlide < 0) {prevSlide = (images.length - 1)}

                img.src = images[prevSlide].src

            currentSlide--

        })

    })
}

lightbox.addEventListener('click', (e) => {
    if (e.target !== e.currentTarget) return; {
        lightbox.classList.remove('active')
    }
})