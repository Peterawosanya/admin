import React from 'react';
import { User, Mail, Phone, Plus } from 'lucide-react';

export const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white py-8">
      <div className="w-full max-w-lg bg-white dark:bg-darkcard rounded-2xl shadow-xl p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center text-5xl font-bold text-blue-600 mb-4 shadow">
            JD
          </div>
          <h2 className="text-3xl font-bold mb-1 text-gray-800 dark:text-darktext">John Doe</h2>
          <span className="text-gray-400 dark:text-gray-500 text-sm mb-2">Admin</span>
          <button className="flex items-center gap-2 mt-2 px-5 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition font-medium text-sm">
            <Plus className="w-4 h-4" /> Add Account / User
          </button>
        </div>
        <div className="border-t pt-6 mb-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Account Details</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-blue-500" />
              <span className="text-gray-600 dark:text-gray-400 font-medium">Username:</span>
              <span className="ml-auto text-gray-900">johndoe</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-500" />
              <span className="text-gray-600 dark:text-gray-400 font-medium">Email:</span>
              <span className="ml-auto text-gray-900">johndoe@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-500" />
              <span className="text-gray-600 dark:text-gray-400 font-medium">Phone:</span>
              <span className="ml-auto text-gray-900">+1 234 567 8901</span>
            </div>
          </div>
        </div>
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">Change Password</h3>
          <form className="space-y-3">
            <input type="password" placeholder="Current Password" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-blue-900 dark:text-blue-200" />
            <input type="password" placeholder="New Password" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-blue-900 dark:text-blue-200" />
            <input type="password" placeholder="Confirm New Password" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-blue-900 dark:text-blue-200" />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition font-semibold">Change Password</button>
          </form>
        </div>
      </div>
    </div>
  );
}; 