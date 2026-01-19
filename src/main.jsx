import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "../pages/Home/Home.jsx";
import AppNotFound from "../components/errorElement/AppNotFound/AppNotFound.jsx";
import PageNotFound from "../components/errorElement/PageNotFound/PageNotFound.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails.jsx";
import Root from "../pages/Root/Root.jsx";

// Initialize AOS globally (like Toastify)
AOS.init({
  duration: 1000,
  once: true,
  easing: "ease-in-out",
});

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <AppNotFound></AppNotFound>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/projects/:id",
        Component: ProjectDetails,
      },
      {
        path: "*",
        Component: PageNotFound,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
