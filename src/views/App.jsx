import React from "react";
import "./App.css";
import Navbar from "../components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="sub-section">
        <div className="text-section">
          <h2 className="sub-header-name">
            Fresh Vegetables{" "}
            <span className="sub-head-text">Delivered Daily</span>
          </h2>
          <p className="para">
            From our local farms to your table. Experience the freshest, most
            nutritious vegetables handpicked for you and your family.
          </p>
        </div>
        <div className="shop-btn-section">
          <button className="shop-now-btn">Shop Now</button>
          <button className="contact-now-btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default App;
