// Importamos la aplicación principal desde el archivo app.js
import app from "./app.js";

// Importamos el puerto de configuración desde el archivo config.js
import { PORT } from "./config.js";

// Importamos la función para conectar a la base de datos desde el archivo db.js
import { connectDB } from "./db.js";

// Definimos una función principal que se ejecutará al iniciar la aplicación
async function main() {
  try {
    // Intentamos conectar a la base de datos
    await connectDB();

    // Iniciamos el servidor en el puerto especificado
    app.listen(PORT, () => {
      console.log(`Listening on port http://localhost:${PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV}`);
    });
  } catch (error) {
    // Si algo falla, mostramos un mensaje de error en la consola
    console.error('Failed to start server:', error);
  }
}

// Llamamos a la función principal para iniciar la aplicación
main();

