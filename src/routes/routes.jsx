import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Auth from "../layout/Auth";
import MainDash from "../layout/MainDash";
import Dashboard from "../pages/Dashboard";
import ManageTodo from "../pages/ManageTodo";
import WriteThought from "../pages/WriteThought";
import AllThoughts from "../pages/AllThoughts";
import CreateBlog from "../pages/CreateBlog";
import AllBlogs from "../pages/AllBlogs";
import StickyWall from "../pages/StickyWall";
import PrivetRoute from "../hoc/PrivetRoute";

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
  {
    path: "/mainDash",
    errorElement: <ErrorPage />,
    element: <MainDash />,
    children: [
      {
        path: "dashboard",
        element: (
          <PrivetRoute>
            <Dashboard />
          </PrivetRoute>
        ),
      },
      {
        path: "stickyWall",
        element: (
          <PrivetRoute>
            <StickyWall />
          </PrivetRoute>
        ),
      },
      {
        path: "manageTask",
        element: (
          <PrivetRoute>
            <ManageTodo />
          </PrivetRoute>
        ),
      },
      {
        path: "writeThought",
        element: (
          <PrivetRoute>
            <WriteThought />
          </PrivetRoute>
        ),
      },
      {
        path: "allThoughts",
        element: (
          <PrivetRoute>
            <AllThoughts />
          </PrivetRoute>
        ),
      },
      {
        path: "createBlog",
        element: (
          <PrivetRoute>
            <CreateBlog />
          </PrivetRoute>
        ),
      },
      {
        path: "allBlogs",
        element: (
          <PrivetRoute>
            <AllBlogs />
          </PrivetRoute>
        ),
      },
    ],
  },
]);
