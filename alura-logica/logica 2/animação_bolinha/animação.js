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

const limparQuadro = () => {
  desenhar.clearRect(0, 0, 600, 400);
};

let raio = 20
let ordemDeCrescimento = 1
let eixoX = 30

const animacaoBolinha = () => {
  limparQuadro()
  if(eixoX >=600){
    eixoX = 30
  }
  if(raio < 20){
    ordemDeCrescimento = 1
  }else if(raio >=30 ){
    ordemDeCrescimento = -1
  }
  raio+=ordemDeCrescimento
  desenharBolinha(eixoX, 30, raio);
  eixoX++
};



setInterval(animacaoBolinha , 20)