let ano2015 = [50, 20, 25, 5];
let ano2016 = [65, 20, 13, 2];
let cores = ["blue", "green", "yellow", "red"];

const criarRetangulos = (x, y, largura, altura, cor) => {
  let $tela = document.querySelector("canvas");
  let desenhar = $tela.getContext("2d");

  desenhar.fillStyle = cor;
  desenhar.fillRect(x, y, largura, altura);
  desenhar.strokeStyle = "black";
  desenhar.strokeRect(x, y, largura, altura);
};

const adicionarTexto = (x, y, texto) => {
  let $tela = document.querySelector("canvas");
  let escreverTexto = $tela.getContext("2d");

  escreverTexto.font = "15px arial";
  escreverTexto.fillStyle = "black";
  escreverTexto.fillText(texto, x, y);
};

const modularBarraGrafico = (x, y, ano, cor, texto) => {
  adicionarTexto(x, y - 10, texto);
  let contadorAno = 0;

  for (let i = 0; i < ano.length; i++) {
    let alturaGrafico = ano[i];
    criarRetangulos(x, y + contadorAno, 50, alturaGrafico, cor[i]);
    contadorAno += alturaGrafico;
  }
};

modularBarraGrafico(50, 50, ano2015, cores, "2015");
modularBarraGrafico(150, 50, ano2016, cores, "2016");
