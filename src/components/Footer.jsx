
import {
    Box,
    chakra,
    Container,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Heading
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'

const SocialButton = ({
    children,
    label,
    href,
}
) => {
    return (
        <chakra.button
            bg={useColorModeValue('#3c0080')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('#4f178f'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    )
}

export default function Footer() {
    return (
        <Box
        marginTop={'30px'}
            bg={useColorModeValue('#333', '#141414')}
            color={useColorModeValue('white', 'white')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
                    spacing={8}>
                    <Stack spacing={6} align={{ md: 'flex-start', base: 'center' }}>
                        <Box>
                            <Heading>E-COMMERCE</Heading>
                        </Box>
                        <Text fontSize={'sm'}>© 2023 E-commerce. All rights reserved</Text>
                        <Stack direction={'row'} spacing={6}>
                            <SocialButton label={'Twitter'} href={'#'}>
                                <FaTwitter />
                            </SocialButton>
                            <SocialButton label={'YouTube'} href={'#'}>
                                <FaYoutube />
                            </SocialButton>
                            <SocialButton label={'Instagram'} href={'#'}>
                                <FaInstagram />
                            </SocialButton>
                        </Stack>
                    </Stack>
                    <Stack align={{ md: 'flex-start', base: 'center' }}>
                        <ListHeader>INFORMATION</ListHeader>
                        <Box as="a" href={'#'}>
                            About Us
                        </Box>
                        <Box as="a" href={'#'}>
                            Order Tracking
                        </Box>
                        <Box as="a" href={'#'}>
                            Privacy & Policy
                        </Box>
                        <Box as="a" href={'#'}>
                            Term & Conditions
                        </Box>
                    </Stack>
                    <Stack align={{ md: 'flex-start', base: 'center' }}>
                        <ListHeader>MY ACCOUNT</ListHeader>
                        <Box as="a" href={'#'}>
                            Login
                        </Box>
                        <Box as="a" href={'#'}>
                            Wishlist
                        </Box>
                        <Box as="a" href={'#'}>
                            My cart
                        </Box>
                        <Box as="a" href={'#'}>
                            My Account
                        </Box>
                    </Stack>
                    <Stack align={{ md: 'flex-start', base: 'center' }}>
                        <ListHeader>NEWSLETTER</ListHeader>
                        <Stack direction={'row'}>
                            <Input

                                placeholder={'Your email address'}
                                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                                border={0}
                                _focus={{
                                    bg: 'whiteAlpha.300',
                                }}
                            />
                            <IconButton
                                bg={useColorModeValue('#3c0080')}
                                color={useColorModeValue('white', 'gray.800')}
                                _hover={{
                                    bg: '#4d1a88',
                                }}
                                aria-label="Subscribe"
                                icon={<BiMailSend />}
                            />
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    )
}