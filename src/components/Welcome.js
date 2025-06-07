import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export default function Welcome() {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/dashboard', { replace: true });
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white font-sans text-gray-900 px-4 text-center">
      <h1 className="text-5xl font-extrabold mb-6 select-text">
        Welcome, {userData?.name || 'User'}!
      </h1>
      <p className="text-lg text-gray-600">
        Redirecting you to your dashboard...
      </p>
    </div>
  );
}
