import React from 'react';

import { NavigationBar } from '@/components/Navbar';

const Dashboard: React.FC = () => {
  return (
    <div className="page" id="dashboard">
      <NavigationBar />
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
