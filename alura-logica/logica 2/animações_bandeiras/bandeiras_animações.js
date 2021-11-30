const bandeiraBrasileira = () => {
  let tela = document.querySelector("canvas");
  let desenhar = tela.getContext("2d");

  desenhar.fillStyle = "green";
  desenhar.fillRect(0, 0, 600, 400);

  desenhar.beginPath();
  desenhar.fillStyle = "yellow";
  desenhar.moveTo(50, 200);
  desenhar.lineTo(300, 50);
  desenhar.lineTo(550, 200);
  desenhar.fill();

  desenhar.beginPath();
  desenhar.fillStyle = "yellow";
  desenhar.moveTo(50, 200);
  desenhar.lineTo(300, 350);
  desenhar.lineTo(550, 200);
  desenhar.fill();

  desenhar.beginPath();
  desenhar.fillStyle = "darkblue";
  desenhar.arc(300, 200, 100, 0, 2 * 3.14);
  desenhar.fill();
};

const bandeiraDaAlemanha = () => {
  let $quadro = document.querySelector("canvas");
  let desenhar = $quadro.getContext("2d");
  desenhar.beginPath()
  desenhar.fillstyle = "black";
  desenhar.fillRect(0, 0, 600, 400);
  desenhar.beginPath();
  desenhar.fillStyle = "red";
  desenhar.fillRect(0, 130, 600, 130);

  desenhar.beginPath();
  desenhar.fillStyle = "yellow";
  desenhar.fillRect(0, 250, 600, 150);
};

let bandeiraBrasil = false;

const animacaoBandeira = () => {
  if (bandeiraBrasil) {
    bandeiraBrasileira();
  } else {
    bandeiraDaAlemanha();
  }
  bandeiraBrasil = !bandeiraBrasil
};

setInterval(animacaoBandeira, 3000);
