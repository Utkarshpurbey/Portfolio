'use client'
// pages/contact.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here (you can send the data to your server).
  };

  return (
    <div className=" flex items-center w-full justify-center bg-[#7d12ff]">
      <div className="bg-white opacity-85 p-4 md:p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl text-[#7d12ff] md:text-3xl lg:text-4xl font-bold text-7d12ff text-center mb-2 md:mb-4">
          Contact Me
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2 md:mb-4">
            <label htmlFor="name" className="block text-gray-700">Your Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#7d12ff]"
            />
          </div>
          <div className="mb-2 md:mb-4">
            <label htmlFor="email" className="block text-gray-700">Your Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#7d12ff]"
            />
          </div>
          <div className="mb-4 md:mb-6">
            <label htmlFor="message" className="block text-gray-700">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              required
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-[#7d12ff]"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-[#7d12ff] text-white rounded-md py-2 hover:bg-opacity-80">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
