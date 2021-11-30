let $quadro = document.querySelector("canvas");
let pintar = $quadro.getContext("2d");
let cor = document.querySelector('input')
let valorCor = cor.value

pintar.fillStyle = "black";
pintar.fillRect(0, 0, 600, 400);

let botaoPrecionado = false;

const pintarCirculo = (eventos) => {
  if (botaoPrecionado) {
    let eixoX = eventos.pageX - $quadro.offsetLeft;
    let eixoY = eventos.pageY - $quadro.offsetTop;
    pintar.fillStyle = valorCor;
    pintar.beginPath();
    pintar.arc(eixoX, eixoY, 10, 0, 2 * 3.14);
    pintar.fill();
  }
};

$quadro.onmousemove = pintarCirculo

$quadro.onmousedown = function(){
  botaoPrecionado = true
 }

 $quadro.onmouseup = function(){
   botaoPrecionado = false
 }

