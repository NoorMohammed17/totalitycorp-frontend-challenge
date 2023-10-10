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
    useDisclosure,
    useColorModeValue,
    Stack,
    MenuDivider,
    Text,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { HamburgerIcon, CloseIcon, } from '@chakra-ui/icons';
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import propic from '../assets/propic.jpg'
//import Auth from './Auth';
import { authActions } from '../store/Store';
//import ProductsPage from '../pages/ProductsPage';
//import About from '../pages/About';

export default function Navbar(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.authReducer.isAuthenticated);

    const logoutHandler = () => {
        dispatch(authActions.logout())
    }

    return (
        <>
            <Box bg={useColorModeValue('#3c0080', '#3c0080')} px={4} position="sticky" width={'100%'} top={0} left={0} overflow={'hidden'} zIndex={2}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box color={'white'}><Text as='i' fontSize={{ base: 'xl', sm: '3xl' }}><Link to={'/'}>E-commerce</Link></Text></Box>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} color={'white'}>
                            <Link
                                to="/products"
                            >
                                Products
                            </Link>
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
                            <Link to={'/login'}>  <IconButton

                                isRound={true}
                                fontSize='20px'
                                colorScheme='white'
                                aria-label='Login'
                                icon={<AiOutlineUserAdd />} /></Link>
                        }
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
                                <MenuList alignItems={'center'} zIndex={10}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={propic}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Username</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Your Servers</MenuItem>
                                    <MenuItem>Account Settings</MenuItem>
                                    <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                </MenuList>
              </Menu>
                        }
                                </Flex>
                            </Flex>

                {isOpen ? (
                            <Box pb={4} display={{ md: 'none' }}>
                                <Stack as={'nav'} spacing={4} color={'white'}>
                                    <Link
                                        to="/products"
                                    >
                                        Products
                                    </Link>
                                </Stack>
                            </Box>
                        ) : null}
                    </Box>


                    {/* {!isAuth && <About />} */}
                    {/* {!isAuth && <Auth />} */}
                    {/* {isAuth && <ProductsPage />} */}

                </>
                )
}