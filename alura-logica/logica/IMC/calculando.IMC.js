
const $texto = document.querySelector('.texto')

const calculaImc = (peso , altura) =>{
  return peso/(altura*altura)
}

let nome = prompt('informe seu nome ')
let peso = prompt('informe seu peso')
let altura = prompt('informe sua altura')
let imc = calculaImc(peso , altura)

$texto.textContent = `${nome} seu IMC é ${imc}`
