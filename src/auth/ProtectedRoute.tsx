import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/authContext";
import type { PropsWithChildren } from "react";

const ProtectedRoute = ({ children } : PropsWithChildren) => {
  const { loading, isAuthenticated } = useAuth();

  // Componente de carga
  if (loading) {
    return <div> Cargando ...</div>;
  }

  // Verificar la Autenticacion
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  // Renderizar componentes hijos si esta autorizado
  return children;
};

export default ProtectedRoute;
