//react imports
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import ErrorPage from "./ErrorPage";
import { ResponsiveDrawer } from "./routes/Root";

//style
import "./index.css";

//components
import App from "./App";
import { Login, action as loginAction } from "./routes/Login";
import { Signup, action as signupAction } from "./routes/Signup";
import { Roles, loader as rolesLoader } from "./routes/User/Roles";
import { CreateActivityList, loader as createActivityListLoader } from "./routes/User/CreateActivityList";
import { DeleteActivityList, loader as deleteActivityListLoader } from "./routes/User/DeleteActivityList";
import { Signout, loader as signoutLoader } from "./routes/User/Signout";
import { Version } from "./routes/Version";

//router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
            path: "signup",
            element: <Signup />,
            action: signupAction,
          },
          {
            path: "login",
            element: <Login />,
            action: loginAction,
          },
          {
            path: "roles",
            element: <Roles />,
            loader: rolesLoader,
          },
          {
            path: "createactivitylist",
            element: <CreateActivityList />,
            loader: createActivityListLoader,
          },
          {
            path: "deleteactivitylist",
            element: <DeleteActivityList />,
            loader: deleteActivityListLoader,
          },
          {
            path: "signout",
            element: <Signout />,
            loader: signoutLoader,
          },
          {
            path: "version",
            element: <Version />,
          },
          {
            index: true,
            element: <App />,
          },
        ],
      },
    ],
  },
];
const router = createBrowserRouter(routes, {
  basename: "/sara-ai",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
