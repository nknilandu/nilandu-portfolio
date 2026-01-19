import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "../pages/Home/Home.jsx";
import AppNotFound from "../components/errorElement/AppNotFound/AppNotFound.jsx";
import PageNotFound from "../components/errorElement/PageNotFound/PageNotFound.jsx";
import { Toaster } from "react-hot-toast";

import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS globally (like Toastify)
AOS.init({
  duration: 1000,
  once: true,
  easing: "ease-in-out",
});

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    errorElement: <AppNotFound></AppNotFound>,
  },
  {
    path: "*",
    Component: PageNotFound,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="bottom-center" reverseOrder={false} />
  </StrictMode>
);
