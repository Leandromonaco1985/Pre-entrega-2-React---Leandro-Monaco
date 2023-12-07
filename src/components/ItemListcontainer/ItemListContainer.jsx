import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../Context/CartContex';
import style from './itemlist.css';
import { Item } from '../Item/Item';
import { useParams } from 'react-router-dom';

import { db } from '../../config/firebaseConfig';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';

export const ItemListContainer = (props) => {
  const category = useParams().category;
  const { cart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const myProducts = collection(db, "Products");

    // Filtrado por categorías
    const queryCategory = category
      ? query(myProducts, where("category", "==", category), orderBy("category"))
      : query(myProducts, orderBy("category"));

    getDocs(queryCategory)
      .then((resp) => {
        const productList = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

        setProducts(productList);
      })
      .catch((error) => console.error());
  }, [category]);

  return (
    <div>
      <h1 className='itemList color-changing-text'> {props.greetings}</h1>

      <h2> Our's Fetishized Products</h2>
      <div className='container row'>
        {products.map((product) => (
          <div className='col-md-3' key={product.id}>
            <Item
              name={product.name}
              brand={product.brand}
              img={product.img}
              stock={product.stock}
              price={product.price}
              id={product.id}
              category={product.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
