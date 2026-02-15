// SAIDAS
let containerAbas = document.querySelector('.container-abas')

let abas = document.querySelectorAll('.abas')

// SEÇÕES
let secaoDosPaises = document.getElementById('secao-paises')

let secaoCustos = document.getElementById('secao-dos-custos')


// EVENTO DE CLICK
containerAbas.addEventListener("click", (evento) => {

    // PEGANDO QUAL FOI O CARD CLICADO
    let cardQueFoiClicado = evento.target.closest('.abas')

    let aba1 = document.getElementById('aba1')

    let aba2 = document.getElementById('aba2')

    let aba3 = document.getElementById('aba3')

    let aba4 = document.getElementById('aba4')

    let aba5 = document.getElementById('abas-plano-de-estudo')

    let aba6 = document.getElementById('aba6')

    if (aba1 === cardQueFoiClicado) {
        secaoDosPaises.style.display = 'block'
        secaoCustos.style.display = 'none'
    }

    if(aba2 === cardQueFoiClicado) {
        secaoCustos.style.display = 'block'
        secaoDosPaises.style.display = 'none'
    }
    
    // CONDIÇÃO, SE O CARD NÃO EXISTIR ELE RETORNA
    if (!cardQueFoiClicado) return

    // AQUI ELE PERCORRE E REMOVE
    abas.forEach(item => {
        item.classList.remove('ativo')
    });

    // AQUI ELE ADICIONA
    cardQueFoiClicado.classList.add('ativo')
})