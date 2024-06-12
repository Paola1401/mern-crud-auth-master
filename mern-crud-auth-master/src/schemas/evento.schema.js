// Importamos la biblioteca Zod, que se utiliza para la validación de esquemas de datos
import { z } from "zod";

// Definimos un esquema de validación para eventos usando Zod
export const eventoSchema = z.object({
  // El campo 'title' es obligatorio y debe ser una cadena de texto
  title: z.string({
    required_error: "Title is required",
  }),
  
  subtitle: z.string().optional(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/i, { message: "Invalid date format" }).optional(),
  time: z.string().optional(), 
  location: z.string().optional(),
  distances: z.string().optional(),
  description: z.string().optional(),
  registrationFee: z.string().optional(),
  contactEmail: z.string().email().optional(),
});
