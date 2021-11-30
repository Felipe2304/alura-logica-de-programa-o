let tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");
const imprimirEsquadro = (xa, ya, xc, yc, cor) => {
  pincel.beginPath();
  pincel.fillStyle = cor;
  pincel.moveTo(xa, ya);
  pincel.lineTo(xc, yc);
  pincel.lineTo(xa, yc);
  pincel.fill();
};
imprimirEsquadro(50, 50, 400, 400, "black");
imprimirEsquadro(100, 175, 275, 350, "white");

// pincel.beginPath()
// pincel.fillStyle = 'black'
// pincel.moveTo(50 , 50)
// pincel.lineTo(50 , 400)
// pincel.lineTo(400 , 400)
// pincel.fill()

// pincel.beginPath()
// pincel.fillStyle = 'white'
// pincel.moveTo(100 , 175)
// pincel.lineTo(100 , 350)
// pincel.lineTo(275 , 350)
// pincel.fill()
