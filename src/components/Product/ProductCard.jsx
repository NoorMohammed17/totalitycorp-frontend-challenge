import { Box,Image,Badge, } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';



 export default function ProductCard(props) {

    const {img,title,stars,reviews,prevPrice,newPrice,company,color,category} = props;

    // {
    //     img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
    //     title: "Nike Men's Sneaker",
    //     star: Math.floor( Math.random() * 7 ),
    //     reviews: "(123 reviews)",
    //     prevPrice: "$140,00",
    //     newPrice: "200",
    //     company: "Adidas",
    //     color: "blue",
    //     category: "sneakers",
    //   },
    
    // const property = {
    //   imageUrl: 'https://bit.ly/2Z4KKcF',
    //   imageAlt: 'Rear view of modern home with pool',
    //   beds: 3,
    //   baths: 2,
    //   title: 'Modern home in city center in the heart of historic Los Angeles',
    //   formattedPrice: '$1,900.00',
    //   reviewCount: 34,
    //   rating: 4,
    // }
  
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p={'10px'}>
        <Image src={img} alt={title}     height={230}
            width={282}
            objectFit={'cover'} />
  
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
              {color} beds &bull; {category} baths
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
  
          <Box>
            {newPrice}
            <Box as='span' color='gray.600' fontSize='sm'>
              / wk
            </Box>
          </Box>
  
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
      </Box>
    )
  }