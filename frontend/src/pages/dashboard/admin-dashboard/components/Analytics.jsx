import React from 'react';

export default function AnalyticsPage() {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <h2 className="text-3xl font-bold text-slate-800 mb-4">Analytics & Reports</h2>
      <p className="text-slate-600">
        Dive deep into your data with comprehensive analytics and custom reports.
      </p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-yellow-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-yellow-700">Website Traffic</h3>
          <p className="text-slate-600">View daily, weekly, and monthly traffic trends.</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-red-700">Sales Performance</h3>
          <p className="text-slate-600">Track sales figures and identify top-performing products.</p>
        </div>
      </div>
    </div>
  );
}
