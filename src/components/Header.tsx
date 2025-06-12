import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  ChevronDown, 
  User, 
  Settings, 
  LogOut, 
  Menu 
} from 'lucide-react';

interface HeaderProps {
  onToggleSidebar: () => void;
  onProfile?: () => void;
  onSettings?: () => void;
  onLogout?: () => void;
  adminName?: string;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar, onProfile, onSettings, onLogout, adminName = 'Administrator' }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      title: 'New donation received',
      message: '$5,000 donated to Education Fund',
      time: '10 minutes ago',
      unread: true,
    },
    {
      id: 2,
      title: 'Business verification pending',
      message: '5 new business verifications require review',
      time: '1 hour ago',
      unread: true,
    },
    {
      id: 3,
      title: 'Monthly report ready',
      message: 'May 2025 financial report is ready for review',
      time: 'Yesterday',
      unread: false,
    },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header className="bg-white dark:bg-darkcard border-b border-gray-100 py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search users, projects, transactions..."
              className="w-80 pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              className="relative p-2 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <Bell className="w-6 h-6 text-gray-600" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                  {unreadCount}
                </span>
              )}
            </button>

            {isNotificationOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-darkcard rounded-xl shadow-xl border border-gray-100 dark:border-[#2d2d36] z-20">
                <div className="p-4 border-b border-gray-100 dark:border-[#2d2d36]">
                  <h3 className="font-semibold text-gray-800 dark:text-darktext">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 border-b border-gray-50 hover:bg-gray-25 cursor-pointer ${
                        notification.unread ? 'bg-blue-25' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-800 dark:text-darktext">
                            {notification.title}
                          </p>
                          <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                            {notification.time}
                          </p>
                        </div>
                        {notification.unread && (
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 text-center border-t border-gray-100">
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                alt="Admin"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="text-left hidden sm:block">
                <p className="text-sm font-medium text-gray-800 dark:text-darktext">{adminName}</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-darkcard rounded-xl shadow-xl border border-gray-100 dark:border-[#2d2d36] z-20">
                <div className="py-2">
                  <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-darktext hover:bg-gray-50 transition-colors" onClick={() => { setIsProfileOpen(false); onProfile && onProfile(); }}>
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 dark:text-darktext hover:bg-gray-50 transition-colors" onClick={() => { setIsProfileOpen(false); onSettings && onSettings(); }}>
                    <Settings className="w-4 h-4" />
                    <span>Settings</span>
                  </button>
                  <div className="border-t border-gray-100 dark:border-[#2d2d36] my-1"></div>
                  <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-red-600 dark:text-red-500 hover:bg-red-50 transition-colors" onClick={() => { setIsProfileOpen(false); onLogout && onLogout(); }}>
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};