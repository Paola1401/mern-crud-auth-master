// Importamos la biblioteca Zod, que se utiliza para la validación de esquemas de datos
import { z } from "zod";

// Esquema de validación para el registro de usuarios
export const registerSchema = z.object({
  // Campo username es un campo obligatorio
  username: z.string({
    required_error: "Username is required",
  }),

  // Campo email es obligatorio
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Email is not valid",
    }),

  // Campo password es obligatorio
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
});

// Esquema de validación para el inicio de sesión de usuarios
export const loginSchema = z.object({
  // Campo email pide un correo electrónico válido
  email: z.string().email(),

  // Campo password minimo 6 carcteres
  password: z.string().min(6),
});

