import React from "react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";
import { Leaf, Truck, ShieldCheck, Clock, Phone, Mail, MapPin } from "lucide-react";
import Services from "../components/Services";
import Footer from "../components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg-[url(../assets/vegetables.jpeg)] bg-cover mt-2 h-[600px] w-full flex justify-evenly items-center">
        <div>
          <h2 className="text-5xl text-white m-0">
            Fresh Vegetables
            <span className="text-green-300 block text-4xl">Delivered Daily</span>
          </h2>
          <p className="m-4.5 text-xl text-white max-w-[700px]">
            From our local farms to your table. Experience the freshest, most
            nutritious vegetables handpicked for you and your family.
          </p>
        </div>
        <div>
          <button className="p-2 px-5 h-12 w-36 text-lg bg-green-300 text-white cursor-pointer rounded-lg border-none m-2.5">Shop Now</button>
          <Link to="/contact"><button className="p-2 px-5 h-12 w-36 text-lg bg-white/20 text-white cursor-pointer rounded-lg border-2 border-white m-2.5 hover:bg-white/40 transition duration-300">Contact Us</button></Link>
        </div>
      </div>

      <div className="bg-[#fbf2e1] p-12 px-10 flex justify-evenly flex-wrap">
        <Services
          img={<Leaf className="text-white bg-green-300 p-2.5 rounded-lg m-0 mx-5 w-[70px]" />}
          title="100% Oraganic"
          description="Fresh from certified organic farms with no pesticides"
        />

        <Services
          img={<Truck className="text-white bg-green-300 p-2.5 rounded-lg m-0 mx-5 w-[70px]" />}
          title="Free Delivery"
          description="Free delivery on orders over $50 within city limits"
        />

        <Services
          img={<ShieldCheck className="text-white bg-green-300 p-2.5 rounded-lg m-0 mx-5 w-[70px]" />}
          title="Quality Guaranteed"
          description="Not satisfied? Get a full refund, no questions asked"
        />

        <Services
          img={<Clock className="text-white bg-green-300 p-2.5 rounded-lg m-0 mx-5 w-[70px]" />}
          title="Same Day Delivery"
          description="Order before 2pm for same-day delivery service"
        />
      </div>

      <div className="bg-[#3d8f5a] p-18 px-8 flex flex-col justify-center items-center flex-wrap">
        <h2 className="text-white text-4xl m-0 mb-5">Ready to Eat Fresh?</h2>
        <p className="text-white text-center w-[650px]">
          Join thousands of happy customers who enjoy farm-fresh vegetables
          delivered right to their doorstep.
        </p>
        <Link to="/vegetables"><button className="p-2.5 px-5 text-lg bg-green-300 text-white cursor-pointer rounded-lg border-none">Start Shopping →</button></Link>
      </div>

      <Footer />

    </div>
  );
}

export default App;
