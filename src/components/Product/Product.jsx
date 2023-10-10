import {useState, useEffect} from 'react';
import { useSearchParams ,useLocation} from 'react-router-dom';
import { SimpleGrid } from "@chakra-ui/react";
import axios from 'axios';
import ProductCard from "./ProductCard";
//import data from '../../data/data';
import classes from "./Product.module.css";




const url = 'https://lazy-mite-cardigan.cyclic.app/products'

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const location = useLocation()

  let obj = {
    params: {
        category: searchParams.getAll('category'),
        company:searchParams.getAll('company'),
        color:searchParams.getAll('color'),
        _sort: searchParams.get('order') && 'newPrice',
        _order: searchParams.get('order'),
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
   
  }
  useEffect(()=> {
   productsFetchHandler(obj);

  },[location.search])



  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <SimpleGrid columns={[1, 2, 2, 3, 4]} spacing='40px'>
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