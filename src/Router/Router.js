import { createBrowserRouter } from "react-router-dom";
import About from "../components/pages/About/About";
import Home from "../components/pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../components/Login/Login/Login";
import Regester from "../components/Login/Regester/Regester";
import ErrorPage from "./Error/ErrorPage";
import MernCart from "../components/pages/MernCart/MernCart";
import PrivateNews from "../components/pages/NewsCarts/PrivateNews/PrivateNews";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Courses from "../components/pages/Courses/Courses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/mernalldata"),
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
      {
        path: "mernalldata/:id",
        element: <MernCart></MernCart>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/mernalldata/${params.id}`),
      },
      {
        path: "/merncart",
        element: <MernCart></MernCart>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <PrivateNews></PrivateNews>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "courses",
        element: <Courses></Courses>,
      },
    ],
  },
]);
