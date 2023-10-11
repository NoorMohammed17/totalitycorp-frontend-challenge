import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { SimpleGrid, Spinner, Flex } from "@chakra-ui/react";
import { Input } from '@chakra-ui/react'
import axios from 'axios';
import ProductCard from "./ProductCard";
//import data from '../../data/data';
import classes from "./Product.module.css";




const url = 'https://lazy-mite-cardigan.cyclic.app/products'

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const location = useLocation()

  let obj = {
    params: {
      category: searchParams.getAll('category'),
      company: searchParams.getAll('company'),
      color: searchParams.getAll('color'),
      _sort: searchParams.get('order') && 'newPrice',
      _order: searchParams.get('order'),
      // title_like:query,
    }
  }



  const productsFetchHandler = (paramObj) => {

    axios
      .get(url, paramObj)
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err)
      });
    setIsLoading(false)

  }
  useEffect(() => {
    productsFetchHandler(obj);

  }, [location.search])

  if (isLoading) {
    return <Spinner
      position='fixed'
      z-index={1031}
      top='20%'
      left='50%'
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
    />
  }
  const inputChangeHandler = (e) => {
    setQuery(e.target.value)
    console.log(query)
  }



  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <Flex width={{ md: '30%', base: '80%' }} marginBottom={'20px'}>
        <Input
          color='#3c0080'
          placeholder='Search your favorite products'
          _placeholder={{ color: 'inherit' }}
          onChange={inputChangeHandler}
       

        />
      </Flex>

      <SimpleGrid columns={[1, 2, 2, 3, 4]} spacing={{ base: '15px', md: '30px' }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            newPrice={product.newPrice}
            prevPrice={product.prevPrice}
            img={product.img}
            company={product.company}
            color={product.color}
            category={product.category}
            stars={product.star}
            reviews={product.reviews}
          />
        ))}
      </SimpleGrid>
    </section>
  );
};

export default Products;