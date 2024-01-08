import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./hoc/AuthProvider.jsx";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <AuthProvider>
      <NextUIProvider>
        <RouterProvider router={router} />
      </NextUIProvider>
    </AuthProvider>
  </HelmetProvider>
);
