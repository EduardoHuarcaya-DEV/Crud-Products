import { useForm } from "react-hook-form";
import type { LoginFormData } from "@/interfaces/auth.interface";
import { useAuth } from "@/context/authContext";

const LoginForm = () => {
  const { Login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    formState: { isSubmitting },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    Login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="correo" className="font-semibold">
          Correo
        </label>
        <input
          id="correo"
          type="email"
          {...register("correo", { required: true })}
          placeholder="ejemplo@correo.com"
          className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
        />
        {errors.correo && (
          <span className="text-center text-sm p-2 text-red-400 rounded-lg font-bold">
            Coloque un correo válido
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contrasena" className="font-semibold">
          Contraseña
        </label>
        <input
          id="contrasena"
          type="password"
          {...register("contrasena", { required: true })}
          className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
        />
        {errors.contrasena && (
          <span className="text-center text-sm p-2 text-red-400 rounded-lg font-bold">
            Por favor, coloque una contraseña
          </span>
        )}
      </div>
      <div>
        <button className="p-3 w-full rounded-lg bg-blue-500 text-white font-bold cursor-pointer hover:bg-blue-600 transition-all duration-200"
        disabled={isSubmitting}>
          {isSubmitting ? "Cargando..." : "Inciar Sesion"}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
