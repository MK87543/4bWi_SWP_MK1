//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'

//createRoot(document.getElementById('root')).render(
//<StrictMode>
//<App />
// </StrictMode>,
//)

import Page1 from "./components/pages/Page1.jsx";
import Page2 from "./components/pages/Page2.jsx";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1 />,
  },

  {
    path: "/page2",
    element: <Page2 />,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
