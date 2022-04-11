import { 
    Flex,
    Divider,
    Container,
    Stack,
    Box,
    Heading, 
    Text, 
    Image, 
    Center,
    Badge
} from '@chakra-ui/react';
import Head from 'next/head'
  
const muscle_exercise =
`
Os exercícios desse plano devem ser feitos pelo menos duas vezes por semana.
Além disso, cada exercício deve ser realizado 2 vezes por cerca de 30 segundos
e o descanso deve ser de 15 segundos. Entre cada grupo de exercícios, o tempo de descanso
também deve ser de 15 segundos, com exceção dos exercícios para tríceps, em que o intervalo
de descanso deve ser de 30 segundos.

Aquecimento (30s - 60s): pular corda, polichinelo

Peitoral e braços
1. Flexão tradicional (30s)
2. Flexão estática (30s)

Repetir a série e passar pro próximo grupo

Glúteos
1. Agachamento tradicional (30s)
2. Agachamento estático (30s)

Repetir a série e passar pro próximo grupo

Perna
1. Lunges alternados (30s)
2. Lunges estáticos (30s)

Repetir a série e alternar a perna para o lunge estático

Tríceps
1. Tríceps com cadeira (30s)
2. Tríceps estático (30s)

Repetir a série e dar uma pausa de 30s antes de passar para o próximo

Panturrilha
1. Elevação da panturrilha (30s)
2. Panturrilha estática (30s)

Repetir a série e passar para o próximo grupo

Abdominal
1. Abdominal tocando o pé (30s)
2. Abdominal estático (30s)

Repetir a série e passar para o próximo grupo

Abdominal lateral
1. Prancha lateral (30s)
2. Prancha lateral estática (30s)

Repetir a série e alternar o lado para a prancha

Costas
1. Posição super homem (30s)
2. Posição super homem estático (30s)

Repetir a série e passar pro alongamento

Alongamento (30s)`

export default function Exercises() {

return(
    <>
    <Head>
        <title>Balança Soluções</title>        
    </Head>
    <Container
        maxWidth={1200}
    >
        <Stack
            width={{ base: '100%', md: '100%', lg: '100%' }}
            align={'center'}
        >
            <Text
                fontSize={{ base: '3xl', md: '2.5rem', lg:'5rem' }}
                textAlign={['center', 'center', 'center', 'center']} 
                fontWeight={600}
                color={"black"}
                mb={{ base: '-1rem', md: '-1rem' }}
            >
                {muscle_exercise}
            </Text>
        </Stack>
    </Container>
    </>
)
}