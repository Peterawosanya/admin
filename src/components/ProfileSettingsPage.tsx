import React, { useState } from 'react';
import { Lock, ShieldCheck, LogIn, Mail, Smartphone, Download, ChevronRight, CheckCircle, XCircle, Link, Sun, Moon, Cloud } from 'lucide-react';
import { useTheme } from './ThemeContext';

export const ProfileSettingsPage: React.FC = () => {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [twoFAEnabled, setTwoFAEnabled] = useState(false);
  const [show2FAForm, setShow2FAForm] = useState(false);
  const [notifEmail, setNotifEmail] = useState(true);
  const [notifSMS, setNotifSMS] = useState(false);
  const { theme, setTheme } = useTheme();

  // Dummy login history
  const loginHistory = [
    { date: '2024-06-01 10:23', device: 'Chrome on Windows', location: 'New York, USA', status: 'Success' },
    { date: '2024-05-30 18:12', device: 'Safari on iPhone', location: 'London, UK', status: 'Success' },
    { date: '2024-05-29 09:45', device: 'Edge on Windows', location: 'Berlin, DE', status: 'Failed' },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Account Security */}
      <div className="bg-white dark:bg-darkcard rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-blue-500" /> Account Security</h2>
        <div className="flex flex-col gap-4">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-max"
            onClick={() => setShowChangePassword(v => !v)}
          >
            <Lock className="w-4 h-4" /> Change Password <ChevronRight className="w-4 h-4" />
          </button>
          {showChangePassword && (
            <form className="space-y-2 mt-2 bg-gray-50 p-4 rounded">
              <input type="password" placeholder="Current Password" className="w-full border rounded px-3 py-2" />
              <input type="password" placeholder="New Password" className="w-full border rounded px-3 py-2" />
              <input type="password" placeholder="Confirm New Password" className="w-full border rounded px-3 py-2" />
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Change Password</button>
            </form>
          )}
          <div className="flex items-center gap-3 mt-2">
            <span className="font-medium flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-blue-500" /> Two-Factor Authentication</span>
            <button
              className={`ml-2 px-3 py-1 rounded-full text-sm font-semibold transition ${twoFAEnabled ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}
              onClick={() => { setTwoFAEnabled(v => !v); setShow2FAForm(!twoFAEnabled); }}
            >
              {twoFAEnabled ? 'Enabled' : 'Enable'}
            </button>
            {twoFAEnabled && <CheckCircle className="w-4 h-4 text-green-500 ml-1" />}
            {!twoFAEnabled && <XCircle className="w-4 h-4 text-gray-400 ml-1" />}
          </div>
          {twoFAEnabled && show2FAForm && (
            <div className="bg-gray-50 p-4 rounded mt-2">
              <h4 className="font-semibold mb-2 flex items-center gap-2"><Link className="w-4 h-4 text-blue-500" /> Link Backup Email or Account</h4>
              <input type="email" placeholder="Backup Email" className="w-full border rounded px-3 py-2 mb-2" />
              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition mb-2">Set Backup Email</button>
              <button className="w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300 transition flex items-center justify-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5" /> Link Google Account
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Login History */}
      <div className="bg-white dark:bg-darkcard rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><LogIn className="w-5 h-5 text-blue-500" /> Login History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="py-2 pr-4">Date</th>
                <th className="py-2 pr-4">Device</th>
                <th className="py-2 pr-4">Location</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {loginHistory.map((item, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="py-2 pr-4">{item.date}</td>
                  <td className="py-2 pr-4">{item.device}</td>
                  <td className="py-2 pr-4">{item.location}</td>
                  <td className="py-2">
                    {item.status === 'Success' ? (
                      <span className="text-green-600 flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Success</span>
                    ) : (
                      <span className="text-red-600 flex items-center gap-1"><XCircle className="w-4 h-4" /> Failed</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="bg-white dark:bg-darkcard rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Mail className="w-5 h-5 text-blue-500" /> Notification Preferences</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-blue-400" />
            <span className="font-medium">Email Notifications</span>
            <button
              className={`ml-auto px-3 py-1 rounded-full text-sm font-semibold transition ${notifEmail ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}
              onClick={() => setNotifEmail(v => !v)}
            >
              {notifEmail ? 'Enabled' : 'Enable'}
            </button>
          </div>
          <div className="flex items-center gap-3">
            <Smartphone className="w-4 h-4 text-blue-400" />
            <span className="font-medium">SMS Notifications</span>
            <button
              className={`ml-auto px-3 py-1 rounded-full text-sm font-semibold transition ${notifSMS ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}
              onClick={() => setNotifSMS(v => !v)}
            >
              {notifSMS ? 'Enabled' : 'Enable'}
            </button>
          </div>
        </div>
      </div>

      {/* Theme Switcher */}
      <div className="bg-white dark:bg-darkcard rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Sun className="w-5 h-5 text-blue-500" /> Theme</h2>
        <div className="flex gap-4">
          <button
            className={`flex flex-col items-center px-4 py-2 rounded-lg border transition focus:outline-none ${theme === 'light' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-blue-300'}`}
            onClick={() => setTheme('light')}
          >
            <Sun className="w-6 h-6 mb-1" />
            <span className="text-sm font-medium">Light</span>
          </button>
          <button
            className={`flex flex-col items-center px-4 py-2 rounded-lg border transition focus:outline-none ${theme === 'dark' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-blue-300'}`}
            onClick={() => setTheme('dark')}
          >
            <Moon className="w-6 h-6 mb-1" />
            <span className="text-sm font-medium">Dark</span>
          </button>
          <button
            className={`flex flex-col items-center px-4 py-2 rounded-lg border transition focus:outline-none ${theme === 'grey' ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-blue-300'}`}
            onClick={() => setTheme('grey')}
          >
            <Cloud className="w-6 h-6 mb-1" />
            <span className="text-sm font-medium">Grey</span>
          </button>
        </div>
      </div>

      {/* Download My Data */}
      <div className="bg-white dark:bg-darkcard rounded-xl shadow p-6 flex items-center gap-4">
        <Download className="w-6 h-6 text-blue-500" />
        <div className="flex-1">
          <h2 className="text-lg font-bold">Download My Data</h2>
          <p className="text-gray-500 text-sm">Request a copy of your personal data.</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-medium">Download</button>
      </div>
    </div>
  );
}; 