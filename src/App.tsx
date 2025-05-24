import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { ROUTES } from '@/constants/routes';

import { ProtectedRoutes } from '@/features/auth/ProtectedRoute';

import { Attendance } from '@/pages/Attendance';
import Dashboard from '@/pages/Dashboard';
import { Inventory } from '@/pages/inventory/Inventory';
import Login from '@/pages/Login';
import Splash from '@/pages/splash/Splash';

function App() {
  return (
    <div className="app light bg-zinc-100">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.splash} element={<Splash />} />
          <Route path={ROUTES.login} element={<Login />} />
          <Route path={ROUTES.attendance} element={<Attendance />} />

          <Route element={<ProtectedRoutes />}>
            <Route path={ROUTES.dashboard} element={<Dashboard />} />
            <Route path={ROUTES.inventory} element={<Inventory />} />
          </Route>

          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
