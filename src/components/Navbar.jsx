
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Center,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Text,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, } from '@chakra-ui/icons';
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import HomePage from '../pages/Home';



const Links = ['Dashboard', 'Projects', 'Team']

const NavLink = (props) => {
    const { children } = props
    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded={'md'}
            color={'white'}
            _hover={{
                textDecoration: 'none',
                color: '#790da3',
                bg: 'white',

            }}
            href={'#'}>
            {children}
        </Box>
    )
}

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box bg={useColorModeValue('#3c0080', '#3c0080')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box color={'white'}><Text  as='i'   fontSize={{ base: 'xl', sm: '3xl' }}>E-commerce</Text></Box>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'} gap={'5px'}>
                        <IconButton
                            isRound={true}
                            fontSize='20px'
                            colorScheme='teal'
                            aria-label='wishlist'
                            icon={<FiHeart />}
                        />

                        <IconButton
                            isRound={true}
                            fontSize='20px'
                            colorScheme='teal'
                            aria-label='cart'
                            icon={<AiOutlineShoppingCart />}
                        />
                         <IconButton
                        isRound={true}
                        fontSize='20px'
                            colorScheme='teal'
                            aria-label='Login'
                            icon={<AiOutlineUserAdd />} />

                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                                />
                            </MenuButton>
                            <MenuList alignItems={'center'}>
                                <br />
                                <Center>
                                    <Avatar
                                        size={'2xl'}
                                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                                    />
                                </Center>
                                <br />
                                <Center>
                                    <p>Username</p>
                                </Center>
                                <br />
                                <MenuDivider />
                              
                                <MenuItem>Logout</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>

            <Box p={4}><HomePage/></Box>
        </>
    )
}