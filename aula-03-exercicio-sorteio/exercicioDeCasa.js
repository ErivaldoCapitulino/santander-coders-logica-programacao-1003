// EXERCICIO
// Você foi convidado para desenvolver um script para realizar os sorteios para uma casa
// de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
// Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math:
// Math.round(Math.random() * 10)

const numeroSorteado = [];
const numeroMaximo = 6;

while (numeroSorteado.length < numeroMaximo) {
  const numero = sortear();
  if (!numeroSorteado.includes(numero)) {
    numeroSorteado.push(numero);
  }
}

function sortear() {
  const aleatorio = Math.round(Math.random() * (60 - 1) + 1);
  return aleatorio;
}

console.log("Números sorteados: ", numeroSorteado);
