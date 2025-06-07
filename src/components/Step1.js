import React, { useState } from 'react';

export default function Step1({ onNext }) {
  const [form, setForm] = useState({ name: '', email: '' });
  const isValid = form.name.trim() !== '' && form.email.trim() !== '';

  return (
    <div className="flex flex-col space-y-6 font-sans">
      <h2 className="text-3xl font-extrabold text-gray-900 select-text">Step 1: Personal Info</h2>

      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        required
        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        aria-label="Name"
      />
      
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        required
        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        aria-label="Email"
      />

      <button
        onClick={() => onNext(form)}
        disabled={!isValid}
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50 focus:outline-none focus:ring-4 focus:ring-indigo-300"
      >
        Next
      </button>
    </div>
  );
}
