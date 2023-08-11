const alunos = [
  { nome: "Ana", idade: 20 },
  { nome: "Pedro", idade: 18 },
  { nome: "Maria", idade: 22 },
  { nome: "João", idade: 17 },
  { nome: "Lucas", idade: 19 },
  { nome: "Julia", idade: 21 },
];

// Utilize o método "filter" para criar um novo array com os alunos que têm idade maior ou igual a 18 anos.

const maiorIdade = alunos.filter((aluno) => aluno.idade >= 18);
console.log(maiorIdade);

// Utilize o método "filter" novamente para criar um novo array com os alunos que têm idade menor que 20 anos.

const menorIdade = alunos.filter((aluno) => aluno.idade < 20);
console.log(menorIdade);

// Utilize o método "filter" mais uma vez para criar um novo array com os alunos cujo nome começa com a letra "J".

const nomeComecaComJ = alunos.filter((aluno) => aluno.nome[0] === "J");
console.log(nomeComecaComJ);