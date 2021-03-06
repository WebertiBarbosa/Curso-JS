let saldo = {
  receitas: [100.00, 202.00, 45.00, 12.00],
  despesas: [50.00, 45.00, 89.56, 32.32]
}


function soma(array){
  let total = 0
  for(let valor of array){
    total += valor
  }
  return total
}

function calculaBalanco(){
  const somaReceitas = soma(saldo.receitas)
  const somaDespesas = soma(saldo.despesas)

  const total = somaReceitas - somaDespesas
  
  const estaOk = total >= 0

  let balancoTexto = 'negativo'
  
  if(estaOk) {
    balancoTexto = 'positivo'
  }
  console.log(`Seu saldo é ${balancoTexto} no valor de ${total.toFixed(2)}BRL`)
}


calculaBalanco(saldo)