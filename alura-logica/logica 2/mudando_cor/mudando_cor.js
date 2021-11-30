let $quadro = document.querySelector('canvas')
let desenhar = $quadro.getContext('2d')

let cores = ['blue','red','green']
let posicaoCor = 0

desenhar.fillStyle = 'black'
desenhar.fillRect(0,0,600,400)

const desenharBolinhas = (cordenadas)=>{
  let eixoX = cordenadas.pageX - $quadro.offsetLeft
  let eixoY = cordenadas.pageY - $quadro.offsetTop
  desenhar.fillStyle = cores[posicaoCor]
  desenhar.beginPath()
  desenhar.arc(eixoX, eixoY, 10, 0, 2 * 3.14);
  desenhar.fill()
}

const trocarCor = ()=>{
  posicaoCor++
  if(posicaoCor >= cores.length){
    posicaoCor = 0
  }
  return false
}

$quadro.oncontextmenu = trocarCor
$quadro.onclick = desenharBolinhas