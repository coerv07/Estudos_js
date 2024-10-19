var numeroSecreto = Math.floor(Math.random() * 9) + 1;
var ValorUser;
var tentativas = 0;



while (ValorUser !== numeroSecreto){
    ValorUser = prompt('Digite um numero')
    ValorUser = parseInt(ValorUser)

    if(isNaN(ValorUser)){
        console.log("Digite apenas numero");

    }
    else if (ValorUser <1 || numeroSecreto >10){
        console.log("Digite um valor entre 1 á 100");
    }
    else if (ValorUser > numeroSecreto){
        var user = prompt('Muito alto')
    }
    else if (ValorUser < numeroSecreto){
        var user = prompt('Muito baixo')
    }
    else{
        console.log('voce acertou')
        break
    }

    tentativas +=1
}
