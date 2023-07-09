//react imports
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

//style
import "./index.css";

//components
import App from "./App";
import ErrorPage from "./ErrorPage";
import { ResponsiveDrawer, loader as authLoader } from "./routes/NavHeader";

//route components
import { Login, action as loginAction } from "./routes/Login";
import { Signup, action as signupAction } from "./routes/Signup";
import { Roles, loader as rolesLoader } from "./routes/User/Roles";
import { Signout, loader as signoutLoader } from "./routes/User/Signout";
import {
  CreateToDo,
  action as createToDoAction,
} from "./routes/User/ToDos/CreateToDo";
import {
  ListToDos,
  loader as listToDosLoader,
} from "./routes/User/ToDos/ListToDos";
import { Version } from "./routes/Version";

//router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <ResponsiveDrawer />,
    errorElement: <ErrorPage />,
    loader: authLoader,
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
            path: "createtodo",
            element: <CreateToDo />,
            action: createToDoAction,
          },
          {
            path: "listtodos",
            element: <ListToDos />,
            loader: listToDosLoader,
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
