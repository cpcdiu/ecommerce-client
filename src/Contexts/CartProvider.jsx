import React, { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cartAmount, setCartAmount] = useState(0);
  return (
    <CartContext value={{ cartAmount, setCartAmount }}>{children}</CartContext>
  );
};

export default CartProvider;
