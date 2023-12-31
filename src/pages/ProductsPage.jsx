import React from 'react';
import { Stack, Box, Divider } from '@chakra-ui/react';
import Sidebar from '../components/SideBar';
import Products from '../components/Product/Product';
import { Input, Flex, InputRightElement, InputGroup } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

const ProductsPage = () => {
  const [query, setQuery] = React.useState("");

  const handleSubmit = (e) => e.preventDefault();
  const inputChangeHandler = (e) => {
    setQuery(e.target.value)
    console.log(query)
  }

  return (

    <Stack direction={['column', 'column', 'row', 'row']}>
      <Box>
        <Sidebar />
      </Box>

      <Divider borderColor={'red'} orientation='vertical' />

      <Box>
        <Flex width={{ md: '100%', base: '80%' }} marginTop={'20px'}>
          <form onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              color='#3c0080'
              placeholder='Search '
              _placeholder={{ color: 'inherit' }}
              onChange={inputChangeHandler}
            />
            <InputRightElement pointerEvents='none'>
              <Search2Icon color='#8a2b06' />
            </InputRightElement>
          </InputGroup>
          </form>
        </Flex>

        <Products  onInput = {query}/>
      </Box>

    </Stack>
  )
}

export default ProductsPage
