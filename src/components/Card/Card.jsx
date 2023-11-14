import React from 'react';
import {Link} from 'react-router-dom';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';

export const Card = ( {id, name, price, brand, img, description, stock }) => {
  return (
  
    <div className="card card-custom h-100 m-10 my - 10 p-10" >
        <img src={img} className="card-img-top"/>
        <div className="card-body">
            <h5 className="card-title"> {name}</h5>
            <h6 className="list-group-item"> Price:$  {price}</h6>
        <Link to={`/item/${id}`}> <div className="btn btn-primary">Show Details</div></Link>
        </div>
      </div>
  )
}

export default Card