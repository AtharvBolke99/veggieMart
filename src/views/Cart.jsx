import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";

function Cart() {
  const [cart, setCart] = useState("");
  return (
    <div>
      <Navbar />
      <div>
        <h2 className="text-3xl text-gray-500 text-center">Shopping Cart</h2>
      </div>
    </div>
  );
}

export default Cart;
