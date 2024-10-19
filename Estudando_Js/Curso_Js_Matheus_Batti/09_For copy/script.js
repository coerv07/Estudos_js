var numeroSecreto = Math.floor(Math.random() * 9) + 1;
console.log(numeroSecreto); // Exibe o número secreto para facilitar os testes
var tentativas = 0;
var user;

while (numeroSecreto !== user){
    user = prompt('digite')
    user = parseInt(user)

    if (isNaN(user)){
        console.log('Digite apenas numero')
    }
    if(numeroSecreto === user){
        console.log('Voce acertou')
        break
    }
}