// Importamos la biblioteca Zod, que se utiliza para la validación de esquemas de datos
import { z } from "zod";

// Definimos un esquema de validación para la creación de tareas usando Zod
export const createTaskSchema = z.object({
  // El campo 'title' es obligatorio y debe ser una cadena de texto
  title: z.string({
    required_error: "Title is required",
  }),
  // El campo 'description' es opcional y debe ser una cadena de texto
  description: z.string().optional(),
  // El campo 'date' es opcional y debe ser una cadena de texto con formato de fecha y hora
  date: z.string().datetime().optional(),
});

