import React from 'react';

const services = [
  {
    title: 'Custom Furniture',
    description: 'Bespoke pieces tailored to your style.',
    icon: '🪑'
  },
  {
    title: 'Wood Repairs',
    description: 'Restoration and repair for damaged woodworks.',
    icon: '🔨'
  },
  {
    title: 'Cabinet Making',
    description: 'Beautiful and functional cabinetry for your home.',
    icon: '🚪'
  }
];

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded shadow-md p-6 text-center hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}