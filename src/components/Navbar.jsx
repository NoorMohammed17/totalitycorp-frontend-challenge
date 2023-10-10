import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
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
import propic from '../assets/propic.jpg'
//import Auth from './Auth';
import { authActions } from '../store/Store';
import ProductsPage from '../pages/ProductsPage';
import About from '../pages/About';



const Links = [ 'Products']

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

export default function Navbar(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.authReducer.isAuthenticated);

    const logoutHandler = () => {
        dispatch(authActions.logout())
    }

    return (
        <>
            <Box bg={useColorModeValue('#3c0080', '#3c0080')} px={4} position="sticky" width={'100%'}   top={0} left={0}  overflow={'hidden'}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box color={'white'}><Text as='i' fontSize={{ base: 'xl', sm: '3xl' }}>E-commerce</Text></Box>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'} gap={'10px'}>
                        <IconButton
                            isRound={true}
                            fontSize='20px'
                            
                            colorScheme='white'
                            aria-label='wishlist'
                            icon={<FiHeart />}
                        />

                        <IconButton
                            isRound={true}
                            fontSize='20px'
                            colorScheme='white'
                            aria-label='cart'
                            onClick={props.onShowCart}
                            icon={<AiOutlineShoppingCart />}
                        />
                        {!isAuth &&
                            <IconButton
                                isRound={true}
                                fontSize='20px'
                                colorScheme='white'
                                aria-label='Login'
                                icon={<AiOutlineUserAdd />} />}
                        {isAuth &&
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={propic}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={propic}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <Text colorScheme='pink'>Username</Text>
                                    </Center>
                                    <br />
                                    <MenuDivider />

                                    <MenuItem onClick={logoutHandler}><Center colorScheme='pink'>Logout</Center></MenuItem>
                                </MenuList>
                            </Menu>}


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

            <Box p={4}>
                {!isAuth && <About />}
                {isAuth && <ProductsPage/>}
            </Box>
        </>
    )
}