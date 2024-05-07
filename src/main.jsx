import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import ThemeProvider from '@/theme/index';
import { router } from '@/router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
