/*
    for (inicialização; condição; incremento)
*/

    let valorTotal = 1000;
    let numParcelas = 5;
    let valorParcela = valorTotal / numParcelas;
    let i = 1

    for (; i <= numParcelas; i++) {
      console.log(`Parcela ${i}: R$ ${valorParcela}`);
    }
