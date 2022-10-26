import { createBrowserRouter } from "react-router-dom";
import About from "../components/pages/About/About";
import Home from "../components/pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../components/Login/Login/Login";
import Regester from "../components/Login/Regester/Regester";
import ErrorPage from "./Error/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/regester",
        element: <Regester></Regester>,
      },
    ],
  },
]);
