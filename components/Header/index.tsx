import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Image,
  Text,
  Stack,
  Button,
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerOverlay,
  DrawerCloseButton
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';
import {Link} from 'react-scroll';

export default function Header(){
  const { isOpen, onToggle, onClose } = useDisclosure();
  return(
    <Stack
      opacity={1}
      bg="white"
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderStyle={'solid'}
      align={"center"}
    >
      <Flex
        maxWidth={1300}
        align={'center'}
      >
        <Flex
          flex={{base: 1, md: 'auto'}}
          ml={{ base: -2 }} 
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            color="gray.900"
            bg={"gray.50"}
            _hover={{
              bg: "gray.100",
              color: "gray.900"
            }}
            aria-label={'Toggle Navigation'}
            variant={'ghost'}
            onClick={ onToggle }
            icon={
              isOpen ? <CloseIcon /> : <HamburgerIcon />
            }
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: 'center', md: 'start' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Box 
            mr={{ base: "0", md: "12rem" }}
          >
            <Text
              fontWeight={'bold'}
              color="black"
            >BALANÇA SOLUÇÕES</Text>
          </Box>
          <Box
            display={{ base: 'none', md: 'flex' }}
          >
            <Link
              to="beginning"
              smooth={true}
              onClick={onClose}
              duration={500}
            >
              <Button 
                color="gray.900"
                variant="ghost"
                _hover={{ 
                  color: "gray.500"
                }}
                aria-label="about"
              >
                Início
              </Button>
            </Link>
            <Link
              to="diets"
              smooth={true}
              onClick={onClose}
              duration={500}
            >
              <Button 
                color="gray.900"
                variant="ghost"
                _hover={{ 
                  color: "gray.500"
                }}
                aria-label="vison"
              >
                Planos
              </Button>
            </Link>
            <Link
              to="contact"
              smooth={true}
              onClick={onClose}
              duration={500}
            >
              <Button 
                color="gray.900"
                variant="ghost"
                _hover={{ 
                  color: "gray.500"
                }}
                aria-label="projects"
              >
                Contato
              </Button>
            </Link>
          </Box>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={2}
        >
          <Button
            fontSize={'sm'}
            fontWeight={700}
            color={'gray.900'}
            variant={'ghost'}
            _hover={{
              bg : 'black',
              color : 'white'
            }}
          >
            Login
          </Button>
          <Button
            fontSize={'sm'}
            fontWeight={700}
            color={'white'}
            bg={'black'}
            variant={'solid'}
            _hover={{
              bg : 'gray.900',
              color : 'white'
            }}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>
      <Drawer
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            backgroundColor="gray.900"
            color="white"
            _hover={{
              bg: "gray.200",
              color: "gray.900"
            }}
          />
          <DrawerBody>
            <Stack
              align="start"
            >
              <Link
                to="about"
                smooth={true}
                onClick={onClose}
                duration={500}
              >
                <Button 
                  as="a"
                  color="gray.900"
                  variant="ghost"
                  _hover={{ 
                    color: "gray.500"
                  }}
                  aria-label="about"
                >
                  Início
                </Button>
              </Link>
              <Link
                to="vision"
                smooth={true}
                onClick={onClose}
                duration={500}
              >
                <Button 
                  as="a"
                  color="gray.900"
                  variant="ghost"
                  _hover={{ 
                    color: "gray.500"
                  }}
                  aria-label="vision"
                >
                  Planos
                </Button>
              </Link>
              <Link
                to="projects"
                smooth={true}
                onClick={onClose}
                duration={500}
              >
                <Button 
                  as="a"
                  color="gray.900"
                  variant="ghost"
                  _hover={{ 
                    color: "gray.500"
                  }}
                  aria-label="projects"
                >
                  Contato
                </Button>
              </Link>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
}