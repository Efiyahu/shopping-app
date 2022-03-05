import { createContext, useReducer } from 'react';
import { products } from '../data';
import { cartReducer } from './cart-reducer';

export const CartContext = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default Context;
