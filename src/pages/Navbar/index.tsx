import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <nav className="w-full bg-white p-4 shadow flex justify-between items-center">
        <div className="text-lg font-bold">LOGO</div>
        <div className="flex gap-4">
          <a href="#" className="text-gray-800 font-semibold">HOME</a>
          <a href="#" className="text-gray-800 font-semibold">SHOP</a>
          <a href="#" className="text-gray-800 font-semibold">FEATURES</a>
          <a href="#" className="text-gray-800 font-semibold">ABOUT</a>
          <a href="#" className="text-gray-800 font-semibold">WISHLIST</a>
          <a href="#" className="text-gray-800 font-semibold">MY CART</a>
        </div>
        <div className="avatar">
      <div className="ring-primary ring-offset-base-50 w-10 h-10 rounded-full ring ring-offset-2 overflow-hidden">
        <img 
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
          alt="Avatar"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
      </nav>
      <header className="relative w-full flex flex-col items-center text-center bg-purple-200 py-20">
        <h1 className="text-5xl font-bold">New Fashion</h1>
        <p className="max-w-2xl mt-4 text-gray-700">
          Whether It's Through Our Ethically Sourced Materials, Our Commitment
          To Fair Labor Practices, Or Our Dedication To Empowering Local
          Artisans, We Strive To Make A Positive Impact On Both The Fashion
          Industry And The World At Large.
        </p>
        <button className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700">
          Shop Now
        </button>
        <div className="flex gap-2 mt-6">
          <div className="w-6 h-6 rounded-full bg-blue-200 cursor-pointer"></div>
          <div className="w-6 h-6 rounded-full bg-pink-400 cursor-pointer"></div>
          <div className="w-6 h-6 rounded-full bg-gray-400 cursor-pointer"></div>
        </div>
      </header>
    </div>
  );
};

export default App;
