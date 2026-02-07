
/**
 * Altere para 'true' se quiser usar as imagens da sua pasta 'public/'.
 * Altere para 'false' para usar os links de internet (padrão atual).
 */
const USE_LOCAL_IMAGES = true;

const EXTERNAL_IMAGES = {
  logo: 'https://i.ibb.co/KxxG9kNm/Generated-Image-February-06-2026-8-59-PM-1.png',
  carousel: [
    {
      url: 'https://i.ibb.co/jZ3YK1Sr/golf.jpg',
      title: 'Destaque no Avenida',
      description: 'Deixamos seu carro impecável pra desfilar no centro no final de semana.'
    },
    {
      url: 'https://i.ibb.co/gbjvXB3b/mustang.jpg',
      title: 'Limpeza e Polimento',
      description: 'Tiramos aqueles risquinhos chatos e devolvemos o brilho da pintura original.'
    },
    {
      url: 'https://i.ibb.co/w8pG8mT/camarored.jpg',
      title: 'Proteção de Pintura',
      description: 'Uma camada que protege contra o sol forte e a poeira das estradas de terra.'
    },
    {
      url: 'https://i.ibb.co/ynvT1L8p/camaro.jpg',
      title: 'Limpeza por Dentro',
      description: 'Cuidado total nos bancos e painel. Fica com aquele cheirinho bom de carro novo.'
    }
  ]
};

/**
 * Caminhos locais (dentro da pasta public do seu projeto)
 * Certifique-se de que os nomes dos arquivos batam com os que você colocar lá.
 */
const LOCAL_IMAGES = {
  logo: '/logo.png',
  carousel: [
    {
      url: '/golf.png',
      title: 'Destaque no Avenida',
      description: 'Deixamos seu carro impecável pra desfilar no centro no final de semana.'
    },
    {
      url: '/mustang.jpg',
      title: 'Limpeza e Polimento',
      description: 'Tiramos aqueles risquinhos chatos e devolvemos o brilho da pintura original.'
    },
    {
      url: '/camarored.png',
      title: 'Proteção de Pintura',
      description: 'Uma camada que protege contra o sol forte e a poeira das estradas de terra.'
    },
    {
      url: '/camaro.png',
      title: 'Limpeza por Dentro',
      description: 'Cuidado total nos bancos e painel. Fica com aquele cheirinho bom de carro novo.'
    }
  ]
};

export const IMAGES = USE_LOCAL_IMAGES ? LOCAL_IMAGES : EXTERNAL_IMAGES;

export const CONTACT = {
  whatsapp: 'https://wa.me/5535998811348' // Atualizado com o número fornecido
};

export const COLORS = {
  primary: '#facd0f',
  background: 'bg-zinc-950',
  text: 'text-white',
  textMuted: 'text-zinc-400',
  textDark: 'text-black',
};
