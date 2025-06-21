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
import Articles from "./pages/Articles/Articles.jsx";
import CreatePost from "./pages/Articles/Create.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ArticleDetails from "./components/common/ArticleDetails.jsx";
import { Provider } from "react-redux";
import { store } from "./app/redux/store.js";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/About", element: <About /> },
  { path: "/Contact", element: <Contact /> },
  { path: "/Articles", element: <Articles /> },
  { path: "/Articles/CreatePost", element: <CreatePost /> },
  { path: "/Articles/:id", element: <ArticleDetails /> },
  { path: "/Connexion", element: <Connexion /> },
  { path: "/Inscription", element: <Inscription /> },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster position="top-right" reverseOrder={false} />
    <QueryClientProvider client={new QueryClient()}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
