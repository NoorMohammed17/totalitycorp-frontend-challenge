import React, { useContext, useState } from 'react';
import Checkout from './Checkout';
import Modal from '../UI/Modal'
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../store/cart-context'

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemDeleteHandler = (id) => {
    cartCtx.removeCompletely(id)
  }

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = () => {
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };


  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          image={item.image}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
          onDelete = {cartItemDeleteHandler.bind(null,item.id)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      {!hasItems &&    <img src=' https://www.easygiftflorist.com/public-assets/images/empty-cart.png'/>}
      {hasItems && <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>}
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );
 

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <p style={{textAlign:'center',fontSize:'22px', fontWeight:'bold'}}>Successfully sent the order!</p>
      <img src='https://cdn.dribbble.com/users/571236/screenshots/2888472/happystate.gif'/>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;