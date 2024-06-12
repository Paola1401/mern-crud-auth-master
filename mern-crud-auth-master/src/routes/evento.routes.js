// Importamos Express para manejar las rutas de la API
import express from "express";

// Importamos los controladores de eventos para manejar las operaciones CRUD de eventos
import {
  createEvento,
  updateEvento,
  deleteEvento,
  getEventos,
  getEvento,
} from "../controllers/eventos.controllers.js";

// Importamos el middleware de autenticación para proteger las rutas de la API
import { auth } from "../middlewares/auth.middleware.js";

// Importamos el middleware de validación para validar los datos de entrada
import { validateSchema } from "../middlewares/validator.middleware.js";

// Importamos el esquema de validación para crear eventos
import { createEventoSchema } from "../schemas/evento.schema.js";

// Creamos un enrutador de Express
const router = express.Router();

router.get("/eventos", auth, getEventos); // Ruta para obtener todos los eventos
router.post("/eventos", auth, validateSchema(createEventoSchema), createEvento); // Ruta para crear un nuevo evento
router.get("/eventos/:id", auth, getEvento); // Ruta para obtener un evento específico por su ID
router.put("/eventos/:id", auth, validateSchema(createEventoSchema), updateEvento); // Ruta para actualizar un evento existente por su ID
router.delete("/eventos/:id", auth, deleteEvento); // Ruta para eliminar un evento existente por su ID


export default router;

