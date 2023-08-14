const construirCorpoEmail = require("./construirCorpoEmail");
const getDiaSemana = require("./getDiaSemana");
const enviarEmail = require("./envia-email");

const verificaDiaSemana = () => {
  const diaDaSemana = getDiaSemana();
  if (diaDaSemana !== 1) {
    console.log("Hoje não é segunda-feira. Emails não serão enviados.");
    return;
  }
};

const enviarEmailClientes = (
  listaDeClientes,
  novoVeiculo,
  maisVendido,
  aquisicao
) => {
  verificaDiaSemana();

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
