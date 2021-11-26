let loginCadastrado = 'felipeZika'
let senhaCadastrada = 'felipe2304'

let tentativas = 0 

while(tentativas < 3){
  let login = prompt("digite seu login")
  let senha = prompt('digite a senha')
  if(login == loginCadastrado && senha == senhaCadastrada){
    alert("tudo ok")
    break
  }else{
    alert('[ERRO] login ou senha estao invalidos , tente novamente ')
    tentativas+=1
    if(tentativas > 3){
      break
    }
  }
}

