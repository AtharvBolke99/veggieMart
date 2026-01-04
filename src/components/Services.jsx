import React from "react";
import { Leaf } from "lucide-react";

function Services({ img, title, description }) {
  return (
      <div className="bg-white w-67.5 p-4 flex items-center rounded-xl m-2.5">
        {img}
        <div>
          <h3 className="font-bold">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
  );
}

export default Services;
