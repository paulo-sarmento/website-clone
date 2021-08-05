const opacityCheck = (background) => {
    if (background.style.width !== '100%' && background.style.height !== "100vh") {
        background.style.width = '100%'
        background.style.height = '100vh'
    } else {
        background.style.width = '0%'
        background.style.height = '0vh'
    }
}