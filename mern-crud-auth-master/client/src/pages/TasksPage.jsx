import React, { useEffect } from "react";
import { useTasks } from "../context/tasksContext";
import { TaskCard } from "../components/tasks/TaskCard";
import { FaBicycle } from "react-icons/fa";
import { Card } from "../components/ui/Card";
import rutaImage from '../assets/ruta.jpeg';

//Muestra una lista de tareas y permite agregar nuevas tareas.
export function TasksPage() {
  // Obtiene el estado de las tareas y la función para obtener las tareas
  const { tasks, getTasks } = useTasks();

  // Efecto para cargar las tareas cuando se monta el componente
  useEffect(() => {
    getTasks();
  }, []);

  // Renderiza la página de tareas
  return (
    <div
      className="flex flex-col items-center min-h-screen p-10"
      style={{
        backgroundImage: `url(${rutaImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Mensaje de advertencia si no hay tareas */}
      {tasks.length === 0 && (
        <Card color="black" textColor="white" className="flex flex-col justify-center items-center p-10">
          <FaBicycle className="text-6xl text-gray-400 mb-4" />
          <h1 className="font-bold text-2xl">No hay rutas, ¡Agrega una nueva!</h1>
        </Card>
      )}

      {/* Lista de tareas */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
        {tasks.map((task) => (
          <TaskCard
            task={task}
            key={task._id}
          />
        ))}
      </div>
    </div>
  );
}





