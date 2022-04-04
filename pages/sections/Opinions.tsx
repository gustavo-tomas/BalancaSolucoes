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
  
  export default function Opinions() {
  
    return(
      <>
        <Head>
          <title>Balança Soluções</title>        
        </Head>
        <Container
          maxWidth={1200}
        >
          <Box
            width={{ base: '100%', md: '100%', lg: '100%' }}
          >
            <Text
              fontSize={{ base: '3xl', md: '2.5rem', lg:'5rem' }}
              textAlign={['center', 'center', 'center', 'center']} 
              fontWeight={600}
              color={"black"}
              mb={{ base: '-1rem', md: '-1rem' }}
            >
              Soluções Leves
            </Text>
            <Text
              fontSize={{ base: '3xl', md: '2.5rem', lg:'5rem' }}
              textAlign={['center', 'center', 'center', 'center']} 
              fontWeight={600}
              color={"black"}
              mb={{ base: '-1rem', md: '-1rem' }}
            >
              para
            </Text>
            <Text
              fontSize={{ base: '3xl', md: '2.5rem', lg:'5rem' }}
              textAlign={['center', 'center', 'center', 'center']} 
              fontWeight={600}
              color={"black"}
            >
              Pessoas pesadas
            </Text>
          </Box>
        </Container>
      </>
    )
  }