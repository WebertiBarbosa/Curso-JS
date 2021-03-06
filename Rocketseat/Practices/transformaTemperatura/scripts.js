function transformaGrau(grau){
  const celsiusExiste = grau.toUpperCase().includes("C")
  const fahrenheitExiste = grau.toUpperCase().includes("F")

  //fluxo de erro
  if(!celsiusExiste && !fahrenheitExiste){
    throw new Error("Grau não identificado")
  }

  // fluxo ideal F -> C
  let updateGrau = Number(grau.toUpperCase().replace("F", ""));
  let formula = fahrenheit => (fahrenheit - 32) * 5/9
  let grauSinal = "C"

  //fluxo alternativo C -> F
  if(celsiusExiste){
    updateGrau = Number(grau.toUpperCase().replace("C", ""));
    formula = celsius => celsius * 9/5 + 32
    grauSinal = "F"
  }

  return formula(updateGrau) + grauSinal
}

try {
  console.log(transformaGrau('10C'))
  console.log(transformaGrau('50F'))
  transformaGrau('50z')
} catch(e){
  console.log(e)
}

