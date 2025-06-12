import { useState } from 'react';
import { DashboardLayout } from './components/DashboardLayout';
import { DashboardContent } from './components/DashboardContent';
import { ThemeProvider } from './components/ThemeContext';
import { LoginPage } from './components/LoginPage';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [settingsPage, setSettingsPage] = useState('menu');
  const adminName = 'Sarah Anderson';
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return (
      <ThemeProvider>
        <LoginPage onLogin={() => setIsAuthenticated(true)} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <DashboardLayout
        adminName={adminName}
        onProfile={() => { setActiveTab('settings'); setSettingsPage('profile'); }}
        onSettings={() => { setActiveTab('settings'); setSettingsPage('menu'); }}
        onLogout={() => {
          setActiveTab('settings');
          setSettingsPage('logout');
        }}
      >
        <DashboardContent
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          settingsPage={settingsPage}
          setSettingsPage={setSettingsPage}
          onLogoutConfirm={() => setIsAuthenticated(false)}
        />
    </DashboardLayout>
    </ThemeProvider>
  );
}

export default App;