import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: ''
  });

  const [showPopup, setShowPopup] = useState(false); // ✅ Popup state

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
      setShowPopup(true); // ✅ Show popup
      setForm({ name: '', email: '', phone: '', location: '' });
    } catch (err) {
      console.error(err);
      alert('Submission failed!');
    }
  };

  return (
    <div id="main" className="min-h-screen flex items-center justify-left bg-gray-100 relative">

      {/* ✅ Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center">
            <h3 className="text-2xl font-bold mb-2 text-green-600">🎊 Congratulations!</h3>
            <p className="text-gray-700 mb-4">Your form has been submitted successfully.</p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* 🧾 Form */}
      <div className="bg-white/30 ml-14 backdrop-blur-sm border border-white/40 shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Fill this, I will give u a task!! 🎁✨❤️
        </h2>
        <form onSubmit={handleSubmit} className="space-y-10">
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
            className="w-full bg-white text-black py-2 rounded-lg hover:bg-black hover:text-white transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
