import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const sampleData = [
  { day: 'Mon', progress: 30 },
  { day: 'Tue', progress: 50 },
  { day: 'Wed', progress: 70 },
  { day: 'Thu', progress: 60 },
  { day: 'Fri', progress: 90 },
  { day: 'Sat', progress: 80 },
  { day: 'Sun', progress: 100 },
];

export default function Dashboard() {
  const { userData } = useContext(UserContext);

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8 font-sans">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="flex-1 p-6 bg-white rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Name</h3>
          <p className="text-gray-700">{userData?.name || '—'}</p>
        </div>
        <div className="flex-1 p-6 bg-white rounded-2xl shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
          <p className="text-gray-700">{userData?.email || '—'}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl shadow-md flex flex-col items-center text-center">
          <h4 className="text-gray-600 font-medium">Team Members</h4>
          <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-md flex flex-col items-center text-center">
          <h4 className="text-gray-600 font-medium">Active Projects</h4>
          <p className="text-3xl font-bold text-gray-900 mt-2">5</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-md flex flex-col items-center text-center">
          <h4 className="text-gray-600 font-medium">Notifications</h4>
          <p className="text-3xl font-bold text-gray-900 mt-2">3</p>
        </div>
      </div>

      <div className="p-6 bg-white rounded-2xl shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 select-text">Weekly Progress</h2>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={sampleData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="day" tick={{ fill: '#6b7280', fontWeight: '600' }} />
            <YAxis tick={{ fill: '#6b7280', fontWeight: '600' }} />
            <Tooltip contentStyle={{ backgroundColor: 'white', borderRadius: 8 }} />
            <Line type="monotone" dataKey="progress" stroke="#4f46e5" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
