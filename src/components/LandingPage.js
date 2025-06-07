import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white font-sans text-gray-700 px-6">
      <div className="w-full max-w-4xl flex flex-col items-center text-center space-y-16">
        {/* Hero Section */}
        <header className="space-y-6 animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Welcome to <span className="text-blue-600">Company Portal</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            A platform crafted for efficient team management, collaboration, and real-time analytics.
          </p>
          <button
            onClick={() => navigate('/register')}
            className="px-12 py-4 bg-black text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-gray-900 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-2"
          >
            Get Started
          </button>
        </header>

        {/* Features Section */}
        <section className="w-full bg-gray-50 py-12 rounded-2xl animate-fadeIn delay-200">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Team Management',
                description:
                  'Effortlessly organize your teams, assign tasks, and streamline onboarding. Manage roles, permissions, and schedules with an intuitive interface for seamless collaboration.',
              },
              {
                title: 'Productivity Analytics',
                description:
                  'Gain insights with real-time dashboards and detailed reports. Track performance, monitor progress, and identify bottlenecks with customizable analytics tools.',
              },
              {
                title: 'Enterprise-Grade Security',
                description:
                  'Protect data with advanced encryption, multi-factor authentication, and continuous monitoring. Ensure 24/7 reliability and compliance with industry standards.',
              },
              {
                title: 'Real-Time Collaboration',
                description:
                  'Enable seamless communication with integrated chat, file sharing, and collaborative workspaces. Keep teams aligned with real-time updates and notifications.',
              },
            ].map(({ title, description }, idx) => (
              <article
                key={idx}
                tabIndex={0}
                role="region"
                aria-label={title}
                className="bg-white rounded-2xl shadow-md p-6 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full border-t border-gray-200 pt-8 pb-4 text-gray-500 text-sm select-none animate-fadeIn delay-300">
          <p>© {new Date().getFullYear()} Company Portal. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4 text-xl">
            {['📸', '🌟', '🚀'].map((icon, i) => (
              <span
                key={i}
                className="border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center select-none"
              >
                {icon}
              </span>
            ))}
          </div>
        </footer>
      </div>
    </div>
);
}
