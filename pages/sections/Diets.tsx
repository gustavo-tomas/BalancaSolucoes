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
  
const muscle_diet =
`
Café da manhã
Dia 1: 2 fatias de pão integral com ovo e queijo + 1 xícara de café com leite
Dia 2: 1 tapioca de frango e queijo + 1 copo de leite com cacau
Dia 3: 1 copo de suco sem açúcar + 1 omelete com 2 ovos e frango

Lanche da manhã
Dia 1: Lanche da manhã
Dia 2: 1 iogurte natural com mel e semente de chia
Dia 3: 1 banana amassada com aveia e 1 colheres de pasta de amendoim

Almoço/Jantar
Dia 1: 4 colheres de sopa de arroz + 3 colheres de feijão + 150 g de patinho grelhado + salada crua de repolho, cenoura e pimentão
Dia 2: 1 posta de salmão + batata doce cozida + salada refogada com azeite
Dia 3: Macarronada de carne moída com macarrão integral e molho de tomate + 1 copo de suco

Lanche da tarde
Dia 1: 1 iogurte + 1 sanduíche integral de frango com requeijão 
Dia 2: vitamina de fruta com 1 colher de pasta de amendoim + 2 colheres de aveia
Dia 3: 1 xícara de café com leite + 1 crepioca recheada com 1/3 lata de atum
`

export default function Diets() {

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
                {muscle_diet}
            </Text>
        </Stack>
    </Container>
    </>
)
}