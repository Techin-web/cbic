import React from 'react';
import Carousel from '../../../../components/Carousel';
import CarouselItem from './CarouselItem';

const data = [
  {
    id: 1,
    description: 'A CBIC segue inovando. Um novo passo para o conhecimento.',
    title: 'Cursos Online',
    buttonTitle: 'Acompanhe',
    buttonUrl: 'https://cbic.org.br/cursos-online',
    scrollInstruction: true,
    skipButton: true,
    colors: ['transparent', 'transparent'],
  },
  {
    id: 2,
    description:
      'Encontre em um único lugar todos os Seguros necessários para sua empresa e para cada etapa da construção.',
    title: 'CBIC Serviços',
    buttonTitle: 'Contrate Agora',
    buttonUrl: 'https://cbicservicos.com.br',
    skipButton: true,
    colors: ['rgba(15, 65, 90, .4)', 'rgba(15, 65, 90, .6)'],
  },
  {
    id: 3,
    description: 'Fique por dentro das transmissões ao vivo da CBIC.',
    title: 'Agenda da construção',
    buttonTitle: 'Participar',
    buttonUrl: 'https://cbic.org.br/agenda-da-construcao',
    lastIndex: true,
    colors: [
      'rgba(255, 115, 12, 0.9)',
      'rgba(255, 115, 12, 0.7)',
      'rgba(255, 290, 12, 0.5)',
    ],
  },
];

export default function Video({navigation}) {
  function closeCarousel() {
    navigation.navigate('Menu');
  }

  return (
    <Carousel
      data={data}
      CarouselItem={CarouselItem}
      closeCarousel={closeCarousel}
    />
  );
}
