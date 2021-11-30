let $quadro = document.querySelector("canvas");
let desenhar = $quadro.getContext("2d");

desenhar.fillStyle = "white";
desenhar.fillRect(0, 0, 600, 400);

let raio = 10;
const desenharBolinhas = (x, y, raio, cor) => {
  desenhar.fillStyle = cor;
  desenhar.beginPath();
  desenhar.arc(x, y, raio, 0, 2 * Math.PI);
  desenhar.fill();
};

const limparQuadro = () => {
  desenhar.clearRect(0, 0, 600, 400);
};

const desenhandoAlvo = (x, y) => {
  desenharBolinhas(x, y, raio + 20, "red");
  desenharBolinhas(x, y, raio + 10, "white");
  desenharBolinhas(x, y, raio, "red");
};
const cordenadaAleatoria = (maximo) => {
  return Math.floor(Math.random() * maximo);
};

let xAleatorio;
let yAleatorio;

const atualizarJogo = () => {
  limparQuadro();
  xAleatorio = cordenadaAleatoria(600);
  yAleatorio = cordenadaAleatoria(400);

  desenhandoAlvo(xAleatorio, yAleatorio);
};

const dispararAlerta = (eventos) => {
  let eixoX = eventos.pageX - $quadro.offsetLeft;
  let eixoY = eventos.pageY - $quadro.offsetTop;

  if (
    eixoX < xAleatorio + raio &&
    eixoX > xAleatorio - raio &&
    eixoY < yAleatorio + raio &&
    eixoY > yAleatorio - raio
  ) {
    alert("parabéns acertou");
  }
};

$quadro.onclick = dispararAlerta;

setInterval(atualizarJogo, 1000);
