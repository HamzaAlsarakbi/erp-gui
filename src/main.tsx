import { StrictMode } from 'react';
import { HeroUIProvider, ToastProvider } from '@heroui/react';
import { createRoot } from 'react-dom/client';
import App from '@/App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <ToastProvider />
      <App />
    </HeroUIProvider>
  </StrictMode>,
);
