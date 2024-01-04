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
import AddTask from "../pages/AddTask";
import WriteThought from "../pages/WriteThought";
import AllThoughts from "../pages/AllThoughts";
import CreateBlog from "../pages/CreateBlog";
import AllBlogs from "../pages/AllBlogs";

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
        element: <Dashboard />,
      },
      {
        path: "addTask",
        element: <AddTask />,
      },
      {
        path: "manageTask",
        element: <ManageTodo />,
      },
      {
        path: "writeThought",
        element: <WriteThought />,
      },
      {
        path: "allThoughts",
        element: <AllThoughts />,
      },
      {
        path: "createBlog",
        element: <CreateBlog />,
      },
      {
        path: "allBlogs",
        element: <AllBlogs />,
      },
    ],
  },
]);
