import { createContext, useState } from "react";

//Declaración del contexto
export const CartContext = createContext();

//Declaración del Provider
export const CartContextProvider = ({ children }) => {

    // creo array para agregar objetos al carrito
  const [cart, setCart] = useState([]); 

  return (
    <CartContext.Provider value={{ cart, setCart}}>
      {children}
    </CartContext.Provider>
  );
};