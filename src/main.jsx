import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import About from "./pages/About/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Connexion from "./pages/connexion/connexion.jsx";
import Inscription from "./pages/inscription/inscription.jsx";
import Home from "./pages/Home/Home.jsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/About", element: <About /> },
  { path: "/Contact", element: <Contact /> },
  { path: "/Connexion", element: <Connexion /> },
  { path: "/Inscription", element: <Inscription /> },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster position="top-right" reverseOrder={false} />
    <RouterProvider router={router} />
  </React.StrictMode>
);
