import React, { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback('');
    try {
      console.log('Submitting contact form');
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFeedback('Your message has been sent successfully.');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err) {
      console.error(err);
      setFeedback('Error sending message.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      {feedback && <p className="mb-4 text-green-600">{feedback}</p>}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded box-border"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded box-border"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Phone</label>
        <input 
          type="text" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded box-border"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Message</label>
        <textarea 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded box-border"
          required
        ></textarea>
      </div>
      <button 
        type="submit" 
        disabled={submitting} 
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded cursor-pointer disabled:opacity-50"
      >
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}