import React, { useState } from "react";
import Navbar from "../components/Navbar";
import toast ,{ Toaster } from "react-hot-toast";
import Footer from "../components/Footer";

function Contact() {
    
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center flex-wrap">
        <h1 className="text-5xl text-center mt-15 mb-4">Get in Touch</h1>
        <p className="text-center w-[400px] md:w-[700px] text-gray-500 mt-0">
          Have questions about our products or services? We'd love to hear from
          you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <form className="w-fit p-2.5 px-5 m-auto">
        <p className="text-gray-500 text-xl m-2.5 mx-auto">Your Name</p>
        <input
          type="text"
          placeholder="Enter The Name"
          className="p-2.5 px-2.5 w-[400px] rounded-xl border-none border border-gray-500 mb-4 text-lg"
        />

        <p className="text-gray-500 text-xl m-2.5 mx-auto">Email</p>
        <input
          type="email"
          placeholder="Enter The Email"
          className="p-2.5 px-2.5 w-[400px] rounded-xl border-none border border-gray-500 mb-4 text-lg"
        />

        <p className="text-gray-500 text-xl m-2.5 mx-auto">Subject</p>
        <input
          type="text"
          placeholder="Enter The Subject"
          className="p-2.5 px-2.5 w-[400px] rounded-xl border-none border border-gray-500 mb-4 text-lg"
        />

        <p className="text-gray-500 text-xl m-2.5 mx-auto">Your Message</p>
        <textarea
          placeholder="Tell us more about your inquiry..."
          className="h-25 p-2.5 px-2.5 w-[400px] rounded-xl border-none border border-gray-500 mb-4 block text-xl"
        />

        <button className="p-2.5 px-5 text-base rounded-xl border-none bg-green-300 text-white w-36 m-2.5 mx-auto cursor-pointer">Send Message</button>
      </form>

      <Footer />

      <Toaster />
    </div>
  );
}

export default Contact;
