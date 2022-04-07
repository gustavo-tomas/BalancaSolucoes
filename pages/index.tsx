import { 
  Flex, 
  Container, 
  Stack, 
  Box, 
  Heading, 
  Text, 
  Image, 
  Center, 
  Slider
} from '@chakra-ui/react';
import Head from 'next/head';

import Banner from './sections/Banner';
import Beginning from './sections/Beginning';
import Diets from './sections/Diets';
import Exercises from './sections/Exercises';

export default function Home() {

  return(
    <>
      <Head>
        <title>Balança Soluções</title>        
      </Head>

      <Box
        py={{ base: "15vh", md: "15vh", lg: "25vh" }}
        backgroundImage={{base: "HomePic.png", md: "HomePic.png", lg: "HomePic.png"}}
        backgroundPosition={{base: "right 60% bottom 50%", md: "bottom 100%", lg: "right 70% bottom 75%"}}
        backgroundSize={"cover"}
      >
        <Banner />
      </Box>
      <Box
        py={{ base: "2vh", md: "2vh" }}
      >
        <Beginning />
      </Box>
      <Box
        py={{ base: "2vh", md: "2vh" }}
      >
        <Diets />
      </Box>
      {/* <Box
        py={{ base: "2vh", md: "2vh" }}
      >
        <Exercises />
      </Box> */}
    </>
  )
}