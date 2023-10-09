import classes from './CartItem.module.css';
import { Icon } from '@chakra-ui/react'
import { MdOutlineDeleteOutline } from 'react-icons/md'

const CartItem = (props) => {
  const price = `$${props.price}`;
  // console.log(props.image)

  return (
    <li className={classes['cart-item']}>
      <div>
        <img src={props.image} alt={props.name}/>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
        {/* <button onClick={props.onDelete}>{DeleteIcon}</button> */}
        <Icon as={MdOutlineDeleteOutline} w={8} h={'3rem'} color='#8a2b06'onClick={props.onDelete} _hover={{ cursor:'pointer'}
         
        }/>
      </div>
    </li>
  );
};

export default CartItem;