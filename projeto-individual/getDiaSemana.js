const getDiaSemana = () => {
  const dia = new Date();
  return dia.getDay();
};

module.exports = getDiaSemana;
