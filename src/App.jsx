
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/Navbar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ProductsCounter } from './components/ProductsCounter/ProductsCounter';
import { Card } from './components/Card/Card';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'

import { Cart } from './components/Cart/Cart';

function App() {

  return (
    
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={  <ItemListContainer greetings = " Welcome to be best place to spend all your biyuya !"/>}/>   
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path='/category/:category' element={<ItemListContainer/>}/>
           <Route path='/cart' element ={<Cart/>}/>       
        </Routes>
    </BrowserRouter>  
  )
}


export default App
