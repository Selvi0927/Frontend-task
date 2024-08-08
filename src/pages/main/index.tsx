import React from 'react';
const AboutMyLifeMyStyle: React.FC = () => {
  return (
    <div className="bg-[#9776C4] min-h-screen">
      <header className="flex items-center justify-between p-4 bg-[#9776C4]">
        <div>
          <img src="/Group 3.png" alt="Fashion Logo" className="h-50 w-50 inline-block mr-2" />
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
          />
        <nav>
          <ul className="flex space-x-4 text-white">
            <li>HOME</li>
            <li>SHOP</li>
            <li>FEATURES</li>
            <li>ABOUT</li>
            <li>WISHLIST</li>
            <li>MY CART</li>
          </ul>
        </nav>
        </div>
        <div className="flex items-center space-x-5">
          <button className="bg-white text-purple-600 px-4 py-2 rounded">LOGIN</button>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 h-10 rounded-full ring ring-offset-2 overflow-hidden">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="User Avatar" />
            </div>
          </div>
        </div>
      </header>
      <div className="relative text-center text-white">
      <img
        src="/unsplash_7RIMS-NMsbc.jpg"
        alt="Shirts"
        className="w-full h-auto"/>
      <div className="absolute bottom-10 right-96 w-full bg-opacity-50">
        <h1 className="text-5xl font-bold">About MY LIFE MY STYLE</h1>
      </div>
    </div>
     
    </div>
  );
};
export default AboutMyLifeMyStyle;

