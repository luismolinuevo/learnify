import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/App.css";
//Add your imports from "/pages" below this line
import AuthLayout from "./pages/AuthLayout.jsx";
import Learn from "./components/signupFields/learn.jsx";
import Level from "./components/signupFields/level.jsx";
import Daily from "./components/signupFields/daily.jsx";
import Success from "./components/signupFields/success.jsx";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx"

import Course from "./pages/Course.jsx";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: "",
      },
      {
        path: "signup",
        children: [
          {
            path: "learn",
            element: <Learn />,
          },
          {
            path: "level",
            element: <Level />,
          },
          {
            path: "daily",
            element: <Daily />,
          },
          {
            path: "success",
            element: <Success />,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: "",
      },
      {
        path: "lessonplan/:id",
        element: <Course />,
      },
      {
        path: "/home",
        element: <Home />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
