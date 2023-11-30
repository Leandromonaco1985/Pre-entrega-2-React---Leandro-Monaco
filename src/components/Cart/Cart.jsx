import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContex';

export const Cart = () => {
  const { cart } = useContext(CartContext)
  
    return (
      <div>
        <h2> Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((product) => (
              <li key={product.id}>

                <h3>{product.brand}</h3>
                <p>{product.name}</p>
                <p>Price: ${product.price}</p>
                <p> Units: {product.quantity}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default Cart;