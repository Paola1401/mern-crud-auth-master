// Importamos mongoose para interactuar con MongoDB
import mongoose from "mongoose";

// Importamos la URI de la base de datos desde el archivo de configuración
import { MONGODB_URI } from "./config.js";

// Función para conectar a la base de datos MongoDB
export const connectDB = async () => {
  try {
    // Intentamos conectarnos a la base de datos usando la URI y algunas opciones
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // Si la conexión es exitosa, mostramos un mensaje en la consola
    console.log("MongoDB is connected");
  } catch (error) {
    // Si hay un error, lo mostramos en la consola
    console.error("Database connection error:", error);
    // Lanzamos el error para que la función main() pueda capturarlo y manejarlo
    throw error;
  }
};
