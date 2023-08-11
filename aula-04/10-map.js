const pessoas = [
  { nome: "João", altura: 1.75, peso: 80 },
  { nome: "Maria", altura: 1.68, peso: 60 },
  { nome: "Pedro", altura: 1.8, peso: 70 },
  { nome: "Ana", altura: 1.65, peso: 55 },
  { nome: "Carlos", altura: 1.9, peso: 100 },
];

// Utilize o método "map" para criar um novo array de objetos que contenha somente o nome e o IMC (índice de massa corporal) de cada pessoa, sendo que o IMC é calculado pela fórmula peso / altura² .

const imc = pessoas.map((pessoa) => {
  const resultado = pessoa.peso / (pessoa.altura * pessoa.altura);
  console.log(`IMC: ${resultado.toFixed(2)}`);
  if (resultado >= 40.0) {
    console.log("Obesidade Grave");
  } else if (resultado >= 30.0) {
    console.log("Obesidade");
  } else if (resultado >= 25) {
    console.log("Sobrepeso");
  } else if (resultado >= 18.5) {
    console.log("Normal");
  } else {
    console.log("Magreza");
  }
});
