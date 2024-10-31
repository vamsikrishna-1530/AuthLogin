import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Password from './components/Password';
import Username from './components/Username';
import Reset from './components/Reset';
import Profile from './components/Profile';
import PageNotFound from './components/PageNotFound';
import Recovery from './components/Recovery';
import Register from './components/Register';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Root Route</div>
    },
    {
      path: '/register',
      element: <Register></Register>
    },
    {
      path: '/profile',
      element: <Profile></Profile>
    },
    {
      path: '/password',
      element: <Password></Password>
    },
    {
      path: '/reset',
      element: <Reset></Reset>
    },
    {
      path: '/username',
      element: <Username></Username>
    },
    {
      path: '/recovery',
      element: <Recovery></Recovery>
    },
    {
      path: '*',
      element: <PageNotFound></PageNotFound>
    },
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
