import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import About from "./pages/About/About.jsx";
import Contact from "./pages/contact/Contact.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/About", element: <About /> },
  { path: "/Contact", element: <Contact /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
