// Importa la función 'z' de Zod para definir esquemas de validación
import { z } from "zod";

// Esquema de validación para iniciar sesión
export const loginSchema = z.object({
  // Define la propiedad 'email' como una cadena que debe ser una dirección de correo electrónico válida
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  // Define la propiedad 'password' como una cadena que debe tener al menos 6 caracteres
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

// Esquema de validación para el registro de usuarios
export const registerSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
  confirmPassword: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});
