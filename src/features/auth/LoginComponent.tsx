import { Button, Input } from '@heroui/react';
import React, { useEffect, useState } from 'react';
import { PasswordInput } from '@/components/PasswordInput/PasswordInput';
import './LoginComponent.css';
import { AUTH_API } from '@/features/auth/authApi';
import { USERS_API } from '@/features/users/usersApi';
import { AxiosError, HttpStatusCode } from 'axios';
import { useAuth } from '@/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

const LoginComponent: React.FC = () => {
  const setUser = useAuth((s) => s.setUser);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errorRef = React.createRef<HTMLDivElement>();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (error.trim().length > 0) {
      emphasizeError();
      return;
    }
    try {
      const response = await AUTH_API.login(username, password);
      if (response.status === HttpStatusCode.Ok) {
        const user = await USERS_API.me(username);

        // Check if the user is logged in
        if (user.status === HttpStatusCode.Ok) {
          setUser(user.data);
          navigate(ROUTES.portal);
        } else {
          setError('An unknown error occurred, cannot retrieve user data.');
          console.error(user);
        }
      } else {
        setError('An unknown error occurred, please try again later.');
        console.error(response);
      }
    } catch (error) {
      const e = error as AxiosError;
      if (e.status === HttpStatusCode.Unauthorized) {
        setError('Username or password is incorrect');
      } else {
        setError('An unkown error occurred');
        console.error(e);
      }
    }
  };

  useEffect(() => {
    if (username.trim().length === 0) {
      setError('Username is required');
    } else if (password.trim().length === 0) {
      setError('Password is required');
    } else {
      setError('');
    }
  }, [username, password]);

  const emphasizeError = () => {
    const errorElement = errorRef.current;
    if (errorElement) {
      errorElement.classList.add('error-shake');
      setTimeout(() => {
        errorElement.classList.remove('error-shake');
      }, 500);
    }
  };

  return (
    <div className="login-component glow-top flex flex-col px-4 py-4 gap-1 rounded-medium bg-zinc-300">
      <h1 className="title fancy-text">ERP</h1>
      <h2>Login</h2>
      <form
        onSubmit={(event) => {
          void handleSubmit(event);
        }}
        className="flex flex-col px-4 gap-1"
      >
        <Input
          isRequired
          label="Username"
          id="username"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        >
          Username
        </Input>
        <PasswordInput
          isRequired
          label="Password"
          id="password"
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        >
          Password
        </PasswordInput>
        <div className="action flex flex-row justify-between gap-1">
          <Button className="flex-grow" type="submit">
            Login
          </Button>
          <Button>Register</Button>
        </div>
        {error && (
          <div ref={errorRef} className="error text-red-500">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginComponent;
