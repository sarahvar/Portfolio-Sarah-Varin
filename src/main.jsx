import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./styles/styles.scss";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import Competences from "./pages/Competences";
import Portfolio from "./pages/Portfolio";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/contact",
    element: <Contact/>,
    errorElement: <Error404 />,
  },
  {
    path: "/competences",
    element: <Competences />,
    errorElement: <Error404 />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
    errorElement: <Error404 />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);
