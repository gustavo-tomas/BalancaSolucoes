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
  
  export default function Exercises() {
  
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
          >
            {/* <HStack>
              <Badge borderRadius='full' px='2' colorScheme='teal'>

              </Badge>
            </HStack> */}
            <Stack
              direction={['row', 'row', 'row', 'row']}
              justify={['center', 'center', 'center', 'center']}
            >
              <Box
                bg='#F28482'
                borderRadius='14px'
                // maxHeight={100}
                // maxWidth={200}
                height={200}
                width={80}
                
              >
                <Text
                  mt={"1rem"}
                  align='center'
                >Exercícios</Text>
                <Divider />
                <Text
                  mt={"1rem"}
                  align='center'
                >
                Exercícios físicos 
                para todas as 
                pessoas de todos 
                os níveis</Text>

              </Box>
              <Box
                bg='#F6BD60'
                borderRadius='14px'
                // maxHeight={100}
                // maxWidth={200}
                height={200}
                width={80}
                
              >
                <Text
                  mt={"1rem"}
                  align='center'
                >Exercícios</Text>
                <Divider />
                <Text
                  mt={"1rem"}
                  align='center'
                >Receitas saborosas e 
                pouco calóricas</Text>
              </Box>
              <Box
                bg='#B7E4C7'
                borderRadius='14px'
                // maxHeight={100}
                // maxWidth={200}
                height={200}
                width={80}
                
              >
                <Text
                  mt={"1rem"}
                  align='center'
                >Exercícios</Text>
                <Divider />
                <Text
                  mt={"1rem"}
                  align='center'
                >Acreditamos que 
                um estilo de vida 
                saudável deve ser 
                acessível a todas 
                as pessoas</Text>
              </Box>
                
            </Stack>
          </Box>
        </Container>
      </>
    )
  }