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
    Badge,
    HStack
  } from '@chakra-ui/react';
  import Head from 'next/head'

  import Body from '../../components/Body';
  
  export default function Beginning() {
  
    return(
      <>
        <Head>
          <title>Balança Soluções</title>        
        </Head>
        <Container
          maxWidth={1300}
        >
          <Box
            width={{ base: '100%', md: '100%', lg: '100%' }}
            className="beginning"
          >
            <Stack
              direction={['row', 'row', 'row', 'row']}
              justify={['center', 'center', 'center', 'center']}
            >

              <Body 
                title={'Dietas'} 
                text={'Receitas saborosas e pouco calóricas'} 
                color={'orange.500'}
              />
              <Body 
                title={'Exercícios'} 
                text={'Exercícios físicos para todas as pessoas de todos os níveis'} 
                color={'red.500'}
              />
              <Body 
                title={'Valores'} 
                text={'Acreditamos que um estilo de vida saudável deve ser acessível a todas as pessoas'} 
                color={'blue.600'}
              />
             
            </Stack>
          </Box>
        </Container>
      </>
    )
  }