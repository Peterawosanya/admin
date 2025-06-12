import React from 'react';
import { Header } from './Header';

interface DashboardLayoutProps {
  children: React.ReactElement;
  onProfile?: () => void;
  onSettings?: () => void;
  onLogout?: () => void;
  adminName?: string;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, onProfile, onSettings, onLogout, adminName }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-darkbg theme-grey:bg-greybg flex">
      <div className="flex-1 transition-all duration-300 ml-0">
        <Header onToggleSidebar={() => {}} onProfile={onProfile} onSettings={onSettings} onLogout={onLogout} adminName={adminName} />
        <main className="p-6">
          {React.cloneElement(children, children.props)}
        </main>
      </div>
    </div>
  );
};