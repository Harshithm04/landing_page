/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',
        accent: '#6366F1',
      },
    },
  },
  safelist: [
    'bg-primary',
    'bg-accent',
    'text-primary',
    'text-accent',
  ],
};