const atletas = [
  { nome: "João", altura: 1.75, peso: 80 },
  { nome: "Maria", altura: 1.68, peso: 60 },
  { nome: "Pedro", altura: 1.8, peso: 70 },
  { nome: "Ana", altura: 1.65, peso: 55 },
  { nome: "Carlos", altura: 1.9, peso: 100 },
];

// Utilize o método "sort" para ordenar a lista de atletas em ordem crescente de peso.

const ordenarCrescentePeso = atletas.sort((a, b) => {
  return a.peso - b.peso;
});
console.log(ordenarCrescentePeso);

// Utilize o método "sort" novamente para ordenar a lista de atletas em ordem decrescente de altura.

const ordenarDecrescentePeso = atletas.sort((a, b) => {
  return b.altura - a.altura;
});
console.log(ordenarDecrescentePeso);
