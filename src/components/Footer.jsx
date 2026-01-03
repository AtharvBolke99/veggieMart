import React from 'react'
import { Link } from 'react-router'
import { Phone, Mail, MapPin } from "lucide-react";
import "../components/Footer.css"

function Footer() {
  return (
    <div className="footer">
        <div className="logo-footer">
          <h2 className="logo">
            Veggie<span className="hightlighter">Mart</span>
          </h2>
          <p className="footer-info">
            Bringing farm-fresh vegetables directly to your doorstep. Quality
            produce for a healthier lifestyle.
          </p>
        </div>

        <div className="quick-links">
          <h2 className="quick-links-text">Quick Links</h2>
          <Link to="/" className="footer-menu">
            Home
          </Link>
          <Link to="/vegetable" className="footer-menu">
            Vegetable
          </Link>
          <Link to="/contact" className="footer-menu">
            Contact Us
          </Link>
          <Link to="/cart" className="footer-menu">
            Cart
          </Link>
        </div>

        <div className="contact-address">
          <h2 className="name-contact">Contact Us</h2>
          <p className="number"> <Phone size={20} className="footer-icon" /> +91 8262019461</p>
          <p className="number"> <Mail size={20} className="footer-icon"/>atharvbolke981@gmail.com</p>
          <p className="number"> <MapPin size={20} className="footer-icon" />123 Farm Lane, Green Valley, CA 90210</p>
        </div>
      </div>
  )
}

export default Footer
