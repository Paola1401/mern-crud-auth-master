// Importamos mongoose para definir y trabajar con esquemas de MongoDB
import mongoose from "mongoose";

// Definimos un nuevo esquema para el modelo de evento
const eventoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },    
    date: {
      type: Date,
      required: true,
    },    
    time: {
      type: String,
      required: true,
    },    
    location: {
      type: String,
      required: true,
    },    
    distances: {
      type: String,
      required: true,
    },    
    description: {
      type: String,
      required: true,
    },    
    registrationFee: {
      type: String,
      required: true,
    },
    contactEmail: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Agrega automáticamente campos de fecha y hora de creación y actualización
  }
);

// Creamos y exportamos el modelo 'Evento' a partir del esquema definido
const Evento = mongoose.model("Evento", eventoSchema);
export default Evento;
