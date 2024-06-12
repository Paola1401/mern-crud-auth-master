// Importamos el hook 'useAuth' desde el contexto 'authContext'
import { useAuth } from "../context/authContext";

// Importamos los componentes 'Navigate' y 'Outlet' desde 'react-router-dom'
import { Navigate, Outlet } from "react-router-dom";

// Componente de ruta protegida
export function ProtectedRoute() {
  // Obtenemos el estado de autenticación del contexto de autenticación
  const { isAuthenticated, user, loading } = useAuth();

  // Si la autenticación está en proceso, mostramos un indicador de carga
  if (loading) return <div>Loading...</div>;

  // Si el usuario no está autenticado, redirigimos a la página de inicio de sesión
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Redireccionamos según el rol del usuario
  switch (user.role) {
    case "cyclist":
      return <Navigate to="/cyclist" />;
    case "judge":
      return <Navigate to="/judge" />;
    case "organizer":
      return <Navigate to="/organizer" />;
    default:
      // Si el rol del usuario no coincide con ninguno de los roles esperados, mostramos el contenido de la ruta protegida
      return <Outlet />;
  }
}
