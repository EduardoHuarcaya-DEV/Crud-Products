import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useAuth } from '@/context/authContext';
import type { LoginFormData } from '@/interfaces/auth.interface';

const useLogin = () => {

  const navigate = useNavigate();
  const { Login } = useAuth();

  // Redireccionar a la página anterior o al dashboard después del login
  const from = '/dashboard';

  const login = async (data: LoginFormData) => {
    try {
      // Usar el método login del contexto de autenticación
      const success = await Login(data);
      
      if (success) {
        // Redireccionar al usuario
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.error('Error de login:', error);
      toast.error('Error al iniciar sesión');
    }
  }

  return {
    login,
  }
}

export default useLogin;