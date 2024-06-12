// Importamos mongoose para definir y trabajar con esquemas de MongoDB
import mongoose from "mongoose";

// Definimos un nuevo esquema para el modelo de usuario
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },  
    email: {
      type: String,
      required: true,
      unique: true,
    },    
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Creamos y exportamos el modelo 'User' a partir del esquema definido
export default mongoose.model("User", userSchema);
