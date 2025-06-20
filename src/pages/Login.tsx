import LoginComponent from '@/features/auth/LoginComponent';
import React, { useEffect } from 'react';

const Login: React.FC = () => {
  useEffect(() => {
    document.title = 'Login';
  }, []);

  return (
    <div className="page flex flex-col justify-center items-center" id="login">
      <LoginComponent />
    </div>
  );
};

export default Login;
