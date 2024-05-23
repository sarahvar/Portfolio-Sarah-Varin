import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { inject } from '@vercel/analytics';
import "./styles/styles.scss";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Error404 from "./pages/Error404.jsx";
import Competences from "./pages/Competences.jsx";
import Projets from "./pages/Portfolio.jsx";

// Initialiser Vercel Analytics
inject();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <Error404 />,
  },
  {
    path: "/competences",
    element: <Competences />,
    errorElement: <Error404 />,
  },
  {
    path: "/projets",
    element: <Projets />,
    errorElement: <Error404 />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
