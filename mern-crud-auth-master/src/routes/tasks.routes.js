// Importamos el enrutador desde Express para manejar las rutas de la API
import { Router } from "express";

// Importamos los controladores de tareas para manejar las operaciones CRUD de las tareas
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/tasks.controllers.js";

// Importamos el middleware de autenticación para proteger las rutas de la API
import { auth } from "../middlewares/auth.middleware.js";

// Importamos el middleware de validación para validar los datos de entrada
import { validateSchema } from "../middlewares/validator.middleware.js";

// Importamos el esquema de validación para crear tareas
import { createTaskSchema } from "../schemas/task.schema.js";

// Creamos un enrutador de Express
const router = Router();

router.get("/tasks", auth, getTasks); // Ruta para obtener todas las tareas
router.post("/tasks", auth, validateSchema(createTaskSchema), createTask); // Ruta para crear una nueva tarea
router.get("/tasks/:id", auth, getTask); // Ruta para obtener una tarea por su ID
router.put("/tasks/:id", auth, updateTask); // Ruta para actualizar una tarea por su ID
router.delete("/tasks/:id", auth, deleteTask); // Ruta para eliminar una tarea por su ID

export default router;

