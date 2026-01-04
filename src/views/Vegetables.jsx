import React, { useState } from "react";
import Navbar from "../components/Navbar";
import vegetables from "../configs/Vegetables.js";
import Footer from "../components/Footer.jsx";
import Vegetable from "../components/Vegetable.jsx";
import toast, { Toaster } from "react-hot-toast";

function Vegetables() {
  const [veggis, setVeggis] = useState(vegetables);
  const [refreshCart, setRefreshCart] = useState(false);

  function addToCart(items) {
    const exsistingCard = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const itemsIndex = exsistingCard.findIndex(
      (cartItem) => cartItem.id === items.id
    );
    if (itemsIndex != -1) {
      exsistingCard[itemsIndex] = items;
    } else {
      exsistingCard.push(items);
    }

    localStorage.setItem("cartItems", JSON.stringify(exsistingCard));

    setTimeout(() => {
      setRefreshCart(!refreshCart);
      toast.success("item added successfully..");
    }, 1000);
  }

  return (
    <div className="vegetable-box">
      <Navbar />

      <div className="flex justify-center items-center flex-wrap">
        {veggis.map((vegetable) => {
          return (
            <Vegetable
              key={vegetable.id}
              {...vegetable}
              addToCart={addToCart}
            />
          );
        })}
      </div>
      <Footer />

      <Toaster />
    </div>
  );
}

export default Vegetables;
