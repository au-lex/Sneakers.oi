import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./Component/Header";
import Hero from "./Component/Hero";

const App = () => {
  const [Cart, setCart] = useState([]);

  const addtoCart = (product, qty) => {
    const newCart = [...Cart];
    const existingProductIndex = newCart.findIndex((p) => p.id === product.id);

    if (existingProductIndex > -1) {
      toast.error("Item already in cart.");
    } else {
      const updatedProduct = { ...product, Qty: qty };
      newCart.push(updatedProduct);
      setCart(newCart);
      toast.success("Item added to the cart!");
    }
  };

  const removeFromCart = (index) => {
    const newCart = [...Cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const calculateTotalPrice = () => {
    return Cart.reduce((total, item) => total + item.price * item.Qty, 0);
  };

  return (
    <>
      <Header
        Cart={Cart}
        total={calculateTotalPrice()}
        removeFromCart={(index) => removeFromCart(index)}
      />
      <Hero addtoCart={(product, qty) => addtoCart(product, qty)} />
      <ToastContainer />
    </>
  );
};

export default App;
