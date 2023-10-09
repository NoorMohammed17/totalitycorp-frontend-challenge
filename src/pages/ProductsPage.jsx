import React from 'react';
import { Stack, Box,Divider } from '@chakra-ui/react';
import Sidebar from '../components/SideBar';
import Products from '../components/Product/Product';

const ProductsPage = () => {
  return (
   
    <Stack direction={['column','column','row', 'row']}>
    <Box>
      <Sidebar />

    </Box>

    <Divider borderColor={'red'}  orientation='vertical'/>

    <Box>
      <Products />
    </Box>

  </Stack>
  )
}

export default ProductsPage
