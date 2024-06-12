import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
 // Importamos las funciones de la API para las solicitudes de autenticación
import { loginRequest, registerRequest, verifyTokenRequest } from "../api/auth";
// Importamos Cookies para manejar el token de autenticación
import Cookies from "js-cookie"; 

const AuthContext = createContext(); // Creamos el contexto de autenticación

export const useAuth = () => {
  const context = useContext(AuthContext); // Obtenemos el contexto de autenticación
  if (!context) throw new Error("useAuth must be used within a AuthProvider"); 
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado para almacenar los datos del usuario autenticado
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para verificar si el usuario está autenticado
  const [errors, setErrors] = useState([]); // Estado para manejar los errores de autenticación
  const [loading, setLoading] = useState(true); // Estado para controlar el estado de carga durante la verificación de la autenticación del usuario

  // Limpiar errores después de 5 segundos
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  // Función para registrar un nuevo usuario
  const signup = async (user) => {
    try {
      const res = await registerRequest(user); // Hacemos la solicitud para registrar un nuevo usuario
      if (res.status === 200) {
        setUser(res.data); // Establecemos los datos del usuario autenticado
        setIsAuthenticated(true); // Marcamos al usuario como autenticado
      }
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data.message); // Manejamos cualquier error que ocurra durante el registro
    }
  };

  // Función para iniciar sesión
  const signin = async (user) => {
    try {
      const res = await loginRequest(user); // Hacemos la solicitud para iniciar sesión
      setUser(res.data); // Establecemos los datos del usuario autenticado
      setIsAuthenticated(true); // Marcamos al usuario como autenticado
    } catch (error) {
      console.log(error);
      // setErrors(error.response.data.message);
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    Cookies.remove("token"); // Eliminamos el token de autenticación almacenado en las cookies
    setUser(null); // Eliminamos los datos del usuario autenticado
    setIsAuthenticated(false); // Marcamos al usuario como no autenticado
  };

  // Verificamos el estado de autenticación del usuario al cargar la página
  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAuthenticated(false); // Si no hay token en las cookies, marcamos al usuario como no autenticado
        setLoading(false);
        return;
      }

      try {
        const res = await verifyTokenRequest(cookies.token); // Verificamos el token de autenticación
        console.log(res);
        if (!res.data) return setIsAuthenticated(false);
        setIsAuthenticated(true); // Si el token es válido, marcamos al usuario como autenticado
        setUser(res.data); // Establecemos los datos del usuario autenticado
        setLoading(false);
      } catch (error) {
        setIsAuthenticated(false); // Si hay algún error al verificar el token, marcamos al usuario como no autenticado
        setLoading(false);
      }
    };
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        signin,
        logout,
        isAuthenticated,
        errors,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

