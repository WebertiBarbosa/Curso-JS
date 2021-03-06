// let notas = 90

// if (notas >= 90){
//   console.log(notas = "A")
// } else if (notas >= 80 && notas <= 89) {
//   console.log(notas = "B")
// } else if (notas >= 70 && notas <= 79){
//   console.log(notas = "C")
// } else if (notas >= 60 && notas <= 69){
//   console.log(notas = "D")
// } else {
//   console.log(notas = "F")
// }


// let notas = 10

// let notaA = notas >= 90 && notas <= 100
// let notaB = notas >= 80 && notas <= 89
// let notaC = notas >= 70 && notas <= 79
// let notaD = notas >= 60 && notas <= 69
// let notaF = notas >= 0 && notas < 60

// let notaFinal

// if (notaA){
//   notaFinal = "A"
// } else if (notaB) {
//   notaFinal = "B"
// } else if (notaC){
//   notaFinal = "C"  
// } else if (notaD){
//   notaFinal = "D"  
// } else if (notaF) {
//   notaFinal = "F"
// } else {
      // notaFinal = "A nota não é válida."

// }
// console.log(notaFinal)



function verificaNota(nota) {
  
  let notaA = nota >= 90 && nota <= 100
  let notaB = nota >= 80 && nota <= 89
  let notaC = nota >= 70 && nota <= 79
  let notaD = nota >= 60 && nota <= 69
  let notaF = nota < 60 && nota >= 0

  let notaFinal

  if (notaA){
    notaFinal = "A"
  } else if (notaB) {
    notaFinal = "B"
  } else if (notaC){
    notaFinal = "C"  
  } else if (notaD){
    notaFinal = "D"  
  } else if (notaF) {
    notaFinal = "F"
  } else {
    notaFinal = "A nota não é válida."
  }
  return notaFinal
}


console.log(verificaNota(101))
console.log(verificaNota(-1))
console.log(verificaNota(0))
console.log(verificaNota(10))
console.log(verificaNota(60))
console.log(verificaNota(61))
console.log(verificaNota(70))
console.log(verificaNota(80))
console.log(verificaNota(90))
console.log(verificaNota(100))