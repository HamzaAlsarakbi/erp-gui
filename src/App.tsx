import './App.css';
import Login from '@/pages/Login';
import Dashboard from './pages/Dashboard';
import './App.css';
import Splash from './pages/splash/Splash';
import { Attendance } from './pages/Attendance';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './constants/routes';

function App() {
  return (
    <div className="app light bg-zinc-100">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.login} element={<Login />} />
          {/* TODO: make this protected */}
          <Route path={ROUTES.dashboard} element={<Dashboard />} />
          <Route path={ROUTES.splash} element={<Splash />} />
          <Route path={ROUTES.attendance} element={<Attendance />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
