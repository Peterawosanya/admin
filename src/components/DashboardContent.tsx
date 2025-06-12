import React from 'react';
import { MetricsGrid } from './MetricsGrid';
import { ChartsSection } from './ChartsSection';
import { RecentActivity } from './RecentActivity';
import { Sidebar } from './Sidebar';
import { ProfilePage } from './ProfilePage';
import { LogoutPage } from './LogoutPage';
import { ProfileSettingsPage } from './ProfileSettingsPage';
import { ThemeSwitcherSection } from './ThemeSwitcherSection';
import { FinancialAnalytics } from './FinancialAnalytics';
import { UserManagement } from './UserManagement';
import { Projects } from './Projects';

interface DashboardContentProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  settingsPage: string;
  setSettingsPage: (page: string) => void;
  onLogoutConfirm?: () => void;
}

export const DashboardContent: React.FC<DashboardContentProps> = ({ activeTab, setActiveTab, settingsPage, setSettingsPage, onLogoutConfirm }) => {
  let content;
  switch (activeTab) {
    case 'dashboard':
      content = (
        <div>
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening with your platform today.</p>
          </div>
          <MetricsGrid />
          <ChartsSection />
          <RecentActivity />
        </div>
      );
      break;
    case 'users':
      content = <UserManagement />;
      break;
    case 'finance':
      content = <FinancialAnalytics />;
      break;
    case 'projects':
      content = <Projects />;
      break;
    case 'settings':
      if (settingsPage === 'menu') {
        content = (
          <div>
            <h1 className="text-2xl font-bold mb-4">Settings</h1>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <button className="text-blue-600 hover:underline" onClick={() => setSettingsPage('profile')}>Profile</button>
              </li>
              <li>
                <button className="text-blue-600 hover:underline" onClick={() => setSettingsPage('profileSettings')}>Profile Settings</button>
              </li>
              <li>
                <button className="text-blue-600 hover:underline" onClick={() => setSettingsPage('theme')}>Theme</button>
              </li>
              <li>
                <button className="text-red-600 hover:underline" onClick={() => setSettingsPage('logout')}>Logout option</button>
              </li>
            </ul>
          </div>
        );
      } else if (settingsPage === 'profile') {
        content = (
          <div>
            <button className="mb-4 text-sm text-blue-600 hover:underline" onClick={() => setSettingsPage('menu')}>{'< Back to Settings'}</button>
            <ProfilePage />
          </div>
        );
      } else if (settingsPage === 'profileSettings') {
        content = (
          <div>
            <button className="mb-4 text-sm text-blue-600 hover:underline" onClick={() => setSettingsPage('menu')}>{'< Back to Settings'}</button>
            <ProfileSettingsPage />
          </div>
        );
      } else if (settingsPage === 'theme') {
        content = (
          <div>
            <button className="mb-4 text-sm text-blue-600 hover:underline" onClick={() => setSettingsPage('menu')}>{'< Back to Settings'}</button>
            <ThemeSwitcherSection />
          </div>
        );
      } else if (settingsPage === 'logout') {
        content = (
          <LogoutPage 
            onCancel={() => setSettingsPage('menu')} 
            onLogout={() => onLogoutConfirm && onLogoutConfirm()} 
          />
        );
      }
      break;
    default:
      content = null;
  }

  return (
    <div className="flex">
      <Sidebar isOpen={true} activeTab={activeTab} setActiveTab={tab => { setActiveTab(tab); if (tab !== 'settings') setSettingsPage('menu'); }} />
      <main className="flex-1 p-6 ml-64">{content}</main>
    </div>
  );
};