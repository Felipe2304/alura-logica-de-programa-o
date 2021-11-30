let $tela = document.querySelector('canvas')
let pincel = $tela.getContext('2d')

pincel.fillStyle = 'lightgray'
pincel.fillRect(0,0,600,400)

const desenhaQuadrado = (x,y,cor)=>{
  pincel.fillStyle = cor
  pincel.fillRect(x,y,50,50)
  pincel.strokeRect(x,y,50,50)
  pincel.strokeStyle = 'red'
  pincel.fill()
}

desenhaQuadrado(0,0,'green')
desenhaQuadrado(50,0,'green')
desenhaQuadrado(100,0,'green')
desenhaQuadrado(150,0,'white')