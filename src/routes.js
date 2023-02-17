import { Navigate, useRoutes } from "react-router-dom";
import Navbar from "./layouts/nav";
//
import Home from "./pages/home";
import SignIn from "./pages/sign-in";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: "home", element: <Home /> },
        { path: "sign-in", element: <SignIn /> },
      ],
    },
  ]);

  return routes;
}
