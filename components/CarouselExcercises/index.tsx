import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NextLink from "next/link";
import { useState } from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { 
  Box,
  Text,
  Button,
  Image,
  useMediaQuery,
  Stack,
  ChakraComponent
} from "@chakra-ui/react";



export default function CarouselExcercises() {
  const [sliderRef, setSliderRef] = useState<any>(null)
  const [isLarger800] = useMediaQuery('min-width: 800px')
  
  const sliderSettings = {
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const ProjectCards = [
    {
      imageSrc: "/Flexao.png",
    },
    {
      imageSrc:'/Natacao.png',
    },
    {
        imageSrc:'/Barra.png',
    },
    {
        imageSrc:'/Corrida.png',
    },
    {
        imageSrc:'/Abdominal.png',
    },
  ]

  return (
    <Box 
        className='content'
    >
      <Slider ref={setSliderRef} {...sliderSettings}>
        {ProjectCards.map((card, index) => (
            <Stack 
                key={index} 
                className='card'
                padding={'15px'}
                align={'center'}
            >
                {/* <NextLink
                    href={'/Diets'}
                > */}
                    <Image 
                        src={card.imageSrc} 
                        className='card-image' 
                        boxSize={'100%'}
                        borderRadius={'100px'}
                    />
                {/* </NextLink> */}
                {/* <Box className='text-info'>
                <Box 
                    className='card-header'
                    textAlign='center'  
                >
                    <Text
                        fontSize={'26px'}
                        fontWeight={400}
                        color={'yellow.comfort'}
                    >{card.title}</Text>
                </Box>
                <Text
                    textAlign='justify'
                >
                    <Text>{card.description}</Text>
                </Text>
                </Box> */}
            </Stack>
        ))}
      </Slider>
    </Box>
  )
}

// https://www.tuasaude.com/dieta-para-aumentar-a-massa-muscular/
// const muscle_diet =
// `
// Café da manhã
// Dia 1: 2 fatias de pão integral com ovo e queijo + 1 xícara de café com leite
// Dia 2: 1 tapioca de frango e queijo + 1 copo de leite com cacau
// Dia 3: 1 copo de suco sem açúcar + 1 omelete com 2 ovos e frango

// Lanche da manhã
// Dia 1: Lanche da manhã
// Dia 2: 1 iogurte natural com mel e semente de chia
// Dia 3: 1 banana amassada com aveia e 1 colheres de pasta de amendoim

// Almoço/Jantar
// Dia 1: 4 colheres de sopa de arroz + 3 colheres de feijão + 150 g de patinho grelhado + salada crua de repolho, cenoura e pimentão
// Dia 2: 1 posta de salmão + batata doce cozida + salada refogada com azeite
// Dia 3: Macarronada de carne moída com macarrão integral e molho de tomate + 1 copo de suco

// Lanche da tarde
// Dia 1: 1 iogurte + 1 sanduíche integral de frango com requeijão 
// Dia 2: vitamina de fruta com 1 colher de pasta de amendoim + 2 colheres de aveia
// Dia 3: 1 xícara de café com leite + 1 crepioca recheada com 1/3 lata de atum
// `
// // https://www.tuasaude.com/treino-de-hipertrofia-para-ganhar-massa-muscular/
// const muscle_exercise =
// `
// Os exercícios desse plano devem ser feitos pelo menos duas vezes por semana.
// Além disso, cada exercício deve ser realizado 2 vezes por cerca de 30 segundos
// e o descanso deve ser de 15 segundos. Entre cada grupo de exercícios, o tempo de descanso
// também deve ser de 15 segundos, com exceção dos exercícios para tríceps, em que o intervalo
// de descanso deve ser de 30 segundos.

// Aquecimento (30s - 60s): pular corda, polichinelo

// Peitoral e braços
// 1. Flexão tradicional (30s)
// 2. Flexão estática (30s)

// Repetir a série e passar pro próximo grupo

// Glúteos
// 1. Agachamento tradicional (30s)
// 2. Agachamento estático (30s)

// Repetir a série e passar pro próximo grupo

// Perna
// 1. Lunges alternados (30s)
// 2. Lunges estáticos (30s)

// Repetir a série e alternar a perna para o lunge estático

// Tríceps
// 1. Tríceps com cadeira (30s)
// 2. Tríceps estático (30s)

// Repetir a série e dar uma pausa de 30s antes de passar para o próximo

// Panturrilha
// 1. Elevação da panturrilha (30s)
// 2. Panturrilha estática (30s)

// Repetir a série e passar para o próximo grupo

// Abdominal
// 1. Abdominal tocando o pé (30s)
// 2. Abdominal estático (30s)

// Repetir a série e passar para o próximo grupo

// Abdominal lateral
// 1. Prancha lateral (30s)
// 2. Prancha lateral estática (30s)

// Repetir a série e alternar o lado para a prancha

// Costas
// 1. Posição super homem (30s)
// 2. Posição super homem estático (30s)

// Repetir a série e passar pro alongamento

// Alongamento (30s)
// `