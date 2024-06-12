// Importa la instancia de Axios configurada
import axios from "./axios"; 

// Función para registrar un nuevo usuario en el sistema
export const registerRequest = async (user) =>
  // Realiza una solicitud POST a /auth/register con los datos del usuario
  axios.post(`/auth/register`, user); 

// Función para iniciar sesión de un usuario
export const loginRequest = async (user) =>
  // Realiza una solicitud POST a /auth/login con los datos del usuario
  axios.post(`/auth/login`, user); 

// Función para verificar si el token de autenticación es válido
export const verifyTokenRequest = async () =>
   // Realiza una solicitud GET a /auth/verify para verificar el token de autenticación
  axios.get(`/auth/verify`);
