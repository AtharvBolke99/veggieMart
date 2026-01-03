import React from "react";
import { Leaf } from "lucide-react";
import "./Services.css";

function Services({ img, title, description }) {
  return (
      <div className="services">
        {img}
        <div className="servies-body">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
  );
}

export default Services;
