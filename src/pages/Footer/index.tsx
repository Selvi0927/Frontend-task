import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-violet-500 text-black py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold mb-4">HELP</h4>
          <ul>
            <li className="mb-2">Track Order</li>
            <li className="mb-2">Cancellation</li>
            <li className="mb-2">Return</li>
            <li className="mb-2">Payment</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">SHOP</h4>
          <ul>
            <li className="mb-2">Products</li>
            <li className="mb-2">Overview</li>
            <li className="mb-2">Pricing</li>
            <li className="mb-2">Releases</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">COMPANY</h4>
          <ul>
            <li className="mb-2">About Us</li>
            <li className="mb-2">Contact</li>
            <li className="mb-2">News</li>
            <li className="mb-2">Support</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">STAY UP TO DATE</h4>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md border border-gray-300 text-gray-800"
            />
            <button className="p-2 bg-white text-purple-500 rounded-r-md">SUBMIT</button>
          </div>
          <h4 className="font-bold mb-2">Social Media</h4>
          <div className="flex space-x-4">
            <a href="#"><FaInstagram className='w-6 h-6' /></a>
            <a href="#"><CiFacebook className="w-6 h-6"/></a>
            <a href="#"><FaWhatsapp className="w-6 h-6"/></a>
            <a href="#"><FaTwitter className="w-6 h-6"/></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t border-gray-400 pt-4 flex justify-between text-sm">
        <div>&nbsp;</div>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
