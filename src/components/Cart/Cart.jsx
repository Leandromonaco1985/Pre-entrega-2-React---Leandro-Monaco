import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContex';

export const Cart = () => {
  const { cart, emptyCart, removeProduct, totalPrice } = useContext(CartContext);

  const handleEmptyCart = () => {
    emptyCart();
  };

  const handleRemoveProduct = (productId) => {
    removeProduct(productId);
  };
  
    return (
      <div className='container px-3 py-2'>
        <h2> Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className='container card'>
            <ul>
            {cart.map((product) => (
              <li key={product.id}>
                <h3>{product.brand}</h3>
                <p>{product.name}</p>
                <p>Price: ${product.price}</p>
                <p> Units: {product.quantity}</p>
                <p> subtotal: ${product.price * product.quantity}</p>
                <button className = "btn btn-danger m-2" onClick={() => handleRemoveProduct(product.id)}> Remove Product</button>
              </li>
            ))}
          </ul>
          <button className='btn btn-danger m-2' onClick={handleEmptyCart}> Empty Cart</button>
          <p>Total: $ {totalPrice()}</p>
          </div>
          
        )}
        <Link to="/checkout" className='btn btn-success m-2' > Check Out </Link>
      </div>
    );
  };
  
  export default Cart;