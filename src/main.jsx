import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { inject } from '@vercel/analytics';
import "./styles/styles.scss";
import WaveAnimation from './components/WaveAnimation.jsx'; // Importez votre composant

// Initialiser Vercel Analytics
inject();

// Utilisation de React.lazy pour charger les pages de manière asynchrone
const Home = lazy(() => import("./pages/Home.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Competences = lazy(() => import("./pages/Competences.jsx"));
const Projets = lazy(() => import("./pages/Portfolio.jsx"));
const Error404 = lazy(() => import("./pages/Error404.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
        <WaveAnimation /> {/* Ajoutez l'animation ici, en bas */}
      </>
    ),
    errorElement: (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Error404 />
        </Suspense>
        <WaveAnimation /> {/* Ajoutez l'animation ici, en bas */}
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Contact />
        </Suspense>
        <WaveAnimation /> {/* Ajoutez l'animation ici, en bas */}
      </>
    ),
    errorElement: (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Error404 />
        </Suspense>
        <WaveAnimation /> {/* Ajoutez l'animation ici, en bas */}
      </>
    ),
  },
  {
    path: "/competences",
    element: (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Competences />
        </Suspense>
        <WaveAnimation /> {/* Ajoutez l'animation ici, en bas */}
      </>
    ),
    errorElement: (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Error404 />
        </Suspense>
        <WaveAnimation /> {/* Ajoutez l'animation ici, en bas */}
      </>
    ),
  },
  {
    path: "/projets",
    element: (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Projets />
        </Suspense>
        <WaveAnimation /> {/* Ajoutez l'animation ici, en bas */}
      </>
    ),
    errorElement: (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Error404 />
        </Suspense>
        <WaveAnimation /> {/* Ajoutez l'animation ici, en bas */}
      </>
    ),
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
