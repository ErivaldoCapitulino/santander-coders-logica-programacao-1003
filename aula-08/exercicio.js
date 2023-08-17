/*
  Seja n o enésimo termo da sequência de Fibonacci, ele é calculado como:
  
  F(n) = F(n-1) + F(n-2)

  Ou seja, cada elemento da sequência é a soma dos dois anteriores, onde:
  
  F(1) = 0
  F(2) = 1

  Crie um script que pede ao usuário um termo qualquer da série de Fibonacci e ele exiba tal termo.

  Ex: 0, 1, 1, 2, 3, 5, 8, 13

*/
const gerarFibonnaci = (num) => {
  let fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  for (let i = 2; i < num; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci;
};
let fibonacci = gerarFibonnaci(8);
console.log(fibonacci);
