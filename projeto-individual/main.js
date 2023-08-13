const listaDeClientes = require("./listaDeClientes");
const enviarEmailClientes = require("./enviarEmailClientes");

const novoVeiculo = `
- Novo Modelo Chevrolet S10 Midnight: O carro dos seus sonhos com tecnologia de ponta e design elegante.
- SUV Familiar Honda ZR-V: Perfeito para viagens em família, com espaço e conforto incomparáveis.
- Esportivo Volkswagen Virtus GTS: Sinta a adrenalina com o nosso novo esportivo de alta performance.
`;
const maisVendido = `
- Carro mais Vendido Chevrolet Onix: Este modelo tem sido um sucesso absoluto de vendas, com sua economia de combustível e conforto excepcionais.
- SUV Popular Volkswagen T-Cross: Um dos SUVs mais procurados, oferecendo espaço e versatilidade para todas as suas aventuras.
- Carro Compacto Renault Kwid: Com seu design elegante e ótimo desempenho, este carro compacto é uma escolha popular entre nossos clientes.
`;
const aquisicao = `
- Financiamento sem entrada em até 60x: Adquira o seu novo carro com parcelas que cabem no seu bolso.
- Taxas de juros reduzidas: Aproveite as taxas de juros mais baixas do mercado para financiar o seu veículo.
- Oferta de troca do seu carro usado: Traga seu carro usado e receba um desconto exclusivo na compra do seu novo veículo.
`;

enviarEmailClientes(listaDeClientes, novoVeiculo, maisVendido, aquisicao);
