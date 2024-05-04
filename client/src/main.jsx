import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import './index.css'
//Add your imports from "/pages" below this line
import AuthLayout from './pages/AuthLayout.jsx';



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
                        element: "",
                    },
                    {
                        path: "level",
                        element: "",
                    },
                    {
                        path: "daily",
                        element: "",
                    },
                    {
                        path: "success",
                        element: "",
                    },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
