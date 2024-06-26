import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ReservationsPage from './pages/ReservationsPage';
import AccountPage from './pages/AccountPage';
import CalendarPage from './pages/CalendarPage';
import DogInfoPage from './pages/DogInfoPage';
import ContactPage from './pages/ContactPage';
import SignUpPage from './pages/SignUpPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignUpPage />,
      },
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'account',
        element: <AccountPage />,
      },
      {
        path: 'doginfo',
        element: <DogInfoPage />,
        children: [
          {
            path: ':id',
            element: <DogInfoPage />
          }
        ],
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'reservations',
        element: <ReservationsPage />,
      },
      {
        path: 'reservations/calendar',
        element: <CalendarPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
