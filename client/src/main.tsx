import '@/assets/styles/globals.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'sonner';

import App from '@/App';
import { QueryProvider } from '@/components/providers/query-provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProvider>
      <App />
      <Toaster />
    </QueryProvider>
  </React.StrictMode>
);
