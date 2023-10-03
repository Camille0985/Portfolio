import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "../src/styles/index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div id="main">
      <RouterProvider router={router} />
    </div>
    <Footer />
  </React.StrictMode>,
);
