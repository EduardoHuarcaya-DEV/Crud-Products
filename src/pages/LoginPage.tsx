import BlurText from "@components/reactbits/BlurText";
import GridMotion from "@components/reactbits/GridMotion";
import { items } from "@/lib/GridMotion";
import LoginForm from "@/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="md:flex h-svh bg-slate-50">
      <div className="hidden md:flex md:w-1/2">
        <GridMotion items={items} />
      </div>
      <div className="p-8 md:py-28 md:px-40 md:w-1/2 h-full flex flex-col justify-center space-y-8">
        <BlurText
          text="Login"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-6xl font-semibold justify-center md:justify-start"
        />
        <BlurText
          text="¡Bienvenido de Vuelta! Inicia Sesión para continuar."
          delay={150}
          animateBy="words"
          direction="top"
          className="text-slate text-lg md:text-xl text-slate-500 justify-center md:justify-start"
        />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;