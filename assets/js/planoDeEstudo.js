// 
const containerCardPlanoDeEstudo = document.querySelector('.container-cards-plano-de-estudo')

const cardPlanoDeEstudo = document.querySelectorAll('.cards-plano-de-estudo')




// 
containerCardPlanoDeEstudo.addEventListener("click", (eventoPlanoEstudo) => {
    
    // 
    let cardVerde = true

    let cardCorInicial = false


    let ClicouPlanoDeEstudo = eventoPlanoEstudo.target.closest('.cardPlanoDeEstudo')


    if (ClicouPlanoDeEstudo === cardCorInicial) {
        ClicouPlanoDeEstudo.classList.remove('classGreen')
    }else if (ClicouPlanoDeEstudo === cardVerde) {
        ClicouPlanoDeEstudo.classList.add('classGreen')
    }

    

})

// Eu preciso percorrer e saber se esta verde se estiver verde eu removo a classe se estiver cor inical eu adiciono a classe