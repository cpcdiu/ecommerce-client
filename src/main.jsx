import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Root/Root.jsx";
import Home from "./Pages/Home.jsx";
import Details from "./Components/Details.jsx";
import Cart from "./Components/Cart.jsx";
import Favorites from "./Components/Favorites.jsx";
import CartProvider from "./Contexts/CartProvider.jsx";
import { ToastContainer } from "react-toastify";
import About from "./Pages/About.jsx";
import Loader from "./Components/Loader.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <p>Error....</p>,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/phones.json"),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "phone/:id",
        Component: Details,
        loader: () => fetch("/phones.json"),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "cart",
        Component: Cart,
      },
      {
        path: "favorites",
        Component: Favorites,
      },
      {
        path: "about",
        Component: About,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        className="!top-[70px] !right-0 fixed z-50"
      />
    </CartProvider>
  </StrictMode>
);
