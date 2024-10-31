import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>Root Route</div>
    },
    {
      path: '/register',
      element: <div>Register Route</div>
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
