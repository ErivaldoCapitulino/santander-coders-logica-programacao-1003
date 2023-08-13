const lugares = [
  { nome: "Sala de Reuniões", capacidade: 8 },
  { nome: "Auditório", capacidade: 50 },
  { nome: "Sala de Treinomento", capacidade: 20 },
  { nome: "Sala de Conferências", capacidade: 30 },
  { nome: "Sala de Estudos", capacidade: 12 },
];

// Utilize o método "find" para encontrar o primeiro lugar que tenha capacidade máxima de pelo menos 10 pessoas.

const capacidadeMaxima = lugares.find((lugar) => lugar.capacidade >= 10);
console.log(capacidadeMaxima);

// Utilize o método "find" novamente para encontrar o primeiro lugar que tenha capacidade máxima de pelo menos 25 pessoas.

const capacidadeMaxima25 = lugares.find((lugar) => lugar.capacidade >= 25);
console.log(capacidadeMaxima25);

// Utilize o método "find" mais uma vez para encontrar o primeiro lugar que tenha capacidade máxima de pelo menos 40 pessoas.

const capacidadeMaxima40 = lugares.find((lugar) => lugar.capacidade >= 40);
console.log(capacidadeMaxima25);
