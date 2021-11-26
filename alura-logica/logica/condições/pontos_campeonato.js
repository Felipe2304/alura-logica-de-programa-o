const $texto = document.querySelector('.texto')

let vitorias = parseInt(prompt('digite o numeros de vitorias '))
let empates = parseInt(prompt('digite o numero de empates '))
let pontos = vitorias * 3 + empates
let pontosAnterior = 45

if(pontos > pontosAnterior){
  $texto.textContent = 'os pontos desta temporado foi superior a da temporada passada '
}else if(pontos < pontosAnterior){
  $texto.textContent = 'os pontos desta temporado foi inferior a da temporada passada '
}else if(pontos == pontosAnterior){
  $texto.textContent = 'os pontos desta temporado é idêntico a da temporada passada '
}