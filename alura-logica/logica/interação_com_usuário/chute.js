const $entradaDados = document.querySelector(".entrada-dados");
const $botao = document.querySelector(".botão");

const gerarNumero = () => {
  return Math.round(Math.random() * 10);
};

const armazenarNumero = (quantidade) => {
  let listaNumeros = [];
  let numeros = 1;

  while (numeros <= quantidade) {
    let numeroAleatorio = gerarNumero();
    if (numeroAleatorio != 0) {
      
      let achou = false;

      for (let i = 0; i < quantidade; i++) {
        if (numeroAleatorio == listaNumeros[i]) {
          achou = true;
          break;
        }
      }

      if (achou == false) {
        listaNumeros.push(numeroAleatorio);
        numeros++;
      }
    }
  }
  console.log(listaNumeros)
  return listaNumeros;
};

let listaNumeros = armazenarNumero(3);
const verificar = () => {
  let numeroUsuario = Number($entradaDados.value);

  let acertou = false;
  for (let i = 0; i < listaNumeros.length; i++) {
    if (numeroUsuario == listaNumeros[i]) {
      alert("parabens voce acertou miseravi");
      acertou = true;
      break;
    }
    if (acertou == false) {
      alert("errou");
    }
  }
};

$botao.addEventListener("click", function () {
  verificar();
});
