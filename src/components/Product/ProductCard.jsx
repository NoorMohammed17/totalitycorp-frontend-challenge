import {
  Box, Image, Badge, Stack, Text, Icon,
  chakra,
  Tooltip, Center
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
//import { FiShoppingCart } from 'react-icons/fi'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useToast } from '@chakra-ui/react'
import { useContext } from 'react';
import CartContext from '../../store/cart-context';



export default function ProductCard(props) {

  const cartCtx = useContext(CartContext);
  const toast=useToast();


  const addToCartHandler = () => {
    
    toast({
      title: 'Item added successfully.',
      description: "Check in your cart.",
      status: 'success',
      duration: 5000,
      position: 'top',
      variant: 'top-accent',
     isClosable: true,
    })
    cartCtx.addItem({
      id: props.id,
      name: props.title,
      amount:1,
      image:props.img,
      price: props.newPrice
    });
  };

  const { img, title, stars, reviews, prevPrice, newPrice, company, color, category } = props;
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p={'10px'} justifyContent="center">
      <Image src={img} alt={title}
        height={270}
        width={'100%'}
        objectFit={'100%'} />
      <Center>
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              {company}
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              {color} color {category}
            </Box>
          </Box>

          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
          >
            {title}
          </Box>

          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              ${newPrice}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              {prevPrice}
            </Text>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'purple'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={AiOutlineShoppingCart} h={7} w={7} alignSelf={'center'}  onClick={addToCartHandler} />
              </chakra.a>
            </Tooltip>
          </Stack>

          <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < stars ? 'teal.500' : 'gray.300'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {reviews} reviews
            </Box>

          </Box>

        </Box>
      </Center>
    </Box>
  )
}