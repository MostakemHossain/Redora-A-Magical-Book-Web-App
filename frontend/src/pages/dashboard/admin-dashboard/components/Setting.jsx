import React from 'react';

export default function SettingsPage() {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm">
      <h2 className="text-3xl font-bold text-slate-800 mb-4">Settings</h2>
      <p className="text-slate-600">
        Configure your dashboard preferences, notifications, and security settings.
      </p>
      <div className="mt-6 space-y-4">
        <div className="bg-slate-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-slate-800">General Settings</h3>
          <p className="text-sm text-slate-600">Update your profile information and language preferences.</p>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-slate-800">Security</h3>
          <p className="text-sm text-slate-600">Manage password and two-factor authentication.</p>
        </div>
      </div>
    </div>
  );
}
