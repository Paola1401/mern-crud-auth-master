// Importamos Express, para construir aplicaciones web
import express from "express";

// Importamos CORS para permitir solicitudes desde diferentes dominios
import cors from "cors";

// Importamos Morgan para registrar solicitudes HTTP en la consola
import morgan from "morgan";

// Importamos cookie-parser para manejar cookies
import cookieParser from "cookie-parser";

// Importamos Multer para manejar la subida de archivos
import multer from "multer";

// Importamos Path para manejar rutas de archivos y directorios
import path from "path";

// Importamos las rutas de autenticación desde el archivo auth.routes.js
import authRoutes from "./routes/auth.routes.js";

// Importamos las rutas de tareas desde el archivo tasks.routes.js
import tasksRoutes from "./routes/tasks.routes.js";

// Importamos la URL del frontend desde el archivo de configuración
import { FRONTEND_URL } from "./config.js";


const app = express();

// Lista de orígenes permitidos
const allowedOrigins = [FRONTEND_URL, 'http://localhost:5173', 'https://proyecto2-6464a.web.app', 'http://127.0.0.1:5173'];

// Configuración de CORS
app.use(
  cors({
    credentials: true,
    origin: function(origin, callback) {
      // Permite solicitudes sin origen (como en herramientas locales)
      if (!origin) return callback(null, true);

      // Verifica si el origen está en la lista de permitidos
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  })
);

// Configuración de Multer para guardar las imágenes en la carpeta "assets"
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'assets/')); // Directorio donde se guardarán las imágenes
  },
  filename: function (req, file, cb) {
    // Nombre único para cada imagen
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Middleware para procesar archivos de imagen
app.use(upload.single('image')); // 'image' es el nombre del campo de entrada de tipo archivo en el formulario HTML

// Otros middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

// Rutas de autenticación y tareas
app.use("/api/auth", authRoutes);
app.use("/api", tasksRoutes);

// Ruta de servicio estático y punto de entrada para SPA (Single Page Application)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve("client", "dist", "index.html"));
  });
}

export default app;
