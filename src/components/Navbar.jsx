import React, { useState } from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className="m-1.5 flex justify-between items-center shadow-[0_0_7px_rgb(145,231,145)] p-0 px-3.5 rounded-full bg-white sticky top-2 h-[60px] max-w-full z-10">
      <h2 className="text-xl font-semibold">
        Veggie<span className="text-green-300">Mart</span>
      </h2>
      <div className="flex ">
        <Link to="/" className="text-xl m-2.5 no-underline border-b--2-transparent text-black hover:border-b-2 hover:border-green-300 hover:text-green-300 transition duration-300">
          Home
        </Link>
        <Link to="/vegetables" className="text-xl m-2.5 no-underline text-black hover:border-b-2 hover:border-green-300 hover:text-green-300 transition duration-300">
          Vegetable
        </Link>
        <Link to="/contact" className="text-xl m-2.5 no-underline text-black hover:border-b-2 hover:border-green-300 hover:text-green-300 transition duration-300 hidden md:block">
          Contact Us
        </Link>
        
        <Link to="/cart" className="text-xl m-2.5 no-underline text-black hover:border-b-2 hover:border-green-300 hover:text-green-300 transition duration-300">
          Cart
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
