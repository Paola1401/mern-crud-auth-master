// Importa la función 'object' y otras funciones de validación de Zod
import { z } from "zod";

// Esquema de validación para un evento
export const eventoSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  subtitle: z.string().optional(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/i, { message: "Invalid date format" }),
  time: z.string(),
  location: z.string(),
  distances: z.string(),
  description: z.string(),
  registrationFee: z.string(),
  contactEmail: z.string().email(),
});

