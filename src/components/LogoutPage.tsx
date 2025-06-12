import React from 'react';

export const LogoutPage: React.FC<{ onCancel: () => void; onLogout: () => void }> = ({ onCancel, onLogout }) => {
  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-darkcard rounded-xl shadow-md p-8 flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Log Out</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-400">Are you sure you want to log out?</p>
      <div className="flex space-x-4">
        <button onClick={onCancel} className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">Cancel</button>
        <button onClick={onLogout} className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 dark:bg-red-900 dark:text-red-200">Log Out</button>
      </div>
    </div>
  );
}; 