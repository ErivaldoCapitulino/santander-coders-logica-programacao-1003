const empregados = [
  { nome: "João", salario: 1200 },
  { nome: "Maria", salario: 1500 },
  { nome: "Pedro", salario: 1800 },
  { nome: "Ana", salario: 1400 },
  { nome: "Carlos", salario: 2000 },
];

// Utilize o método "some" para verificar se pelo menos um dos empregados tem salário maior ou igual a R$ 1.500,00.

const valorMaiorIgual = empregados.some((empregado) => {
  return empregado.salario >= 1500;
});

console.log(valorMaiorIgual);

// Utilize o método "some" novamente para verificar se pelo menos um dos empregados tem salário menor ou igual a R$ 1.000,00.

const valorMenorIgual = empregados.some((empregado) => {
  return empregado.salario <= 1000;
});

console.log(valorMenorIgual);
