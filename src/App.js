import React, { useContext, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import OnboardingWizard from './components/OnboardingWizard';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import { UserContext } from './context/UserContext';

export default function App() {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (userData && userData.onboarded) {
  //     navigate('/dashboard', { replace: true });
  //   }
  // }, [userData, navigate]);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-700">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register/*" element={<OnboardingWizard />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
