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
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });
  const [user, setUser] = useState<User | undefined>(() => {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : undefined;
  });
  const [loading, setLoading] = useState(false);

  const Login = async (data: LoginFormData) => {
    try {
      setLoading(true);
      const response = await api.post("/auth/login", data);
      // Data que me devuelve el backend en el auth controller
      const { token, usuario } = response.data;

      //Actualizar el estado global
      setUser(usuario);
      setIsAuthenticated(true);

      //Almacenar el token en local storage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(usuario));
      localStorage.setItem("isAuthenticated", "true");
    } catch (err) {
      console.error(err);
      setIsAuthenticated(false);
      setUser(undefined);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.setItem("isAuthenticated", "false");
    } finally {
      setLoading(false);
    }
  };

  const Logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setUser(undefined);
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
