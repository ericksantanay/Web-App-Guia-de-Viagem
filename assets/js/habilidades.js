let containerHabilidades = document.querySelector('.div-mae-das-habilidades-container')

let cardsHabilidades = document.querySelectorAll('.container-mae-dos-cards-das-habilidades')



// EVENTO DE CLICK E A FUNÇÃO.
containerHabilidades.addEventListener("click", (eventoHabilidade) => {

    // AQUI QUANDO ACHAR O CARD QUE FOI CLICADO ELE VAI GUARDAR NESSA VARIAVEL
    let cardHabilidadeClicado = eventoHabilidade.target.closest('.container-mae-dos-cards-das-habilidades')

    // SE O CARD NÃO EXISTIR VAI RETORNAR
    if (!cardHabilidadeClicado) return

    // PERCORRER
    cardsHabilidades.forEach(itemHabilidade => {
        // REMOVENDO O A CLASSE
        itemHabilidade.classList.remove('hoverHabilidade')
    });
    
    // ADICIONANDO A CLASSE A CADA CLICK
    cardHabilidadeClicado.classList.add('hoverHabilidade')

})