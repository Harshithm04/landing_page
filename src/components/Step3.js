import React, { useState } from 'react';

export default function Step3({ onBack, onSubmit }) {
  const [form, setForm] = useState({ theme: 'light', layout: 'grid' });
  const isValid = form.theme.trim() !== '' && form.layout.trim() !== '';

  return (
    <div className="flex flex-col space-y-6 font-sans">
      <h2 className="text-3xl font-extrabold text-gray-900 select-text">Step 3: Preferences</h2>
      <label className="flex flex-col space-y-1">
        <span className="font-semibold text-gray-800">Theme:</span>
        <select
          value={form.theme}
          onChange={e => setForm({ ...form, theme: e.target.value })}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          aria-label="Theme"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
      <label className="flex flex-col space-y-1">
        <span className="font-semibold text-gray-800">Dashboard Layout:</span>
        <select
          value={form.layout}
          onChange={e => setForm({ ...form, layout: e.target.value })}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          aria-label="Dashboard layout"
        >
          <option value="grid">Grid</option>
          <option value="list">List</option>
        </select>
      </label>
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Back
        </button>
        <button
          onClick={() => onSubmit(form)}
          disabled={!isValid}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50 focus:outline-none focus:ring-4 focus:ring-indigo-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
