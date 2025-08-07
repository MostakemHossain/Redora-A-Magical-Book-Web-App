import React from 'react';

export default function DashboardHomePage() {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <h2 className="text-3xl font-bold text-slate-800 mb-4">Dashboard Overview</h2>
      <p className="text-slate-600">
        Welcome to your admin dashboard! Here you can find a summary of your key metrics and recent activities.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-blue-700">Total Users</h3>
          <p className="text-2xl font-bold text-blue-900">1,234</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-green-700">Revenue</h3>
          <p className="text-2xl font-bold text-green-900">$56,789</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-purple-700">New Signups</h3>
          <p className="text-2xl font-bold text-purple-900">87</p>
        </div>
      </div>
    </div>
  );
}
