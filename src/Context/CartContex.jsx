import { createContext, useState } from "react";

//Declaración del contexto
export const CartContext = createContext();

//Declaración del Provider
export const CartContextProvider = ({ children }) => {

// creo array para agregar objetos al carrito
  const [cart, setCart] = useState([]);   
  const addToCart = (item, quantity) => {
    const newCart = [...cart];
    const existingProductIndex = newCart.findIndex((product) => product.id === item.id);

    //lógica para evitar duplicaciones en mi carrito
  
      if (existingProductIndex !== -1) {
        // Si el producto ya está en el carrito, actualiza la cantidad
        newCart[existingProductIndex].quantity += quantity;
      } else {
        // Si el producto no está en el carrito, lo agrégo
        newCart.push({ ...item, quantity });
      }
      setCart(newCart);
    };

  const emptyCart = () => {
    setCart([]);
  };
  const removeProduct = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  const totalPrice = () => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, emptyCart, removeProduct, addToCart, totalPrice}}>
      {children}
    </CartContext.Provider>
  );
};