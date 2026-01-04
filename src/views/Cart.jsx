import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";

function Cart() {
  const [cart, setCart] = useState([
    {
      id: "",
      title: "",
      price: "",
      subtitle: "",
      img: "",
      quantity: "",
    },
  ]);

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("cartItems"));
    setCart(getData);
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <h2 className="text-3xl text-gray-500 font-bold text-center my-10">
          Shopping Cart
        </h2>
        <div className="m-10">
          {cart.map((itemcart) => {
            return (
              <div className="bg-white my-5 flex items-center justify-evenly p-3 border rounded-2xl">
                <img src={itemcart.img} className="w-20" alt="vegetable-img" />
                <div>
                  <p className="text-xl font-bold">{itemcart.title}</p>
                  <p className="text-lg">{itemcart.price} per kg</p>
                </div>
                <div className="flex-col justify-center items-center">
                  <p className="text-lg">Quantity</p>
                  <p className="text-lg text-center">{itemcart.quantity}</p>
                </div>
                <p>total price : {Number(itemcart.price) * Number(itemcart.quantity)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cart;
