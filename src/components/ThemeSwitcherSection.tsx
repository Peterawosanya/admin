import React from 'react';
import { Sun, Moon, Cloud } from 'lucide-react';
import { useTheme } from './ThemeContext';

export const ThemeSwitcherSection: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="bg-white dark:bg-darkcard rounded-xl shadow p-6">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Sun className="w-5 h-5 text-blue-500" /> Theme</h2>
      <div className="flex gap-4">
        <button
          className={`flex flex-col items-center px-4 py-2 rounded-lg border transition focus:outline-none ${theme === 'light' ? 'bg-blue-50 border-blue-500 text-blue-700 dark:bg-blue-900 dark:text-blue-200' : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-blue-300 dark:bg-blue-900 dark:text-blue-200'}`}
          onClick={() => setTheme('light')}
        >
          <Sun className="w-6 h-6 mb-1" />
          <span className="text-sm font-medium">Light</span>
        </button>
        <button
          className={`flex flex-col items-center px-4 py-2 rounded-lg border transition focus:outline-none ${theme === 'dark' ? 'bg-blue-50 border-blue-500 text-blue-700 dark:bg-blue-900 dark:text-blue-200' : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-blue-300 dark:bg-blue-900 dark:text-blue-200'}`}
          onClick={() => setTheme('dark')}
        >
          <Moon className="w-6 h-6 mb-1" />
          <span className="text-sm font-medium">Dark</span>
        </button>
        <button
          className={`flex flex-col items-center px-4 py-2 rounded-lg border transition focus:outline-none ${theme === 'grey' ? 'bg-blue-50 border-blue-500 text-blue-700 dark:bg-blue-900 dark:text-blue-200' : 'bg-gray-50 border-gray-200 text-gray-500 hover:border-blue-300 dark:bg-blue-900 dark:text-blue-200'}`}
          onClick={() => setTheme('grey')}
        >
          <Cloud className="w-6 h-6 mb-1" />
          <span className="text-sm font-medium">Grey</span>
        </button>
      </div>
    </div>
  );
}; 