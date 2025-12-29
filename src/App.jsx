import React from "react";
import { Link } from "react-router";
import "./App.css";

function App() {
  return (
    <div>
      <div className="header">
        <h2 className="logo-name">
          Veggie<span className="hightlighter">Mart</span>
        </h2>
        <div className="menu-link">
          <Link to="/" className="menu">
            Home
          </Link>
          <Link to="/" className="menu">
            Vegetable
          </Link>
          <Link to="/" className="menu">
            Cart
          </Link>
          <Link to="/" className="menu">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
