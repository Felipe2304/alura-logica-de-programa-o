const  $texto = document.querySelector('.texto')
let nome = prompt('digite seu nome ')
let peso = prompt('digite seu peso')
let altura = prompt('digite sua altura')

const calcularImc = (peso, altura)=>{
  return peso / (altura*altura)
}

let imc = calcularImc(peso , altura)

$texto.innerHTML = `<p> ${nome} o resultado do seu imc é ${imc}</p>`

if(imc < 18 || imc > 35){
  $texto.innerHTML += '<p>seu imc esta desregulado de acordo com  a OMS </p>'
}else if(imc >= 18 && imc <= 35){
  $texto.innerHTML += '<p>seu imc esta em ordem  de acordo com  a OMS </p>'
}
