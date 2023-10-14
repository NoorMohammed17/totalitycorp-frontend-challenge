import React from 'react';
import { Stack, Box,Divider } from '@chakra-ui/react';
import Sidebar from '../components/SideBar';
import Products from '../components/Product/Product';
import { Input ,Flex} from '@chakra-ui/react'

const ProductsPage = () => {
  const [query, setQuery] =React. useState("");
  const inputChangeHandler = (e) => {
    setQuery(e.target.value)
    console.log(query)
  }

  return (
   
    <Stack direction={['column','column','row', 'row']}>
    <Box>
      <Sidebar />

    </Box>

    <Divider borderColor={'red'}  orientation='vertical'/>

    <Box>
    <Flex width={{ md: '30%', base: '80%' }} marginTop={'20px'}>
        <Input
          color='#3c0080'
          placeholder='Search your favorite products'
          _placeholder={{ color: 'inherit' }}
          onChange={inputChangeHandler}
       

        />
      </Flex>
      <Products  onInput={query}/>
    </Box>

  </Stack>
  )
}

export default ProductsPage
