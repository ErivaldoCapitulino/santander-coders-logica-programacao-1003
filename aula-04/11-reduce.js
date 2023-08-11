const alunos = [
  { nome: "Ana", notas: [7, 8, 9] },
  { nome: "Pedro", notas: [5, 6, 7] },
  { nome: "Maria", notas: [9, 8, 10] },
  { nome: "João", notas: [6, 7, 8] },
  { nome: "Lucas", notas: [8, 9, 7] },
  { nome: "Julia", notas: [10, 8, 9] },
];

// Utilize o método "map" para criar um novo objeto com o nome e a média de cada aluno.

const alunosResultado = alunos.map((aluno) => {
  const media =
    aluno.notas.reduce((total, nota) => total + nota) / aluno.notas.length;
  return `nome: ${aluno.nome}
   media: ${media}`;
});

console.log(`Alunos com média: ${alunosResultado}`);