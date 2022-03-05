import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { CartContext } from '../context/cart-context';

const ShopItem = ({ prod }) => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div>
      <div key={prod.id} className="cards">
        <div
          style={{ backgroundImage: `url(${prod.img})` }}
          className="card-image"
        ></div>
        <h2 className="card-title">{prod.name}</h2>
        <p className="card-text">$ {prod.price}</p>
        <span className="card-rating">
          {[...Array(5)].map((_, index) => (
            <span key={index}>
              {prod.rating > index ? <AiFillStar /> : <AiOutlineStar />}
            </span>
          ))}
        </span>
        {state.cart.some((p) => p.id === prod.id) ? (
          <Button
            onClick={() =>
              dispatch({
                type: 'REMOVE_FROM_CART',
                payload: prod,
              })
            }
            variant="danger"
          >
            Remove From Cart
          </Button>
        ) : (
          <Button
            onClick={() =>
              dispatch({
                type: 'ADD_TO_CART',
                payload: prod,
              })
            }
          >
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default ShopItem;
