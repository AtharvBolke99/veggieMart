import React from "react";
import "./App.css";
import Navbar from "../components/Navbar";
import { Leaf } from "lucide-react";
import Services from "../components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <div className="sub-section">
        <div className="text-section">
          <h2 className="sub-header-name">
            Fresh Vegetables
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

      <div className="our-services">
        <Services
          img={<Leaf className="images-services" />}
          title="100% Oraganic"
          description="Fresh from certified organic farms with no pesticides"
        />

        <Services
          img={<Leaf className="images-services" />}
          title="Free Delivery"
          description="Free delivery on orders over $50 within city limits"
        />

        <Services
          img={<Leaf className="images-services" />}
          title="Quality Guaranteed"
          description="Not satisfied? Get a full refund, no questions asked"
        />

        <Services
          img={<Leaf className="images-services" />}
          title="Same Day Delivery"
          description="Order before 2pm for same-day delivery service"
        />
      </div>

      <div className="sub-footer">
        <h2>Ready to Eat Fresh?</h2>
        <p>
          Join thousands of happy customers who enjoy farm-fresh vegetables
          delivered right to their doorstep.
        </p>
        <button>Start Shopping  →</button>
      </div>
    </div>
  );
}

export default App;
