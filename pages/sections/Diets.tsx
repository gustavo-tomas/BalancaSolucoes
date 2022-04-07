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
import SectionCarousel from '../../components/Carousel';


export default function Diets() {
    
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
            className="diets"
        >
           <SectionCarousel />
        </Box>
    </Container>
    </>
)
}