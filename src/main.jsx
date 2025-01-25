import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { inject } from "@vercel/analytics";
import "./styles/styles.scss";

// Initialiser Vercel Analytics
inject();

// Utilisation de React.lazy pour charger les pages de manière asynchrone
const Home = lazy(() => import("./pages/Home.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Competences = lazy(() => import("./pages/Competences.jsx"));
const Projets = lazy(() => import("./pages/Portfolio.jsx"));
const Error404 = lazy(() => import("./pages/Error404.jsx"));

// Composant générique pour Suspense avec un fallback
const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<div>Chargement...</div>}>{children}</Suspense>
);

// Configuration des routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SuspenseWrapper>
        <Home />
      </SuspenseWrapper>
    ),
    errorElement: (
      <SuspenseWrapper>
        <Error404 />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/contact",
    element: (
      <SuspenseWrapper>
        <Contact />
      </SuspenseWrapper>
    ),
    errorElement: (
      <SuspenseWrapper>
        <Error404 />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/competences",
    element: (
      <SuspenseWrapper>
        <Competences />
      </SuspenseWrapper>
    ),
    errorElement: (
      <SuspenseWrapper>
        <Error404 />
      </SuspenseWrapper>
    ),
  },
  {
    path: "/projets",
    element: (
      <SuspenseWrapper>
        <Projets />
      </SuspenseWrapper>
    ),
    errorElement: (
      <SuspenseWrapper>
        <Error404 />
      </SuspenseWrapper>
    ),
  },
]);

// Rendu de l'application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
