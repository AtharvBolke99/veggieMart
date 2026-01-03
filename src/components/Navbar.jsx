import React, { useState } from "react";
import { Link } from "react-router";
import "../components/Navbar.css"

function Navbar() {
  return (
    <div className="header">
      <h2 className="logo-name">
        Veggie<span className="hightlighter">Mart</span>
      </h2>
      <div className= "menu-link">
        <Link to="/" className="menu">
          Home
        </Link>
        <Link to="/vegetable" className="menu">
          Vegetable
        </Link>
        <Link to="/contact" className="menu-contact">
          Contact Us
        </Link>
        
        <Link to="/cart" className="menu">
          Cart
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
