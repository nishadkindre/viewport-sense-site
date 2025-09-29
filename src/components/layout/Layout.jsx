import React from 'react';
import { Outlet } from 'react-router-dom';
import ModernHeader from './ModernHeader';
import ModernFooter from './ModernFooter';

const Layout = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      <ModernHeader />
      
      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>
      
      <ModernFooter />
    </div>
  );
};

export default Layout;