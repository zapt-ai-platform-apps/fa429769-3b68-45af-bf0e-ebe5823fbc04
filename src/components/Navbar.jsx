import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold cursor-pointer">
          Mahakaya Interiors
        </div>
        <div className="space-x-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}
          >
            About
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}
          >
            Services
          </NavLink>
          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}
          >
            Portfolio
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}