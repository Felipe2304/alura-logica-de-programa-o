let $quadro = document.querySelector('canvas')
let desenhar = $quadro.getContext('2d')
desenhar.fillStyle = 'black'
desenhar.fillRect(0,0,600,400)


const desenharBolinhas = (cordenada)=>{
  let eixoX = cordenada.pageX - $quadro.offsetLeft
  let eixoY = cordenada.pageY - $quadro.offsetTop
  desenhar.fillStyle = 'red'
  desenhar.beginPath()
  desenhar.arc(eixoX,eixoY,10,0,2*3.14)
  desenhar.fill()
  console.log(`${eixoX} ${eixoY} `)
  
}

$quadro.onclick = desenharBolinhas