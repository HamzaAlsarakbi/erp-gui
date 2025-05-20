import './App.css';
import Login from '@/pages/Login';
import Dashboard from './pages/Dashboard';
import './App.css';
import Splash from './pages/splash/Splash';
import { Attendance } from './pages/Attendance';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import { ProtectedRoutes } from './features/auth/ProtectedRoute';

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
          </Route>

          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
