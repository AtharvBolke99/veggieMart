import React, { useState } from "react";
import Navbar from "../components/Navbar";
import vegetables from "../configs/Vegetables.js";
import { Key, Leaf } from "lucide-react";
import Footer from "../components/Footer.jsx"

function Vegetables() {
  const [veggis, setVeggis] = useState(vegetables);
  const [addCart, setAddCart] = useState([""]);
  return (
    <div className="vegetable-box">
      <Navbar />

      <div className="flex justify-center items-center flex-wrap">
        {veggis.map((vegetable) => {
          return (
            <div className="bg-white w-75 h-100 rounded-xl m-10 mx-5 shadow-black shadow-sm relative">
              <img src={vegetable.img} className="w-75 rounded-t-xl h-50" />
              <div className="flex justify-around items-center">
                <h2 className="text-green-300 font-bold text-2xl my-3">{vegetable.title}</h2>
                <p className="text-orange-400">{vegetable.price} per kg</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-center m-1.5 mx-2.5 text-gray-500">{vegetable.subtitle}</p>
                <p className="absolute top-3 left-3 text-white bg-green-300 p-2 rounded-3xl flex items-center">
                  <Leaf size={20} className="mr-1.25" />
                  Organic
                </p>
                <button className="p-2.5 px-5 text-base w-50 mt-5 bg-[#3d8f5a] text-white border-none rounded-xl cursor-pointer" onClick={
                  (items) => {                
                    
                  }
                }>Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Vegetables;
