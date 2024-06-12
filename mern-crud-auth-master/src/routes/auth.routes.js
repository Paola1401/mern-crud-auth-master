// Importamos el enrutador desde Express para manejar las rutas de la API
import { Router } from "express";

// Importamos los controladores de autenticación para manejar las operaciones relacionadas con la autenticación
import {
  login,
  logout,
  register,
  verifyToken,
} from "../controllers/auth.controller.js";

// Importamos el middleware de validación para validar los datos de entrada
import { validateSchema } from "../middlewares/validator.middleware.js";

// Importamos los esquemas de validación para el registro y el inicio de sesión
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

// Creamos un enrutador de Express
const router = Router();

router.post("/register", validateSchema(registerSchema), register); // Ruta para registrar un nuevo usuario
router.post("/login", validateSchema(loginSchema), login); // Ruta para iniciar sesión de usuario
router.get("/verify", verifyToken); // Ruta para verificar el token de autenticación
router.post("/logout", verifyToken, logout); // Ruta para cerrar sesión de usuario

export default router;
