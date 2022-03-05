import React, { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import ShopItem from '../components/ShopItem';

const Home = () => {
  const {
    state: { products },
  } = useContext(CartContext);

  return (
    <div>
      <h1 className="cart-title">Shop with us</h1>
      <div className="card-container">
        {products.map((prod) => (
          <ShopItem key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default Home;
