const $caixaTexto = document.querySelector('.caixa-texto')
const $botão = document.querySelector('.botão')
let $valorInformado = Number($caixaTexto.value)

$caixaTexto.focus()

const verificar = ()=>{
  let numeroAleatorio = Math.round(Math.random()*10)

  if(numeroAleatorio != $valorInformado){
    alert('seu palpite esta errado ')
  }else if(numeroAleatorio == $valorInformado){
    alert('parabens vc acertou o numero aleatorio')
  }
  
  $caixaTexto.focus()
}

$botão.addEventListener('click', function(){
  verificar()
})