import {useState, useEffect} from 'react';
import ProductCard from "./ProductCard";
//import data from '../../data/data';
import classes from "./Product.module.css";
import { SimpleGrid } from "@chakra-ui/react";


const url = 'https://lazy-mite-cardigan.cyclic.app/products'
const Products = (props) => {
  const [products, setProducts] = useState([]);

  const productsFetchHandler = async() => {
    try{
      const response = await fetch(url);
      const data= await response.json();
      console.log(data)
      setProducts(data)
    }
    catch(err){
      console.log(err)
    }
   
  }
  useEffect(()=> {
   productsFetchHandler();

  },[])



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