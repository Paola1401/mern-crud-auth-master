import axios from "./axios";

// Función para obtener todos los eventos
export const getEventosRequest = async () => axios.get("/eventos");

// Función para crear un nuevo evento
export const createEventoRequest = async (evento) => axios.post("/eventos", evento);

// Función para actualizar un evento existente
export const updateEventoRequest = async (evento) =>
  axios.put(`/eventos/${evento._id}`, evento);

// Función para eliminar un evento
export const deleteEventoRequest = async (id) => axios.delete(`/eventos/${id}`);

// Función para obtener los detalles de un evento específico
export const getEventoRequest = async (id) => axios.get(`/eventos/${id}`);
