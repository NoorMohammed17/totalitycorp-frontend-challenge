import React, { useState, useEffect } from 'react'
import { Checkbox, Stack, Heading } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom';
import { Radio, RadioGroup, Box, Button } from '@chakra-ui/react'
//import { useSelector } from 'react-redux';

const Sidebar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialCategoryParams = searchParams.getAll('category')  // to make the URL not change after the reload
    const [category, setCategory] = useState(initialCategoryParams || []); //['sneakers','flats','sandals','heels']
    const initialBrandParams = searchParams.getAll('company')  // to make the URL not change after the reload
    const [company, setCompany] = useState(initialBrandParams || []); //['Nike','Adidas','Puma','Vans']

    const initialSortParams = searchParams.get('order')
    const [order, setOrder] = React.useState(initialSortParams || null) //initially  null or data from initialSortParams
    //console.log('sort order:', order)
  
    // const { products } = useSelector(store => store.productsReducer);

    // let productsLength = products.length;
    // console.log("products length:",productsLength)




    //to check the category present, and if already present uncheck it and remove from the array
    const handleFilter = (e) => {
        let newCategory = [...category];
        const value = e.target.value;
        if (newCategory.includes(value)) {
            newCategory = newCategory.filter((el) => el !== value)
        } else {
            newCategory.push(value);
        }
        setCategory(newCategory)
    }

    const handleBrandFilter = (e) => {
        let newBrand = [...company];
        const value = e.target.value;
        if (newBrand.includes(value)) {
            newBrand = newBrand.filter((el) => el !== value)
        } else {
            newBrand.push(value);
        }
        setCompany(newBrand)
    }

    console.log("Category:", category)
    console.log("searchParams.getAll:", searchParams.getAll("category"))
    console.log("searchParams.getAll:", searchParams.getAll("company"))
    console.log("searchParams.Sorting:", searchParams.get("order"))

    const handleResetFilters = () => {
        setCategory([]);
        setCompany([]);
        setOrder(null);
        
    }

    useEffect(() => {
        let params = {
            category,  
            company, 
        }
        order && (params.order = order) //if order present then only pass order 
        setSearchParams(params)
    }, [category,company, order])

    return (
        <Box
            pl={'40px'} pr={'40px'}
            m={'auto'}
            pt={'20px'}
            borderWidth='4px'
            h={'full'}
            w={{ base: 'full', md: 'full', sm: 'full' }}
        // border={'1px solid red'}
        >
            <Heading as='h3' size='md' marginBottom={'20px'}>Filter By </Heading> 

            <Heading as='h4' size='md' marginBottom={'20px'}>Category</Heading>
            <Stack spacing={1} direction={['row', 'row', 'column', 'column']}
                marginBottom={'20px'}>
                <Checkbox colorScheme='green' value={'sneakers'} onChange={handleFilter} isChecked={category.includes('sneakers')}>
                  Sneakers
                </Checkbox>
                <Checkbox colorScheme='green' value={'flats'} onChange={handleFilter} isChecked={category.includes('flats')}>
                Flats
                </Checkbox>
                <Checkbox colorScheme='green' value={'sandals'} onChange={handleFilter} isChecked={category.includes('sandals')}>
                Sandals
                </Checkbox>
                <Checkbox colorScheme='green' value={'heels'} onChange={handleFilter} isChecked={category.includes('heels')}>
                Heels
                </Checkbox>
            </Stack>

            <Heading as='h4' size='md' marginBottom={'20px'}>Brand</Heading>

            <Stack spacing={1} direction={['row', 'row', 'column', 'column']}
                marginBottom={'20px'}>
                <Checkbox colorScheme='green' value={'Nike'} onChange={handleBrandFilter} isChecked={category.includes('Nike')}>
                  Nike
                </Checkbox>
                <Checkbox colorScheme='green' value={'Adidas'} onChange={handleBrandFilter} isChecked={category.includes('Adidas')}>
                Adidas
                </Checkbox>
                <Checkbox colorScheme='green' value={'Puma'} onChange={handleBrandFilter} isChecked={category.includes('Puma')}>
                Puma
                </Checkbox>
                <Checkbox colorScheme='green' value={'Vans'} onChange={handleBrandFilter} isChecked={category.includes('Vans')}>
                Vans
                </Checkbox>
            </Stack>

            <Heading as='h4' size='md' marginBottom={'20px'}>Sort By Price</Heading>
            <RadioGroup onChange={setOrder} value={order}>

                <Stack
                    direction={['row', 'row', 'column', 'column']}
                    // direction={['row', 'column']} 
                    marginBottom={'20px'}>
                    <Radio value='asc' isChecked={order === 'asc'} >Low to High</Radio>
                    <Radio value='desc' isChecked={order === 'desc'}>High to Low</Radio>

                </Stack>
            </RadioGroup>

           
               
            <Button bg={'teal.400'}
                color={'white'}
                size="md"
                variant='solid'
                marginTop={'10px'}
                _hover={{
                    bg: 'teal.500',
                }}
                onClick={handleResetFilters}>
                Reset Filter & Sort
            </Button>
        </Box>
    )
}

export default Sidebar;


//localhost:8080/host
