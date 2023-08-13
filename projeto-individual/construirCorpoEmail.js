const construirCorpoEmail = (
  nomeCliente,
  novoVeiculo,
  maisVendido,
  aquisicao
) => {
  const corpoEmail = `
      Olá ${nomeCliente},

      Temos ótimas novidades para você! Confira os novos veículos em nossa loja, incluindo:

      ${novoVeiculo}

      Além disso, não deixe de conferir os veículos mais vendidos da última semana:

      ${maisVendido}

      E não perca as incríveis condições para aquisição:

      ${aquisicao}

      Esperamos vê-lo em breve em uma de nossas lojas!

      Atenciosamente,
      Equipe CarStore
  `;

  return corpoEmail;
};

module.exports = construirCorpoEmail;
