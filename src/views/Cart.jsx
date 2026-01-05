import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { Trash } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

function Cart() {
  const [cart, setCart] = useState([
    {
      id: "",
      title: "",
      price: "",
      subtitle: "",
      img: "",
      quantity: "",
      totalPrice: "",
    },
  ]);

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("cartItems"));
    if (getData) {
      setCart(getData);
    } else {
      return;
    }
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <h2 className="text-3xl text-gray-500 font-bold text-center my-10">
          Shopping Cart
        </h2>
        <div className="m-10 flex-col justify-center items-center">
          {cart.map((itemcart) => {
            return (
              <div className="bg-white m-auto my-5 max-w-250 flex items-center justify-around p-3 border rounded-2xl">
                <img src={itemcart.img} className="w-20" alt="vegetable-img" />
                <div>
                  <p className="text-xl font-bold">{itemcart.title}</p>
                  <p className="text-lg">₹{itemcart.price} per kg</p>
                </div>
                <div className="flex-col justify-center items-center">
                  <p className="text-lg">Quantity</p>
                  <p className="text-lg text-center">{itemcart.quantity}</p>
                </div>

                <div className="flex-col justify-center items-center">
                  <p className="text-lg">Total Price</p>
                  <p className="text-lg text-center">
                    ₹{Number(itemcart.price) * Number(itemcart.quantity)}
                  </p>
                </div>
                <Trash
                  className="cursor-pointer text-red-500"
                  onClick={() => {
                    const existingCart = JSON.parse(
                      localStorage.getItem("cartItems") || "[]"
                    );

                    const updatedCart = existingCart.filter(
                      (item) => item.id !== itemcart.id
                    );

                    localStorage.setItem(
                      "cartItems",
                      JSON.stringify(updatedCart)
                    );
                    setCart(updatedCart);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <button
        className="px-5 py-2 fixed bottom-10 right-10 border rounded-2xl bg-green-600 text-white cursor-pointer"
        onClick={() => {
          if (cart == "") {
            toast.error("Please add the items to the card");
          } else {
            toast.success("Order Confirmed Successfully");
          }
        }}
      >
        Proceed
      </button>

      <Toaster />
    </div>
  );
}

export default Cart;
