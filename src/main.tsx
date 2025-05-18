import { StrictMode } from 'react';
import App from '@/App.tsx';
import './index.css';
import { createRoot } from 'react-dom/client';
import { HeroUIProvider } from '@heroui/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeroUIProvider>
      <App />
    </HeroUIProvider>
  </StrictMode>,
);
