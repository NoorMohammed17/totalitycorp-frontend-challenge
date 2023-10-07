import {useState} from 'react';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import CartProvider from './store/CartProvider';
import './App.css'
import About from './pages/About';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
 

  return (
    <CartProvider>
      <About/>
     {cartIsShown && <Cart onClose={hideCartHandler} />}
    <Navbar onShowCart={showCartHandler}/>
    </CartProvider>
  )
}

export default App
