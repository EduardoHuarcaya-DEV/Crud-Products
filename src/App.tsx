import { Toaster } from "sonner";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes"

const App = () => {
  return (
    <div>
      {/* Configuración de Notificaciones */}
      <Toaster
        richColors={true}
        expand={true}
        duration={3000}
        position="top-right"
      />

      {/* Proveedor de Rutas */}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
