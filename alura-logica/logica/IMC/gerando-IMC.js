let eu  = 'Felipe'
let peso = 85
let altura = 1.79
let amigo = 'marcos'
let pesoDoAmigo = 60
let alturaDoAmigo = 1.65

const calcularImc = (peso , altura)=>{
  let imc = peso / (altura*altura)

  return imc
}
let meuImc = calcularImc(peso , altura)
let amigoImc = calcularImc(pesoDoAmigo , alturaDoAmigo)

let mediaImc = (meuImc + amigoImc )/ 2
console.log(mediaImc)