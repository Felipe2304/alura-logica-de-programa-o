const $texto = document.querySelector('.texto')
let numeroFamiliares = parseInt(prompt('digite a quantidade de familiares '))
let numero = 1
let totalIdades = 0
while(numero <= numeroFamiliares){
  let idades = parseInt(prompt('digite as idades'))
  totalIdades= totalIdades + idades
  numero++
}

let mediaIdades = totalIdades / numeroFamiliares

$texto.textContent = `a media de idades dos familiares é de ${mediaIdades} anos`