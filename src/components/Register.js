// src/components/Register.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: actually register...
    navigate('/onboarding/step1');
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <input type="text" placeholder="Name" required className="px-3 py-2 border rounded" />
        <input type="email" placeholder="Email" required className="px-3 py-2 border rounded" />
        <input type="password" placeholder="Password" required className="px-3 py-2 border rounded" />
        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
          Sign Up
        </button>
      </form>
      <p className="mt-4">
        Already have an account?{' '}
        <Link to="/login" className="text-green-600 underline">
          Login
        </Link>
      </p>
    </div>
  );
}
