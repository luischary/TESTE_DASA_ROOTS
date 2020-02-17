// ---------------------------------- WEB TEST --------------------------------------------------
const webTestVisivel = () => document.getElementById("painelImagens").style.display !== 'none'
const escondeWebTest = () => document.getElementById('painelImagens').style.display = 'none'
const mostraWebTest = () => document.getElementById('painelImagens').style.display = 'flex'
const rodaImagemEsconde = () => document.getElementById('toggle-arrow').setAttribute('style', 'transform:rotate(270deg)')
const rodaImagemMostra = () => document.getElementById('toggle-arrow').setAttribute('style', 'transform:rotate(0deg)')


document.getElementById('toggle-web-test').addEventListener('click', function(l) {
    if (webTestVisivel()) {
        escondeWebTest()
        rodaImagemEsconde()
    } else {
        mostraWebTest()
        rodaImagemMostra()
    }
    l.preventDefault()
})


//--------------------------------------------- CURTIDAS ----------------------------------------

const preencheCoracao = (elemento) => {
    elemento.classList.remove('far')
    elemento.classList.add('fas')
}

const incrementaContagem = (spamContador) => {
    const contagemAtual = parseInt(spamContador.innerText)
    const novaContagem = contagemAtual + 1
    spamContador.innerText = novaContagem
}

const getContadorFromCoracao = (coracao) => coracao.parentElement.parentElement.getElementsByClassName('contagem-favorito')[0]
const coracoes = document.getElementsByClassName('coracao')

for (let i = 0; i < coracoes.length; i++) {
    coracoes[i].addEventListener('click', function(event) {
        const coracao = event.target
        preencheCoracao(coracao)
        const contador = getContadorFromCoracao(coracao)
        incrementaContagem(contador)
        event.preventDefault()
    })
}