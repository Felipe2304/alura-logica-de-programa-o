let  $quadro = document.querySelector('canvas');
    let  desenhar = $quadro.getContext('2d');

    desenhar.fillStyle = 'black';
    desenhar.fillRect(0, 0, 600, 400);

    let raio = 10;

    function desenhaCirculo(x, y, raio, cor) {

        desenhar.fillStyle = cor;
        desenhar.beginPath();
        desenhar.arc(x, y, raio, 0, 2 * Math.PI);
        desenhar.fill();
    }

    desenhaCirculo(300,200, raio + 20, 'red'); 
    desenhaCirculo(300,200, raio + 10, 'white');
    desenhaCirculo(300,200, raio, 'red'); 

    function dispara(evento) {

        let eixoX = evento.pageX - $quadro.offsetLeft;
        let eixoY = evento.pageY - $quadro.offsetTop;

       if((eixoX < 300 + raio) && (eixoX > 300 - raio) && (eixoY > 200 - raio) && (eixoY < 200 + raio)){
         alert('acertou o alvo')
       }
    }

    $quadro.onclick = dispara;