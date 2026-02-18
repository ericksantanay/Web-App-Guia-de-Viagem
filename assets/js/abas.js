// SAIDAS
let containerAbas = document.querySelector('.container-abas')

let abas = document.querySelectorAll('.abas')

// SEÇÕES
let secaoDosPaises = document.getElementById('secao-paises')

let secaoCustos = document.getElementById('secao-dos-custos')

let secaoHabilidades = document.getElementById('secao-habilidade-demandadas')

let secaoPlanodeEstudo = document.getElementById('secao-plano-de-estudos')


let corPrimeiraAba = document.getElementById('aba1')


secaoDosPaises.style.display = 'block'
corPrimeiraAba.style.backgroundColor = '#3B82F6'

// EVENTO DE CLICK
containerAbas.addEventListener("click", (evento) => {

    // PEGANDO QUAL FOI O CARD CLICADO
    let cardQueFoiClicado = evento.target.closest('.abas')

    let aba1 = document.getElementById('aba1')

    let aba2 = document.getElementById('aba2')

    let aba3 = document.getElementById('aba3')

    let aba4 = document.getElementById('abas-plano-de-estudo')
    

    if (aba1 === cardQueFoiClicado) {
        secaoDosPaises.style.display = 'block'
        secaoCustos.style.display = 'none'
        secaoHabilidades.style.display = 'none'
        secaoPlanodeEstudo.style.display = 'none'

        corPrimeiraAba.style.backgroundColor = '#3B82F6'
    }

    if(aba2 === cardQueFoiClicado) {
        secaoCustos.style.display = 'block'
        secaoDosPaises.style.display = 'none'
        secaoHabilidades.style.display = 'none'
        secaoPlanodeEstudo.style.display = 'none'

        corPrimeiraAba.style.backgroundColor = '#0E1116'
    }

    if (aba3 === cardQueFoiClicado) {
        secaoHabilidades.style.display = 'block'
        secaoCustos.style.display = 'none'
        secaoDosPaises.style.display = 'none'
        secaoPlanodeEstudo.style.display = 'none'


        corPrimeiraAba.style.backgroundColor = '#0E1116'
    }


    if (aba4 === cardQueFoiClicado) {
        secaoPlanodeEstudo.style.display = 'block'
        secaoCustos.style.display = 'none'
        secaoHabilidades.style.display = 'none'
        secaoDosPaises.style.display = 'none'


        corPrimeiraAba.style.backgroundColor = '#0E1116'
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