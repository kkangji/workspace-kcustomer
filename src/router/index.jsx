import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import CheckKsCustomerPage from '@/router/check-kscustomer';

export const router = createBrowserRouter([
  ...CheckKsCustomerPage,
  {
    path: '/',
    element: <App />,
  },
]);
