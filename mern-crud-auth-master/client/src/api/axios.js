// Importa la biblioteca Axios
import axios from "axios"; 
// Importa la URL base de la API desde la configuración
import { API_URL } from "../config"; 

// Crea una instancia de Axios con la URL base y la configuración de cookies habilitada
const instance = axios.create({
  baseURL: API_URL, // Establece la URL base para todas las solicitudes
  withCredentials: true, // Habilita el envío de cookies en las solicitudes
});

export default instance;
