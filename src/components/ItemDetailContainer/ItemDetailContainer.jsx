import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../productsmock';
import {ProductsCounter} from '../ProductsCounter/ProductsCounter'

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);


  React.useEffect(() => {
    getProductById(id)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <h1>{product.name}</h1>
        <img src={product.img} />
        <p>Brand: {product.brand}</p>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        <p>Stock: {product.stock}</p>
        <p> Category: {product.category}</p>
        <div> <ProductsCounter max={product.stock} /></div>
        <button className='btn btn-primary'> Add to Cart </button>
    </div>
  );
};

export default ItemDetailContainer;

