import React from "react";
import "../views/Cart.css";
import Navbar from "../components/Navbar";
import { useState } from "react";

function Cart() {
  const [cart, setCart] = useState("");
  return (
    <div>
      <Navbar />
      <div className="cart">
        <h2 className="shopping-header">Shopping Cart</h2>
      </div>
    </div>
  );
}

export default Cart;
