const places = [
  {
    title: "Limpezas Mudanças",
    description:
      "Limpeza pré e pós-mudança. Se vai vai mudar de casa esta é a limpeza que necessita. Limpamos tudo ao pormenor desde o interior dos armários ao patamar de entrada.",
    imageUrl: process.env.PUBLIC_URL + "/assets/mudancas.jpg",
    time: 1000,
  },
  {
    title: "Limpeza de Manutenção",
    description:
      "Limpeza de manutenção da sua casa: diário, semanal, bissemanal, quinzenal ou o que necessitar (varrer, aspirar, limpar e lavar). Exclui limpeza de interiores de armários e eletrodomésticos.  ",
    imageUrl: process.env.PUBLIC_URL + "/assets/kitchen.jpg",
    time: 1000,
  },
  {
    title: "Limpezas Comerciais",
    description:
      "Limpezas realizadas em horário pós-laboral, sem interferir com o seu trabalho. Aspiração, remoção da sujidade e desinfeção, de acessos privados e públicos, corredores, secretárias e equipamentos. ",
    imageUrl: process.env.PUBLIC_URL + "/assets/escritorio.jpg",
    time: 1000,
  },
];

export default places;
// Exclui limpezas profundas, limpezas de humidade, limpezas pós-obra, limpeza de interiores de armários e eletrodomésticos, confeção de refeições, limpeza de paredes, tetos e portas, limpeza de zonas de animais de estimação e cuidado de plantas, limpeza de calcário, gordura, bolores ou sujidade entranhada.
