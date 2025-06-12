import React, { useState } from 'react';

interface LoginPageProps {
  onLogin: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1') {
      setError('');
      onLogin();
    } else {
      setError('Invalid password. (Hint: password is 1)');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-darkbg theme-grey:bg-greybg">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-darkcard rounded-2xl shadow-xl p-8 w-full max-w-sm flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-darktext mb-2">Sign in to Admin</h2>
        <div className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-blue-900 dark:text-blue-200"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:bg-blue-900 dark:text-blue-200"
          />
        </div>
        {error && <div className="text-red-600 text-sm text-center">{error}</div>}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition font-semibold mt-2"
        >
          Sign In
        </button>
        <div className="text-xs text-gray-400 dark:text-gray-500 text-center mt-2">Password is <b>1</b></div>
      </form>
    </div>
  );
}; 