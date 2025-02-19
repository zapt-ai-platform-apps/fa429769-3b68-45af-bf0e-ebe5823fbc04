import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactMap from '../components/ContactMap';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <ContactForm />
        </div>
        <div className="md:w-1/2">
          <ContactMap />
        </div>
      </div>
    </div>
  );
}