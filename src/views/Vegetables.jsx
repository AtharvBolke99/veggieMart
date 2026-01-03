import React, { useState } from "react";
import "../views/Vegetables.css";
import Navbar from "../components/Navbar";
import vegetables from "../configs/Vegetables.js";
import { Leaf } from "lucide-react";
import Footer from "../components/Footer.jsx"

function Vegetables() {
  const [veggis, setVeggis] = useState(vegetables);
  return (
    <div className="vegetable-box">
      <Navbar />

      <div className="map-veggis">
        {veggis.map((vegetable) => {
          return (
            <div className="vegetables-card">
              <img src={vegetable.img} className="img-vegetable" />
              <div className="price-title-box">
                <h2 className="title-veggis">{vegetable.title}</h2>
                <p className="price">{vegetable.price} per kg</p>
              </div>
              <div className="btn-vegetable">
                <p className="subtitle">{vegetable.subtitle}</p>
                <p className="label">
                  <Leaf size={20} className="label-img" />
                  Organic
                </p>
                <button className="btn-veggis">Add to cart</button>
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
