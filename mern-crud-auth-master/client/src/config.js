// Utiliza la variable de entorno 'VITE_API_URL' si está definida; de lo contrario, usa 'http://localhost:4000/api'.
export const API_URL = import.meta.env.VITE_API_URL|| "http://localhost:4000/api";
