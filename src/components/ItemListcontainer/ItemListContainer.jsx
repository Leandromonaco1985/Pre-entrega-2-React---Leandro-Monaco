import React, { useEffect, useState } from 'react'
import style from './itemlist.css'
import {Card} from '../Card/Card'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../productsmock'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import {ProductsCounter} from '../ProductsCounter/ProductsCounter'
export const ItemListContainer = (props) => {
  const category = useParams().category;
  console.log(category)

  const [products, setproducts] = useState([]);
    
  //función para traer productos

  useEffect(() => {
  getProducts()
    .then((resp) => {
      if (category) {
        setproducts(resp.filter((prods) => prods.category === category));
        
      } else {
        setproducts(resp);
      }  
    })
    .catch((error) => console.error());
}, [category]);
      
  return (
    <div>
      <h1 className='itemList color-changing-text'> {props.greetings}</h1>

      <h2 > Our's Fetishized Products</h2>
      <div className="container row" >
      {            
        products.map (product => 
        <div className="col-md-3 "  key = {product.id}>
            <Card name = {product.name} brand={product.brand} img={product.img} stock={product.stock} price={product.price} id={product.id} category={product.category}/> 
        </div>
        )
      }
      </div>     
    </div>    
  )
}

export default ItemListContainer