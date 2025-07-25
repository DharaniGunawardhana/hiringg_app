import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/company-logo.png'; 

function Navbar() {
  return (
    <nav className="w-full bg-black p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 mr-4" />
          <span className="text-white font-bold text-xl">Hiring Web Portal</span>
        </Link>
        <div>
          <Link to="/" className="text-gray-300 hover:text-white mr-4">
            Home
          </Link>
          <Link to="/predict" className="text-gray-300 hover:text-white mr-4">
            Predict
          </Link>
          <Link to="/dashboard" className="text-gray-300 hover:text-white mr-4">
            Dashboard
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
