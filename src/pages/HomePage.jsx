
// import Navbar from "../components/Navbar";
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react'
import About from "./About";
function HomePage() {
    return (
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Enjoy Shopping {' '}
            <Text as={'span'} color={'#3c0080'}>
             All New Shoes
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
        Checkout 
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'#3c0080'}
              _hover={{ bg:' #5d259e '}}>
              Get started
            </Button>
            <Button rounded={'full'} px={6}>
              Learn more
            </Button>
          </Stack>
          <Flex w={'full'}>
            <About/>
          </Flex>
        </Stack>
      </Container>
    )
}

export default HomePage;