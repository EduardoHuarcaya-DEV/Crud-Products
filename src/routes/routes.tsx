import { createBrowserRouter } from "react-router-dom";
// Componente para proteccion de Rutas
import ProtectedRoute from "@/auth/ProtectedRoute";

// Pages
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import LoginPage from "@pages/LoginPage";
import Welcome from "@/pages/Welcome";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/auth/login", element: <LoginPage /> },
  {
    path: "/welcome",
    element: (
      <ProtectedRoute>
        <Welcome />
      </ProtectedRoute>
    ),
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
