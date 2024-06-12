import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaEdit, FaTrash } from "react-icons/fa"; // Importando los iconos de Font Awesome
import rutaImage from '../assets/ruta.jpeg'; // Importando la imagen de fondo

// Simulación de una función para obtener eventos
const fetchEvents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Evento 1", description: "Descripción del evento 1" },
        { id: 2, title: "Evento 2", description: "Descripción del evento 2" },
      ]);
    }, 1000);
  });
};

const EventosPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents().then((data) => {
      setEvents(data);
    });
  }, []);

  const handleDelete = (id) => {
    // Lógica para eliminar un evento con el ID proporcionado
    console.log("Evento eliminado con ID:", id);
  };

  const handleEdit = (id) => {
    // Redirigir a la página de edición de evento con el ID proporcionado
    console.log("Editando evento con ID:", id);
    // Aquí deberías redirigir a la página de edición usando React Router
  };

  return (
    <div style={{ backgroundImage: `url(${rutaImage})` }} className="flex flex-col items-center min-h-screen bg-cover bg-center p-10">
      {events.length === 0 ? (
        <div className="flex flex-col justify-center items-center p-10 text-white">
          <FaCalendarAlt className="text-6xl text-gray-400 mb-4" />
          <h1 className="font-bold text-2xl">No hay eventos, ¡Agrega un nuevo evento!</h1>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full text-white">
          {events.map((event) => (
            <div key={event.id} className="p-4 bg-gray-800 rounded-lg">
              <h2 className="font-bold text-xl mb-2">{event.title}</h2>
              <p>{event.description}</p>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handleEdit(event.id)}
                  className="flex items-center px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                >
                  <FaEdit className="mr-2" /> Editar
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="flex items-center px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
                >
                  <FaTrash className="mr-2" /> Borrar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventosPage;
