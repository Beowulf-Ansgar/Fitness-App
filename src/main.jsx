import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Program from "./pages/Program";
import ErrorPage from "./pages/error-page";

// Router geht die urls von oben nach unten durch

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/programs",
    element: <Programs />,
  },
  /*  Komplexe url, die id's sind Platzhalter, die erst in der component abgefragt werden
  {
    path: "/program/:programid/workout/:workoutid/exercises",
    element: <Program />,
  },
  */
  {
    path: "/program/:id>",
    element: <Program />,
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
