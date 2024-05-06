import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import BuyPage from "./pages/BuyPage";
import "./index.css";
import ReceptionPage from "./pages/ReceptionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ReceptionPage/>,
  },
  {
    path: "/home",
    element: <BuyPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
