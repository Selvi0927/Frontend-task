import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
const SignUpForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="flex-1 bg-green-700">
      <h1 className="text-black-500 text-4xl font-bold mt-20 ml-20"> Welcome to<br />Digis<span className="text-green-500">Ai</span>lor
</h1>
      </div>
      <div className="flex-1 flex items-center justify-center bg-gray-200">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md space-y-8">
          <h2 className="text-center text-2xl font-bold text-gray-900">Sign Up</h2>
          <p className="text-center text-gray-600">Fill in the details to create a new account.</p>
          <form className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="Enter your password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button type="button" onClick={togglePasswordVisibility} className="focus:outline-none">
                      {showPassword ? (
                        <EyeSlashIcon className="h-5 w-5 text-black-500" />
                      ) : (
                        <EyeIcon className="h-5 w-5 text-black-500" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-center text-sm text-gray-600">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Login
            </a>
          </div>
        </div>
      
      </div>
    </div>
  );
};
export default SignUpForm;
