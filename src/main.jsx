import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './components/Root';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import DaisyUiLogin from './components/DaizyUiLogin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/daizyui",
        element: <DaisyUiLogin/>,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
