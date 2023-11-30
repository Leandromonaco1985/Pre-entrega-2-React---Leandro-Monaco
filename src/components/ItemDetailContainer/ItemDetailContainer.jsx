import React from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../productsmock';
import {ProductsCounter} from '../ProductsCounter/ProductsCounter'
import { CartContext } from '../../Context/CartContex';
import { useContext } from 'react';



  export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = React.useState(null);//Estado 
    const { cart, setCart } = useContext(CartContext); // Obtener cart y setCart del contexto
    const [selectedQuantity, setSelectedQuantity] = React.useState(1); // Estado local para la cantidad seleccionada
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
  
    const addToCart = () => {
      const productToAdd = { ...product, quantity: selectedQuantity }; // Agregar la cantidad seleccionada al producto
      setCart([...cart, productToAdd]); // Agregar el producto al carrito utilizando setCart
    };
  
    return (
      <div>
        <h1>{product.name}</h1>
        <img src={product.img} alt={product.name} />
        <p>Brand: {product.brand}</p>
        <p>Price: ${product.price}</p>
        <p>Description: {product.description}</p>
        <p>Stock: {product.stock}</p>
        <p>Category: {product.category}</p>
        <div>
        <ProductsCounter max={product.stock} quantity={selectedQuantity} setQuantity={setSelectedQuantity} />

        </div>
        <button className="btn btn-primary" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    );
  };

  export default ItemDetailContainer;