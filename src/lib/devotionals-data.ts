import { PlaceHolderImages } from './placeholder-images';

export type Devotional = {
  id: string;
  title: string;
  day: number;
  reflection: string;
  verse: {
    text: string;
    reference: string;
  };
  coloringPageUrl: string;
  imageHint: string;
};

const devotionalsData: Devotional[] = [
  {
    id: 'david-e-golias',
    title: 'Davi e Golias: A Coragem que Vem de Deus',
    day: 1,
    reflection: `Hoje vamos conhecer a história de um jovem pastor chamado Davi. Ele era pequeno, mas tinha um coração gigante e cheio de fé em Deus. Um dia, um gigante muito mau chamado Golias desafiou todo o povo de Deus, mas ninguém tinha coragem de lutar com ele. Ninguém, exceto Davi! Davi não usou uma armadura pesada ou uma espada afiada. Ele usou o que sabia: sua funda e cinco pedrinhas. Mas sua arma mais poderosa era a sua confiança em Deus. Ele sabia que com Deus ao seu lado, nada era impossível. E adivinha? Davi venceu o gigante! Essa história nos ensina que não importa o nosso tamanho ou idade, quando confiamos em Deus, Ele nos dá a coragem para enfrentar qualquer 'gigante' em nossa vida, como o medo, a tristeza ou um problema na escola.`,
    verse: {
      text: 'O Senhor é a minha luz e a minha salvação; de quem terei medo?',
      reference: 'Salmos 27:1',
    },
    coloringPageUrl: PlaceHolderImages.find(p => p.id === 'devotional-1')?.imageUrl ?? '',
    imageHint: PlaceHolderImages.find(p => p.id === 'devotional-1')?.imageHint ?? '',
  },
  {
    id: 'arca-de-noe',
    title: 'A Arca de Noé: Obediência e Cuidado',
    day: 2,
    reflection: `Era uma vez um homem muito bom chamado Noé. Deus viu que o mundo estava cheio de maldade e decidiu que precisava começar de novo. Ele pediu a Noé para construir um barco gigante, uma arca, e colocar sua família e um casal de cada animal dentro. As pessoas riram de Noé. "Construir um barco no meio da terra seca? Que loucura!", diziam. Mas Noé obedeceu a Deus, mesmo sem entender tudo. Ele trabalhou por muitos anos, confiando na promessa de Deus. Quando a chuva começou, Noé, sua família e os animais estavam seguros dentro da arca. A obediência de Noé salvou a todos. Essa história nos mostra como é importante obedecer a Deus e aos nossos pais, mesmo quando não entendemos o porquê. A obediência é uma forma de mostrar nosso amor e confiança.`,
    verse: {
      text: 'Se me amais, guardareis os meus mandamentos.',
      reference: 'João 14:15',
    },
    coloringPageUrl: PlaceHolderImages.find(p => p.id === 'devotional-2')?.imageUrl ?? '',
    imageHint: PlaceHolderImages.find(p => p.id === 'devotional-2')?.imageHint ?? '',
  },
  {
    id: 'daniel-na-cova',
    title: 'Daniel na Cova dos Leões: A Oração tem Poder',
    day: 3,
    reflection: `Daniel era um homem que amava muito a Deus. Ele orava três vezes por dia, todos os dias. Alguns homens maus, que tinham inveja de Daniel, fizeram uma lei que proibia orar a qualquer um que não fosse o rei. Mas Daniel não parou de orar! Ele continuou falando com seu melhor amigo, Deus. Por causa disso, ele foi jogado em uma cova cheia de leões famintos. Que medo! Mas Deus enviou um anjo para fechar a boca dos leões, e Daniel não se machucou. A história de Daniel nos ensina que a oração é muito poderosa. Falar com Deus nos conecta a Ele, nos dá paz e nos protege. Nunca se esqueça de conversar com Deus todos os dias.`,
    verse: {
      text: 'Orem sem cessar.',
      reference: '1 Tessalonicenses 5:17',
    },
    coloringPageUrl: PlaceHolderImages.find(p => p.id === 'devotional-3')?.imageUrl ?? '',
    imageHint: PlaceHolderImages.find(p => p.id === 'devotional-3')?.imageHint ?? '',
  },
  {
    id: 'o-bom-samaritano',
    title: 'O Bom Samaritano: Amar o Próximo',
    day: 4,
    reflection: `Jesus contou uma parábola sobre um homem que foi assaltado e deixado ferido na estrada. Passaram por ele um sacerdote e um levita, pessoas importantes, mas eles não pararam para ajudar. Então, passou um samaritano - um tipo de pessoa que não era amiga do povo daquele homem. Mas o samaritano, ao ver o homem ferido, sentiu compaixão. Ele cuidou de suas feridas, o levou para um lugar seguro e pagou para que cuidassem dele. Jesus usou essa história para nos ensinar quem é o nosso 'próximo'. Não são apenas nossos amigos ou familiares. Nosso próximo é qualquer pessoa que precise da nossa ajuda. Deus quer que amemos e cuidemos de todos, sem olhar a quem.`,
    verse: {
      text: 'Ame o seu próximo como a si mesmo.',
      reference: 'Marcos 12:31',
    },
    coloringPageUrl: PlaceHolderImages.find(p => p.id === 'devotional-4')?.imageUrl ?? '',
    imageHint: PlaceHolderImages.find(p => p.id === 'devotional-4')?.imageHint ?? '',
  },
];

export function getDevotionals(): Devotional[] {
  return devotionalsData;
}

export function getDevotionalById(id: string): Devotional | undefined {
  return devotionalsData.find((d) => d.id === id);
}
