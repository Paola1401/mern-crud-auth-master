// Importamos mongoose para definir y trabajar con esquemas de MongoDB
import mongoose from "mongoose";

// Definimos un nuevo esquema para el modelo de tarea
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User", // Referencia al modelo de usuario
    },
  },
  {
    timestamps: true, // Agrega automáticamente campos de fecha y hora de creación y actualización
  }
);

// Creamos y exportamos el modelo 'Task' a partir del esquema definido
export default mongoose.model("Task", taskSchema);

