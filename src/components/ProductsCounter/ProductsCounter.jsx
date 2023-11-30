import React, { useState } from 'react'

export const ProductsCounter = ({ initial = 0, max, quantity, setQuantity }) => {
  const handleAdd = () => {
    if (quantity < max) {
      setQuantity(quantity + 1);
    }
  };

  const handleSubtract = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="counterStyle , container" style={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <button className="btn btn-danger" onClick={handleAdd}>
          +
        </button>
        <div>{quantity}</div>
        <button className="btn btn-danger" onClick={handleSubtract}>
          -
        </button>
      </div>
    </>
  );
};
  
  export default ProductsCounter