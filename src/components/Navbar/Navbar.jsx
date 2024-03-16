import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex justify-between items-center">
      {/* Left side */}
      <div className="flex items-center ml-3">
        {/* Logo */}
        <img src="../src/assets/logo.png" alt="Company Logo" className="h-8 w-auto mr-2" />
        {/* Company Name */}
        <h1 className="text-white text-lg font-semibold">Agro</h1>
      </div>
      
      {/* Right side */}
      <div className="flex items-center">
        {/* Nav items */}
        <ul className="flex space-x-6 text-white">
          <li><a href="#" className="hover:underline">Rent Now</a></li>
          <li><a href="#" className="hover:underline">Share Resources</a></li>
        </ul>
        
        {/* Buttons */}
        <div className="ml-6">
          <button className="bg-transparent border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-green-500 transition duration-300">Register</button>
          <button className="bg-transparent border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-green-500 transition duration-300 ml-2">Log In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
