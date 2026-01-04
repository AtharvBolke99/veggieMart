import React from "react";
import { Leaf } from "lucide-react";

function Services({ img, title, description }) {
  return (
      <div className="bg-white w-[270px] p-4 flex items-center rounded-xl m-2.5">
        {img}
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
  );
}

export default Services;
