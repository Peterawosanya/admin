import React from 'react';
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  FolderOpen, 
  Settings, 
  Heart 
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3, active: true },
  { id: 'users', label: 'User Management', icon: Users },
  { id: 'finance', label: 'Financial Analytics', icon: DollarSign },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeTab, setActiveTab }) => {
  return (
    <div className={`bg-white dark:bg-darkcard shadow-xl fixed h-full z-10 transition-all duration-300 ${
      isOpen ? 'w-64' : 'w-0 overflow-hidden'
    }`}>
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800 dark:text-darktext">FundRaiser</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">Admin Dashboard</p>
          </div>
        </div>
      </div>
      
      <nav className="mt-6 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                    isActive 
                      ? 'bg-blue-50 text-blue-600 border border-blue-100 dark:bg-blue-900 dark:text-blue-300' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800 dark:text-gray-300'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
                  <span className="font-medium">{item.label}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      
    </div>
  );
};