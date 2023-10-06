import ProductCard from "./ProductCard";
import data from '../../data/data';
import classes from "./Product.module.css";
import { SimpleGrid } from "@chakra-ui/react";



const Products = (props) => {
    return (
      <section className={classes.products}>
        <h2>Buy your favorite products</h2>
        <SimpleGrid columns={[2, null, 4]} spacing='40px'>
          {data.map((product) => (
            <ProductCard
              key={new Date()}
              id={new Date()}
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