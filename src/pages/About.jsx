import React from 'react';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <img 
            src="" 
            alt="Our craftsmanship" 
            data-image-request="carpentry craftsmanship image" 
            className="w-full h-auto rounded shadow-md"
          />
        </div>
        <div className="md:w-1/2 text-gray-700">
          <p className="mb-4">
            With decades of experience in woodworking, our team brings passion and precision to every project. We combine traditional techniques with modern design to deliver superior craftsmanship.
          </p>
          <h3 className="text-2xl font-semibold mb-2">Why Choose Us</h3>
          <ul className="list-disc list-inside">
            <li>Expert Craftsmanship</li>
            <li>Quality Materials</li>
            <li>Customized Solutions</li>
            <li>Unmatched Attention to Detail</li>
          </ul>
        </div>
      </div>
    </div>
  );
}