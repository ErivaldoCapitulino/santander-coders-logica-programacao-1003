const pessoas = [
  { nome: "João", idade: 22 },
  { nome: "Maria", idade: 17 },
  { nome: "Pedro", idade: 18 },
  { nome: "Ana", idade: 22 },
  { nome: "Carlos", idade: 16 },
];

// Utilize o método "every" para verificar se todos os alunos têm idade maior ou igual a 18 anos.

const maior = (currentValue) => currentValue.idade >= 18;

if(pessoas.every(maior)) {
  console.log("Todos os alunos têm idade maior ou igual a 18 anos.");
} else {
  console.log("Todos os alunos não têm idade maior ou igual a 18 anos.");
}

// Utilize o método "every" novamente para verificar se todos os alunos têm nome com mais de 3 caracteres.

const caracteres = pessoas.every((pessoa) => pessoa.nome.length > 3);

if (caracteres) {
  console.log("Todos os alunos têm nome com mais de 3 caracteres");
} else {
  console.log("Todos os alunos não têm nome com mais de 3 caracteres");
}

// Utilize o método "every" mais uma vez para verificar se todos os alunos têm idade e nome definidos.

const nomeIdadeDefinido = pessoas.every(
  (pessoa) => pessoa.nome !== undefined && pessoa.idade !== undefined
);

if (nomeIdadeDefinido) {
  console.log("Todos os alunos têm nome e idade definidos.");
} else {
  console.log("Pelo menos um aluno não tem nome e/ou idade definidos.");
}
