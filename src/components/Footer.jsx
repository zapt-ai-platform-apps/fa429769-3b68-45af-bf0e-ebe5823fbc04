import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-600">
        <a 
          href="https://www.zapt.ai" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="underline cursor-pointer"
        >
          Made on ZAPT
        </a>
      </div>
    </footer>
  );
}