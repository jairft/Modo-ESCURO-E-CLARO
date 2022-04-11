function mudarModo(){
    mudarClasse()
    mudarTexto()
}
function mudarClasse(){
    button.classList.toggle(darkModeClasse)
    h1.classList.toggle(darkModeClasse)
    body.classList.toggle(darkModeClasse)
    footer.classList.toggle(darkModeClasse)
}
function mudarTexto(){
    const ModoClaro = 'Modo Claro'
    const ModoEscuro = 'Modo Escuro'
    if(body.classList.contains(darkModeClasse)){
        button.innerHTML = ModoClaro
        h1.innerHTML = ModoEscuro + ' LIGADO'
        return
        
    }
    button.innerHTML = ModoEscuro
    h1.innerHTML = ModoClaro + ' LIGADO'
}
const darkModeClasse = 'dark-mode'
const button = document.getElementById('mode-selector')
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]

button.addEventListener('click', mudarModo)