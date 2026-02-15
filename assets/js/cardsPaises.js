let cardPaises = document.querySelectorAll('.card-paises')

let container = document.querySelector('.container-paises')



// EVENTO DE CLICK
container.addEventListener("click", (evento) => {

    // VARIAVEL QUE GUARDA O ELEMENTO QUE FOI CLICADO 
    let cardClicado = evento.target.closest('.card-paises')


    // Se não clicou em card, sai
    if (!cardClicado) return


    // Remove destaque de todos
    cardPaises.forEach(card => {
        card.classList.remove('classeDestaque')
    })
    
        // Destaca o clicado
    cardClicado.classList.add('classeDestaque')
      

    })


