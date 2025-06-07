import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

export default function OnboardingWizard() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const handleNext = (formData) => {
    // formData can be used or passed upwards if needed
    setStep((s) => Math.min(s + 1, totalSteps));
  };

  const handleBack = () => {
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = (finalData) => {
    // final submission logic here
    console.log('Submitting all data…', finalData);
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
