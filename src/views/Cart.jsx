import React from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";

function Cart() {
  return (
    <div>
      <Navbar />
      <div>
        <h2 className="text-3xl text-gray-500 font-bold text-center my-10">Shopping Cart</h2>
        
      </div>
    </div>
  );
}

export default Cart;
