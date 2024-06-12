// Importamos dotenv para cargar las variables de en un archivo .env
import dotenv from 'dotenv';
// Cargamos las variables de entorno
dotenv.config();

// Definimos el puerto en el que se ejecutará la aplicación, con un valor predeterminado de 4000
export const PORT = process.env.PORT || 4000;

// Definimos la URI de conexión para la base de datos MongoDB, con un valor predeterminado
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb+srv://grecia:1234@cluster0.phprekc.mongodb.net/mern-tasks";

// Definimos un token con un valor predeterminado
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "secret";

// Definimos las URLs permitidas para el frontend, con valores predeterminados
export const FRONTEND_URL = process.env.FRONTEND_URL || ["http://localhost:5173", "https://proyecto2-6464a.web.app/", 'http://127.0.0.1:5173'];
