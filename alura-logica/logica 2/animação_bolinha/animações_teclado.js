let $quadro = document.querySelector("canvas");
let desenhar = $quadro.getContext("2d");

desenhar.fillStyle = "black";
desenhar.fillRect(0, 0, 600, 400);

const desenharBolinha = (x, y, raio) => {
  desenhar.fillStyle = "blue";
  desenhar.beginPath();
  desenhar.arc(x, y, raio, 0, 2 * Math.PI);
  desenhar.fill();
};

let eixoX = 20
let eixoY = 20

const limparQuadro = ()=>{
  desenhar.clearRect(0,0,600,400)
}

const animacaoBolinha = ()=>{
  limparQuadro()
  desenharBolinha(eixoX,eixoY, 10)
}

let cima = 38
let baixo = 40
let esquerda = 37
let direita = 39
let taxa = 10
const botaoTeclado = (eventos)=>{
 if(eventos.keyCode == cima){
   eixoY= eixoY + taxa
 }else if(eventos.keyCode == baixo){
   eixoY = eixoY - taxa
 }else if(eventos.keyCode == esquerda){
   eixoX = eixoX - taxa
 }else if(eventos.keyCode == direita){
   eixoX = eixoX + taxa
 }
}


document.onkeydown = botaoTeclado

setInterval(animacaoBolinha , 20)