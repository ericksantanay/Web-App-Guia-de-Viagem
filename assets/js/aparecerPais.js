// PORTUGUAL
let portugual = document.getElementById('pais-portugual')

// CANADA
let canada = document.getElementById('pais-canada')

// ESTADOS UNIDOS
let estadosUnidos = document.getElementById('pais-estados-unidos')

// ALEMANHA
let alemanha = document.getElementById('pais-alemanha')


//  AUSTRALIA
let australia = document.getElementById('pais-australia')


// NOVA ZELANDIA
let novaZelandia = document.getElementById('pais-nova-zelandia')


// HOLANDA
let holanda = document.getElementById('pais-holanda')


// IRLANDA
let irlanda = document.getElementById('pais-irlanda')

// SETA 1
let seta1  = document.getElementById('seta1')

// SETA 2
let seta2 = document.getElementById('seta2')

// SETA 3
let seta3  = document.getElementById('seta3')

// SETA 4
let seta4  = document.getElementById('seta4')

// SETA 5
let seta5  = document.getElementById('seta5')

// SETA 6
let seta6  = document.getElementById('seta6')

// SETA  7
let seta7  = document.getElementById('seta7')

// SETA  7
let seta8  = document.getElementById('seta8')




//FUNÇÕES PARA APARECER O PAIS DESEJADO
// CANADA APARECE
function canadaAparecer() {
    canada.style.display = 'block'

    portugual.style.display = 'none'
    estadosUnidos.style.display = 'none'
    alemanha.style.display = 'none'
    australia.style.display = 'none'
    novaZelandia.style.display = 'none'
    holanda.style.display = 'none'
    irlanda.style.display = 'none'   
    
    seta2.innerText = 'keyboard_arrow_down'

   seta1.innerText = 'arrow_forward_ios'
   seta3.innerText = 'arrow_forward_ios'
   seta4.innerText = 'arrow_forward_ios'
   seta5.innerText = 'arrow_forward_ios'
   seta6.innerText = 'arrow_forward_ios'
   seta7.innerText = 'arrow_forward_ios'
   seta8.innerText = 'arrow_forward_ios'


   // COR DA SETA
   seta2.style.color = '#2563EB'

   seta1.style.color = '#565C68'
   seta3.style.color = '#565C68'
   seta4.style.color = '#565C68'
   seta5.style.color = '#565C68'
   seta6.style.color = '#565C68'
   seta7.style.color = '#565C68'
   seta8.style.color = '#565C68'

}


// ESTADOS UNIDOS APARECE
function estadosUnidosAparecer() {
    estadosUnidos.style.display = 'block'

    portugual.style.display = 'none'
    canada.style.display = 'none'
    alemanha.style.display = 'none'
    australia.style.display = 'none'
    novaZelandia.style.display = 'none'
    holanda.style.display = 'none'
    irlanda.style.display = 'none'

     seta3.innerText = 'keyboard_arrow_down'

   seta2.innerText = 'arrow_forward_ios'
   seta1.innerText = 'arrow_forward_ios'
   seta4.innerText = 'arrow_forward_ios'
   seta5.innerText = 'arrow_forward_ios'
   seta6.innerText = 'arrow_forward_ios'
   seta7.innerText = 'arrow_forward_ios'
   seta8.innerText = 'arrow_forward_ios'


   // COR DA SETA
    seta3.style.color = '#2563EB'

   seta1.style.color = '#565C68'
   seta2.style.color = '#565C68'
   seta4.style.color = '#565C68'
   seta5.style.color = '#565C68'
   seta6.style.color = '#565C68'
   seta7.style.color = '#565C68'
   seta8.style.color = '#565C68'
}


// HOLANDA APARECE
function holandaAparecer() {
    holanda.style.display = 'block'

    portugual.style.display = 'none'
    estadosUnidos.style.display = 'none'
    alemanha.style.display = 'none'
    australia.style.display = 'none'
    novaZelandia.style.display = 'none'
    canada.style.display = 'none'
    irlanda.style.display = 'none'


     seta4.innerText = 'keyboard_arrow_down'

   seta2.innerText = 'arrow_forward_ios'
   seta3.innerText = 'arrow_forward_ios'
   seta1.innerText = 'arrow_forward_ios'
   seta5.innerText = 'arrow_forward_ios'
   seta6.innerText = 'arrow_forward_ios'
   seta7.innerText = 'arrow_forward_ios'
   seta8.innerText = 'arrow_forward_ios'


   
   // COR DA SETA
     seta4.style.color = '#2563EB'

   seta1.style.color = '#565C68'
   seta2.style.color = '#565C68'
   seta3.style.color = '#565C68'
   seta5.style.color = '#565C68'
   seta6.style.color = '#565C68'
   seta7.style.color = '#565C68'
   seta8.style.color = '#565C68'

}


// IRLANDA APARECE 
function irlandaAparecer() {
    irlanda.style.display = 'block'

    portugual.style.display = 'none'
    estadosUnidos.style.display = 'none'
    alemanha.style.display = 'none'
    australia.style.display = 'none'
    novaZelandia.style.display = 'none'
    holanda.style.display = 'none'
    canada.style.display = 'none'

     seta5.innerText = 'keyboard_arrow_down'

   seta2.innerText = 'arrow_forward_ios'
   seta3.innerText = 'arrow_forward_ios'
   seta4.innerText = 'arrow_forward_ios'
   seta1.innerText = 'arrow_forward_ios'
   seta6.innerText = 'arrow_forward_ios'
   seta7.innerText = 'arrow_forward_ios'
   seta8.innerText = 'arrow_forward_ios'

    // COR DA SETA
      seta5.style.color = '#2563EB'

   seta1.style.color = '#565C68'
   seta2.style.color = '#565C68'
   seta3.style.color = '#565C68'
   seta4.style.color = '#565C68'
   seta6.style.color = '#565C68'
   seta7.style.color = '#565C68'
   seta8.style.color = '#565C68'
}


// NOVA ZELANDIA APARECE
function novaZelandiaAparecer() {
    novaZelandia.style.display = 'block'

    portugual.style.display = 'none'
    estadosUnidos.style.display = 'none'
    alemanha.style.display = 'none'
    australia.style.display = 'none'
    canada.style.display = 'none'
    holanda.style.display = 'none'
    irlanda.style.display = 'none'


    seta6.innerText = 'keyboard_arrow_down'

   seta2.innerText = 'arrow_forward_ios'
   seta3.innerText = 'arrow_forward_ios'
   seta4.innerText = 'arrow_forward_ios'
   seta5.innerText = 'arrow_forward_ios'
   seta1.innerText = 'arrow_forward_ios'
   seta7.innerText = 'arrow_forward_ios'
   seta8.innerText = 'arrow_forward_ios' 

    // COR DA SETA
       seta6.style.color = '#2563EB'

   seta1.style.color = '#565C68'
   seta2.style.color = '#565C68'
   seta3.style.color = '#565C68'
   seta4.style.color = '#565C68'
   seta5.style.color = '#565C68'
   seta7.style.color = '#565C68'
   seta8.style.color = '#565C68'
}


// ALEMANHA APARECE
function alemanhaAparecer() {
    alemanha.style.display = 'block'

    portugual.style.display = 'none'
    estadosUnidos.style.display = 'none'
    canada.style.display = 'none'
    australia.style.display = 'none'
    novaZelandia.style.display = 'none'
    holanda.style.display = 'none'
    irlanda.style.display = 'none'

    seta7.innerText = 'keyboard_arrow_down'

   seta2.innerText = 'arrow_forward_ios'
   seta3.innerText = 'arrow_forward_ios'
   seta4.innerText = 'arrow_forward_ios'
   seta5.innerText = 'arrow_forward_ios'
   seta6.innerText = 'arrow_forward_ios'
   seta1.innerText = 'arrow_forward_ios'
   seta8.innerText = 'arrow_forward_ios'


   // COR DA SETA
     seta7.style.color = '#2563EB'

   seta1.style.color = '#565C68'
   seta2.style.color = '#565C68'
   seta3.style.color = '#565C68'
   seta4.style.color = '#565C68'
   seta5.style.color = '#565C68'
   seta6.style.color = '#565C68'
   seta8.style.color = '#565C68'
}


// AUSTRALIA APARECE
function australiaAparecer() {
    australia.style.display = 'block'

    portugual.style.display = 'none'
    estadosUnidos.style.display = 'none'
    alemanha.style.display = 'none'
    canada.style.display = 'none'
    novaZelandia.style.display = 'none'
    holanda.style.display = 'none'
    irlanda.style.display = 'none'


    seta8.innerText = 'keyboard_arrow_down'

    seta2.innerText = 'arrow_forward_ios'
    seta3.innerText = 'arrow_forward_ios'
    seta4.innerText = 'arrow_forward_ios'
    seta5.innerText = 'arrow_forward_ios'
    seta6.innerText = 'arrow_forward_ios'
    seta7.innerText = 'arrow_forward_ios'
    seta1.innerText = 'arrow_forward_ios'


    // COR DA SETA
     seta8.style.color = '#2563EB'

   seta1.style.color = '#565C68'
   seta2.style.color = '#565C68'
   seta3.style.color = '#565C68'
   seta4.style.color = '#565C68'
   seta5.style.color = '#565C68'
   seta6.style.color = '#565C68'
   seta7 .style.color = '#565C68'
}   


//PAIS PORTUGUAL APARECE!
function portugualAparecer() {
    portugual.style.display = 'block'

    australia.style.display = 'none'
    estadosUnidos.style.display = 'none'
    alemanha.style.display = 'none'
    canada.style.display = 'none'
    novaZelandia.style.display = 'none'
    holanda.style.display = 'none'
    irlanda.style.display = 'none'


    seta1.innerText = 'keyboard_arrow_down'

    seta3.innerText = 'arrow_forward_ios'
    seta4.innerText = 'arrow_forward_ios'
    seta5.innerText = 'arrow_forward_ios'
    seta6.innerText = 'arrow_forward_ios'
    seta7.innerText = 'arrow_forward_ios'
    seta8.innerText = 'arrow_forward_ios'
    seta2.innerText = 'arrow_forward_ios'


    // COR DA SETA
      seta1.style.color = '#2563EB'

   seta8.style.color = '#565C68'
   seta2.style.color = '#565C68'
   seta3.style.color = '#565C68'
   seta4.style.color = '#565C68'
   seta5.style.color = '#565C68'
   seta6.style.color = '#565C68'
   seta7 .style.color = '#565C68'
}
