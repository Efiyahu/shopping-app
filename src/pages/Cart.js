import React, { useContext, useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from '../context/cart-context';

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(
      state.cart.reduce((acc, current) => acc + Number(current.price), 0)
    );
  }, [state.cart]);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Total Items : ({state.cart.length})</h1>
      {state.cart.map((item) => (
        <div className="cart-container">
          <span className="cart-item">{item.name}</span>
          <img className="cart-image" src={item.img} alt={item.name} />
          <span className="cart-price">${item.price}</span>
          <Button
            onClick={() =>
              dispatch({ type: 'REMOVE_FROM_CART', payload: item })
            }
            variant="danger"
          >
            Remove Item
          </Button>
        </div>
      ))}
      <h3 className="cart-title">Total Price: ${totalPrice}</h3>
    </div>
  );
};

export default Cart;
