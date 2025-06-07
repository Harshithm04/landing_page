import React, { useState, useContext } from 'react';
import ProgressBar from './ProgressBar';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { registerUser } from '../api'; 
import { OnboardingContext } from '../context/OnboardingContext';

export default function OnboardingWizard() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const [collectedData, setCollectedData] = useState({});
  const { setUserData } = useContext(UserContext);
  const { updateOnboardingData } = useContext(OnboardingContext);
  const navigate = useNavigate();

  const handleNext = (data) => {
    setCollectedData(prev => ({ ...prev, ...data }));
    setStep((s) => Math.min(s + 1, totalSteps));
  };

  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (finalStepData) => {
    const fullData = { ...collectedData, ...finalStepData };
    try {
      const response = await registerUser(fullData); 
      console.log('✅ API response:', response); 
      setUserData({ ...response, onboarded: true }); 
      updateOnboardingData(fullData); 
      navigate('/welcome', { replace: true });
    } 
    catch (err) {
      console.error('Registration failed:', err);
      alert('Error saving data. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-3xl shadow-xl font-sans">
      <ProgressBar step={step} total={totalSteps} />
      <div className="mt-8">
        {step === 1 && <Step1 onNext={handleNext} />}
        {step === 2 && <Step2 onNext={handleNext} onBack={handleBack} />}
        {step === 3 && <Step3 onBack={handleBack} onSubmit={handleSubmit} />}
      </div>
    </div>
  );
}
