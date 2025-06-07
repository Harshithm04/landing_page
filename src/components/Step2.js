import React, { useState } from 'react';

export default function Step2({ onNext, onBack }) {
  const [form, setForm] = useState({ company: '', industry: '', size: '' });
  const isValid = [form.company, form.industry, form.size].every(s => s.trim() !== '');

  return (
    <div className="flex flex-col space-y-6 font-sans">
      <h2 className="text-3xl font-extrabold text-gray-900 select-text">Step 2: Business Info</h2>

      <input
        type="text"
        placeholder="Company Name"
        value={form.company}
        onChange={e => setForm({ ...form, company: e.target.value })}
        required
        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        aria-label="Company Name"
      />
      <input
        type="text"
        placeholder="Industry"
        value={form.industry}
        onChange={e => setForm({ ...form, industry: e.target.value })}
        required
        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        aria-label="Industry"
      />
      <input
        type="text"
        placeholder="Company Size"
        value={form.size}
        onChange={e => setForm({ ...form, size: e.target.value })}
        required
        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        aria-label="Company Size"
      />

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Back
        </button>
        <button
          onClick={() => onNext(form)}
          disabled={!isValid}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50 focus:outline-none focus:ring-4 focus:ring-indigo-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}
