/*
  Coloque as fotos em src/assets/ e troque os null por require.
  Ex.: hero: require('./hero.png')
  Enquanto for null, o componente <Photo> mostra um placeholder.
*/
export const images = {
  hero: require('./fotos/pretinha.jpeg'),
  equipe: require('./fotos/colaboradores.jpeg'),
  acao1: require('./fotos/doacoes.jpeg'),
  acao2: require('./fotos/pretinha.jpeg'),
  acao3: null,
  mascote: null,
  avatar1: null,
  avatar2: null,
  avatar3: null,
  qrcode: null,
  historiaFundadoras: require('./fotos/inelsa-ieline.jpeg'),
  aisha: require('./fotos/aisha.jpeg'),
  historiaLares: null, // garagem / casas das voluntárias
  historiaRotas: require('./fotos/rota.jpeg'),
  historiaCastracao: require('./fotos/acoes-1.jpeg'),
};
