import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/authContext";
import type { PropsWithChildren } from "react";

const ProtectedRoute = ({ children } : PropsWithChildren) => {
  const { loading, isAuthenticated } = useAuth();

  const location = useLocation();

  // Componente de carga
  if (loading) {
    return <div> Cargando ...</div>;
  }

  // Verificar la Autenticacion
  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // Renderizar componentes hijos si esta autorizado
  return children;
};

export default ProtectedRoute;
