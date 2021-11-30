let $tela = document.querySelector('canvas') 
let pincel = $tela.getContext('2d')

pincel.fillStyle = 'grey'
pincel.fillRect(0,0,600,400)

const criandoFormas = (x , y , cor)=>{
  pincel.fillStyle = cor
  pincel.fillRect(x,y,50,50)
  pincel.strokeRect(x,y,50,50)
  pincel.strokeStyle = 'green'
  pincel.fill()
}

for(let x = 0 ; x < 600 ; x+=50 ){
  criandoFormas(x , 0 , 'red')
  
}