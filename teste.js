// Somando os numeros de um array
// const numeros = [10, 20, 30, 40]

// let soma = 0

// for (let i = 0; i < numeros.length; i++) {
//   soma = soma + numeros[i]
// }

// console.log(soma)

//############################################

// Maior numero de um array
// // let num = [50, 990, 1000]

//  let maiorNum = Math.max(...num)

// console.log(maiorNum)

//############################################

// const numeros = [1, 2, 2, 3, 1, 1]

// let contador = {}

// for (let num of numeros) {
//   if (contador[num]) {
//     contador[num] = contador[num] + 1
//   } else {
//     contador[num] = 1
//   }
// }

// for (let chave in contador) {
//   console.log(chave + ": " + contador[chave])
// }


//############################################

// let num = [50, 990, 1000] 

// let rev = num.reverse()

// console.log(rev)



//############################################


let num = [12, 5, 90, 10, 11]

let acu = 0


for(let i = 0; i < num.length; i++) {
    if (num[i] > 10) {
       
        acu = acu + num[i]
       
        
    }
}


console.log(acu)


//############################################


// let button = document.getElementById('div')

// button.addEventListener("click", (eve)=>{
//     eve.target
//     eve.classList.add("destaque")
// })
