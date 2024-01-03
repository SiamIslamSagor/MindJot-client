import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Auth from "../layout/Auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    errorElement: <ErrorPage />,
    element: <Auth />,
    children: [
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
    ],
  },
]);
