import { useEffect, useState } from 'react';

import './Splash.css';
import { useInterval } from '@/utils/useInterval';
import { Spinner } from '@heroui/react';
import { SPLASH_HINTS } from '@/constants/splash';
import { SECONDS_TO_MS } from '@/constants/time';
import { AxiosError, HttpStatusCode } from 'axios';
import Logo from '@/components/icons/Logo';
import { USERS_API } from '@/features/users/usersApi';
import { useAuth } from '@/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

const Splash = () => {
  const [hint, setHint] = useState('');
  const setUser = useAuth((s) => s.setUser);
  const navigate = useNavigate();

  useInterval(async () => {
    try {
      let user = await USERS_API.get();
      if (user.status === HttpStatusCode.Ok) {
        setUser(user.data);
        navigate(ROUTES.portal);
      }
    } catch (error) {
      const e = error as AxiosError;
      if (e.status === HttpStatusCode.Unauthorized) {
        navigate(ROUTES.login);
      } else {
        console.error(e);
      }
    }
  }, 3 * SECONDS_TO_MS);

  useInterval(() => {
    // pick random number
    const randomIndex = Math.floor(Math.random() * SPLASH_HINTS.length);
    setHint(SPLASH_HINTS[randomIndex]);
  }, 5 * SECONDS_TO_MS);

  useEffect(() => {
    document.title = 'Alsarakbi ERP';
  }, []);

  return (
    <div className="page splash-screen flex flex-col justify-center text-center">
      <div className="flex justify-center">
        <Logo size={512} />
      </div>
      <div className="box px-4 py-4 flex flex-col gap-6 rounded-medium">
        <h1 className="title fancy-text mb-4">Alsarakbi ERP</h1>
        <div className="flex flex-col gap-1">
          <Spinner size="lg" />
          <p className="text-sky-900">{hint}</p>
        </div>
      </div>
    </div>
  );
};

export default Splash;
