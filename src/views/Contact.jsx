import React, { useState } from "react";
import "../views/Contact.css";
import Navbar from "../components/Navbar";
import toast ,{ Toaster } from "react-hot-toast";
import Footer from "../components/Footer";

function Contact() {
    
  return (
    <div>
      <Navbar />
      <div className="contact-page">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          Have questions about our products or services? We'd love to hear from
          you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <form className="form-contact">
        <p className="name-contact">Your Name</p>
        <input
          type="text"
          placeholder="Enter The Name"
          className="placeholder-input"
        />

        <p className="name-contact">Email</p>
        <input
          type="email"
          placeholder="Enter The Email"
          className="placeholder-input"
        />

        <p className="name-contact">Subject</p>
        <input
          type="text"
          placeholder="Enter The Subject"
          className="placeholder-input"
        />

        <p className="name-contact">Your Message</p>
        <textarea
          placeholder="Tell us more about your inquiry..."
          className="placeholder-input-textarea"
        />

        <button className="btn-contact-send">Send Message</button>
      </form>

      <Footer />

      <Toaster />
    </div>
  );
}

export default Contact;
