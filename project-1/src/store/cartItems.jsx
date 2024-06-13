import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = (props) => {
    const [caartitems ,setCartItems]=useState([]);
    return <CartContext.Provider value={{caartitems,setCartItems}}>
        {props.children}
    </CartContext.Provider>
}