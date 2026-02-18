const itens = document.querySelectorAll(".cards-plano-de-estudo")

itens.forEach((item, index) => {
  item.addEventListener("click", () => {
    
    item.classList.toggle("corFundo")
    

    salvarEstado()
  })
})

function salvarEstado() {
  const estados = []

  itens.forEach(item => {
    estados.push(item.classList.contains("corFundo"))

  })

  localStorage.setItem("estadoItens", JSON.stringify(estados))
}


// #######################################################################################################


function carregarEstado() {
  const estados = JSON.parse(localStorage.getItem("estadoItens"))

  if (!estados) return

  itens.forEach((item, index) => {
    if (estados[index]) {
      item.classList.add("corFundo")
    }
  })
}

carregarEstado()