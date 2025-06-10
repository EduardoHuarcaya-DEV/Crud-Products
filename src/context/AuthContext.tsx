import { createContext, useContext, type PropsWithChildren } from "react";
import { useState } from "react";
import type { LoginFormData } from "@/interfaces/auth.interface";
import type { AuthState, User } from "@/interfaces/auth.interface";
import api from "@/api/api";


// Crear el context de autenticacion

const AuthContext = createContext({} as AuthState);

// Hook personalizado para usar el context

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};

// Exportar el context provider

export const AuthProvider = ({ children }: PropsWithChildren) => {
  // Estados para la autenticacion
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  const Login = async (data: LoginFormData) => {
    try {
      setLoading(true);
      const response = await api.post("/auth/login", data);
      const { token, user } = response.data;

      //Almacenar el token en local estorage
      localStorage.setItem("token", token);

      //Actualizar el estado global
      setUser(user);
      setIsAuthenticated(true);
    } catch (err) {
      console.error(err);
      setIsAuthenticated(false);
      setUser(undefined);
    }finally{
      setLoading(false);
    }
  };

  const Logout = () => {
    localStorage.removeItem("token");
    setUser(undefined);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        token: localStorage.getItem("token") ?? undefined,
        user,
        loading,
        isAuthenticated,
        Login,
        Logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
