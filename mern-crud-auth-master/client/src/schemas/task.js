// Importa la función 'object' de Zod para definir un esquema de objeto
import { z } from "zod";

// Esquema de validación para una tarea
export const taskSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  description: z.string({
    required_error: "Description is required",
  }),
});
