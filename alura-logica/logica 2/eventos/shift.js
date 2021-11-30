let $quadro = document.querySelector("canvas");
let desenhar = $quadro.getContext("2d");

desenhar.fillStyle = "black";
desenhar.fillRect(0, 0, 600, 400);

let raio = 10
const desenharBolinhas = (eventos) => {
  let eixoX = eventos.pageX - $quadro.offsetLeft;
  let eixoY = eventos.pageY - $quadro.offsetTop;
  let shift = eventos.shiftKey;
  let alt = eventos.altKey
  if(shift && alt){
    alert('clique um por vez')
  }else if(shift && raio + 10 <=40){
    raio= raio + 10
  }else if(alt && raio -5 >= 10){
    raio = raio -5
  }
  desenhar.fillStyle = 'red';
  desenhar.beginPath();
  desenhar.arc(eixoX, eixoY, raio, 0, 2 * 3.14);
  desenhar.fill();
};


$quadro.onclick = desenharBolinhas;
