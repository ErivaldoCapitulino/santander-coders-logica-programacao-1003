const pizzas = [
  { sabor: "Mussarela", valor: 20 },
  { sabor: "Calabresa", valor: 25 },
  { sabor: "Marguerita", valor: 28 },
  { sabor: "Frango com Catupiry", valor: 32 },
  { sabor: "Portuguesa", valor: 30 },
];

// Utilize o método "forEach" para percorrer a lista de pizzas e imprimir no console o nome do sabor da pizza e seu valor.

pizzas.forEach((pizza) => {
  console.log(`Sabor: ${pizza.sabor}, Valor: R$${pizza.valor}`);
});

