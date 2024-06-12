import { createContext, useContext, useState } from "react";
import {
  createEventoRequest,
  deleteEventoRequest,
  getEventosRequest,
  getEventoRequest,
  updateEventoRequest,
} from "../api/eventos"; // Importamos las funciones de la API para las solicitudes de eventos

const EventoContext = createContext(); // Creamos el contexto de eventos

export const useEventos = () => {
  const context = useContext(EventoContext); // Obtenemos el contexto de eventos
  if (!context) throw new Error("useEventos must be used within an EventoProvider"); 
  return context;
};

export function EventoProvider({ children }) {
  const [eventos, setEventos] = useState([]); // Estado para almacenar los eventos

  const getEventos = async () => {
    try {
      const res = await getEventosRequest(); // Hacemos la solicitud para obtener los eventos
      setEventos(res.data); // Actualizamos el estado con los eventos obtenidos
    } catch (error) {
      console.error(error); // Manejamos cualquier error que ocurra durante la obtención de los eventos
    }
  };

  const deleteEvento = async (id) => {
    try {
      const res = await deleteEventoRequest(id); // Hacemos la solicitud para eliminar el evento con el ID especificado
      if (res.status === 204) setEventos(eventos.filter((evento) => evento._id !== id)); // Si la solicitud es exitosa, actualizamos el estado eliminando el evento con el ID especificado
    } catch (error) {
      console.error(error); // Manejamos cualquier error que ocurra durante la eliminación del evento
    }
  };

  const createEvento = async (evento) => {
    try {
      const res = await createEventoRequest(evento); // Hacemos la solicitud para crear un nuevo evento con los datos proporcionados
      console.log(res.data); // Mostramos la respuesta de la solicitud en la consola
    } catch (error) {
      console.error(error); // Manejamos cualquier error que ocurra durante la creación del evento
    }
  };

  const getEvento = async (id) => {
    try {
      const res = await getEventoRequest(id); // Hacemos la solicitud para obtener el evento con el ID especificado
      return res.data; // Devolvemos los datos del evento obtenido
    } catch (error) {
      console.error(error); // Manejamos cualquier error que ocurra durante la obtención del evento
    }
  };

  const updateEvento = async (id, evento) => {
    try {
      await updateEventoRequest(id, evento); // Hacemos la solicitud para actualizar el evento con el ID especificado y los datos proporcionados
    } catch (error) {
      console.error(error); // Manejamos cualquier error que ocurra durante la actualización del evento
    }
  };

  return (
    <EventoContext.Provider
      value={{
        eventos,
        getEventos,
        deleteEvento,
        createEvento,
        getEvento,
        updateEvento,
      }}
    >
      {children}
    </EventoContext.Provider>
  );
}
