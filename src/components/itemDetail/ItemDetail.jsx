import React, { useContext } from 'react';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector';
import { CartContext } from '../../Context/CartContex';

export const ItemDetail = ({ item, selectedQuantity, setSelectedQuantity, setCart }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="pt-3 pb-3 border border-gray border-2 ">
      <h1>{item.name}</h1>
      <img src={item.img} alt={item.name} />
      <p>Brand: {item.brand}</p>
      <p>Price: ${item.price}</p>
      <p>{item.description}</p>
      <p>Stock: {item.stock}</p>
      <p>Category: {item.category}</p>
      <div className="d-flex justify-content-center">
        <ItemQuantitySelector max={item.stock} quantity={selectedQuantity} setQuantity={setSelectedQuantity} />
      </div>
      <button className="btn btn-primary" onClick={() => addToCart(item, selectedQuantity)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ItemDetail