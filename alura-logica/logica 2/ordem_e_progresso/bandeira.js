let tela = document.querySelector('canvas')
let pincel = tela.getContext('2d')

pincel.fillStyle = 'green'
pincel.fillRect(0,0,600,400)

pincel.beginPath()
pincel.fillStyle = 'yellow'
pincel.moveTo(50 ,200)
pincel.lineTo(300 ,50)
pincel.lineTo(550 ,200)
pincel.fill()

pincel.beginPath()
pincel.fillStyle = 'yellow'
pincel.moveTo(50 , 200)
pincel.lineTo(300 , 350)
pincel.lineTo(550 ,200)
pincel.fill()

pincel.beginPath()
pincel.fillStyle ='darkblue'
pincel.arc(300, 200, 100, 0, 2*3.14);
pincel.fill()