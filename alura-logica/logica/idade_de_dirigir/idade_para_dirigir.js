const $texto  = document.querySelector('.texto')
let idade = parseInt(prompt('digite sua idade '))
let possuiHabilitacao  = prompt('tem carteira de habilitação? responda com s ou n')
console.log(possuiHabilitacao)
let idadePermitida = 18

if(idade >= idadePermitida && possuiHabilitacao == 's'){
  $texto.textContent = 'ok pode dirigir'
}else if (idade >= idade && possuiHabilitacao == 'n'){
  $texto.textContent = 'você tem a idade permitida , mas não possui carteira de habilitação ,portanto não pode dirigir'
}else{
  $texto.textContent = 'não pode dirigir'
}