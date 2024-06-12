// Importa Navigate y Outlet de React Router para la navegación
import { Navigate, Outlet } from "react-router-dom";
// Importa el hook useAuth del contexto de autenticación
import { useAuth } from "./context/authContext";

// Componente funcional ProtectedRoute
export const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return <h1>Loading...</h1>;
  
  // Si el usuario no está autenticado y el proceso de carga ha finalizado, redirige a la página de inicio de sesión
  if (!isAuthenticated && !loading) return <Navigate to="/login" replace />;
  
  // Si el usuario está autenticado, muestra el contenido de la ruta protegida
  return <Outlet />;
};
