//react imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import ErrorPage from './ErrorPage';
import { ResponsiveDrawer } from "./routes/Root";

//style
import './index.css';

//components
import App from './App';
import { Login } from './routes/Login'
import { Version } from './routes/Version'

//router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <ResponsiveDrawer />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: "login",
            element: <Login />
          },
          {
            path: "version",
            element: <Version />
          }
        ]
    }

    ]
  },

]
const router = createBrowserRouter(routes, {
  basename: "/sara-ai"
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
