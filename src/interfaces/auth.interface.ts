export interface LoginFormData {
  correo: string;
  contrasena: string;
}

export interface AuthState {
  token?: string;
  user?: User;
  isAuthenticated: boolean;
  loading: boolean;

  //Metodos
  Login: (data: LoginFormData) => void;
  Logout: () => void;
}

export interface User {
  id_usuario: string;
  nombre: string;
}