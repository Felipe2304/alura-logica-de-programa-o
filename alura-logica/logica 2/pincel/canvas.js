let $tela = document.querySelector('.tela')
let pincel = $tela.getContext('2d')

pincel.fillStyle = 'white'
pincel.fillRect(0,0,600,400)

pincel.fillStyle = 'red'
pincel.fillRect(0, 0 , 200 , 400  )

pincel.fillStyle = 'green'
pincel.fillRect(400 , 0 , 200 , 400)

pincel.beginPath()
pincel.fillStyle = 'blue'
pincel.moveTo(300 , 200)
pincel.lineTo(200 , 400)
pincel.lineTo(400 , 400)
pincel.fill()

pincel.beginPath()
pincel.fillStyle = 'orange'
pincel.arc(300 , 200 , 50 , 0 ,2 * 3.14)
pincel.fill()