import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleEmailBlur = () => {
    const email = form.email;
    if (email && !email.includes('@')) {
      setForm({ ...form, email: email + '@gmail.com' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://sheetdb.io/api/v1/4thq1zig3g12n', { data: form });
      alert('Form submitted successfully!');
      setForm({ name: '', email: '', phone: '', location: '' });
    } catch (err) {
      console.error(err);
      alert('Submission failed!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white/30 backdrop-blur-md border border-white/40 shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-white/50 text-black border border-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-700"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleEmailBlur}
            required
            className="w-full px-4 py-2 bg-white/50 text-black border border-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-700"
          />
          <input
            type="number"
            name="phone"
            placeholder="Contact Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-white/50 text-black border border-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-700"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-white/50 text-black border border-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-700"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
