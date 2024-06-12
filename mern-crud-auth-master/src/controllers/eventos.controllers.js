// Importamos el modelo de Evento
import Evento from "../models/evento.model.js";

//Obtiene todos los eventos disponibles.
export const getEventos = async (req, res) => {
  try {
    const eventos = await Evento.find();
    res.json(eventos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Crea un nuevo evento.
export const createEvento = async (req, res) => {
  try {
    const nuevoEvento = new Evento(req.body);
    await nuevoEvento.save();
    res.status(201).json(nuevoEvento);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//Actualiza un evento existente según su ID.
export const updateEvento = async (req, res) => {
  try {
    const { id } = req.params;
    const eventoActualizado = await Evento.findByIdAndUpdate(id, req.body, { new: true });
    if (!eventoActualizado) {
      return res.status(404).json({ message: "Evento no encontrado" });
    }
    res.json(eventoActualizado);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//Elimina un evento existente según su ID.
export const deleteEvento = async (req, res) => {
  try {
    const { id } = req.params;
    const eventoEliminado = await Evento.findByIdAndDelete(id);
    if (!eventoEliminado) {
      return res.status(404).json({ message: "Evento no encontrado" });
    }
    res.status(204).json({ message: "Evento eliminado correctamente" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//Obtiene un evento específico según su ID.
export const getEvento = async (req, res) => {
  try {
    const { id } = req.params;
    const evento = await Evento.findById(id);
    if (!evento) {
      return res.status(404).json({ message: "Evento no encontrado" });
    }
    res.json(evento);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
