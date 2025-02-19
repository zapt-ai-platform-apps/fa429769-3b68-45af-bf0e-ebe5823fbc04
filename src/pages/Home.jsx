import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="relative h-full">
      <div className="absolute inset-0">
        <img 
          src="" 
          alt="Woodworking background" 
          data-image-request="woodworking workshop" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Crafting Timeless Woodworks</h1>
        <p className="mb-8 text-lg md:text-2xl">Experience the art of woodworking with unmatched craftsmanship.</p>
        <button 
          onClick={() => navigate('/services')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded cursor-pointer disabled:opacity-50"
        >
          Explore Our Services
        </button>
      </div>
    </div>
  );
}