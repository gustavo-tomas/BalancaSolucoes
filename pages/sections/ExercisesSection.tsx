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
import CarouselExercises from '../../components/CarouselExcercises';
  
  export default function ExercisesSection() {
  
    return(
      <>
        <Head>
            <title>Balança Soluções</title>        
        </Head>
        <Container
            maxWidth={1300}
        >
          <Stack
            align={'center'}
          >
            <Box>
              <Text
                fontSize={'64px'}
                color={'gray.500'}
                fontWeight={'500'}
              >
                Exercícios
              </Text>
            </Box>
            <Box
                width={{ base: '100%', md: '100%', lg: '100%' }}
                className="diets"
            >
              <CarouselExercises />
            </Box>
          </Stack>
        </Container>
    </>
    )
  }