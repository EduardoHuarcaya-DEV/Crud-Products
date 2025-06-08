import { createBrowserRouter } from "react-router-dom";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import LoginPage from "@pages/LoginPage";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/auth/login", element: <LoginPage /> },
  { path: "*", element: <NotFound /> },
]);

export default router;