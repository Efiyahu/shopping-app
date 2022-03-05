import React, { useEffect, useState } from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context';
const CartDropdown = () => {
  const [total, setTotal] = useState(0);

  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <Dropdown
      className="cart-dropdown"
      align="end"
      style={{ marginRight: '2rem' }}
    >
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <AiOutlineShoppingCart />
        <span style={{ marginLeft: '5px' }}>{cart.length}</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {cart.map((item) => (
          <Dropdown.Item key={item.name}>
            <div className="dropdown-container">
              <img className="dropdown-image" src={item.img} alt={item.name} />
              <span>{item.name}</span>
              <span>${item.price}</span>
              <Button
                variant="danger"
                onClick={() =>
                  dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: item,
                  })
                }
              >
                Remove
              </Button>
            </div>
          </Dropdown.Item>
        ))}
        <span>Total Price: ${total}</span>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CartDropdown;
