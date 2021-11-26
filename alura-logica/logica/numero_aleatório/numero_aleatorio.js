const  $texto = document.querySelector('.texto')
let numeroAleatorio = Math.round(Math.random()*10) 

$texto.innerHTML = `<p> valor gerado ${numeroAleatorio}</p>`

let tentativas = 1
while(tentativas <= 4){
  let palpite = parseInt(prompt('digite um numero entre 0 e 10'))
  if(palpite == numeroAleatorio){
    $texto.innerHTML += '<p>parabens , vc acertou o numero aleatorio </p>'
    break
  }else{
    $texto.innerHTML += '<p>que pena vc errou o  numero aleatorio </p>'
  }
  tentativas++
}

