import React from 'react'
import { Link } from 'react-router'
import { Phone, Mail, MapPin } from "lucide-react";

function Footer() {
  return (
    <div className="bg-[#1d3026] flex flex-col justify-center items-center w-full p-5 md:flex-row md:justify-evenly md:items-start md:flex-wrap">
        <div className="flex flex-col justify-start items-start">
          <h2 className="text-white">
            Veggie<span className="text-green-300">Mart</span>
          </h2>
          <p className="text-white w-[250px]">
            Bringing farm-fresh vegetables directly to your doorstep. Quality
            produce for a healthier lifestyle.
          </p>
        </div>

        <div className="hidden md:flex md:flex-col md:justify-center md:items-start md:m-2.5">
          <h2 className="text-white">Quick Links</h2>
          <Link to="/" className="text-white no-underline text-lg m-1.5">
            Home
          </Link>
          <Link to="/vegetables" className="text-white no-underline text-lg m-1.5">
            Vegetable
          </Link>
          <Link to="/contact" className="text-white no-underline text-lg m-1.5">
            Contact Us
          </Link>
          <Link to="/cart" className="text-white no-underline text-lg m-1.5">
            Cart
          </Link>
        </div>

        <div className="text-white m-2.5 flex flex-col justify-center items-start">
          <h2 className="text-gray-500">Contact Us</h2>
          <p className="flex items-center w-[250px]"> <Phone size={20} className="mr-2.5" /> +91 8262019461</p>
          <p className="flex items-center w-[250px]"> <Mail size={20} className="mr-2.5"/>atharvbolke981@gmail.com</p>
          <p className="flex items-center w-[250px]"> <MapPin size={20} className="mr-2.5" />123 Farm Lane, Green Valley, CA 90210</p>
        </div>
      </div>
  )
}

export default Footer
