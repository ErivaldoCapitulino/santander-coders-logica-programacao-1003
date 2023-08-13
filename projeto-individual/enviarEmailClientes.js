const construirCorpoEmail = require("./construirCorpoEmail");
const getDiaSemana = require("./getDiaSemana");
const enviarEmail = require("./envia-email");

const enviarEmailClientes = (
  listaDeClientes,
  novoVeiculo,
  maisVendido,
  aquisicao
) => {
  const diaDaSemana = getDiaSemana();

  if (diaDaSemana !== 6) {
    console.log("Hoje não é segunda-feira. Emails não serão enviados.");
    return;
  }

  listaDeClientes.forEach((cliente) => {
    if (cliente.emailMarketing) {
      const corpoEmail = construirCorpoEmail(
        cliente.nome,
        novoVeiculo,
        maisVendido,
        aquisicao
      );
      enviarEmail(cliente.email, "Novidades da CarStore", corpoEmail);
      console.log(`E-mail enviado para ${cliente.nome}`);
    }
  });
};

module.exports = enviarEmailClientes;
