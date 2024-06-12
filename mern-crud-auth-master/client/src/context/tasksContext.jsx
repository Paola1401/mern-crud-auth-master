import { createContext, useContext, useState } from "react";
import {
  createTaskRequest,
  deleteTaskRequest,
  getTasksRequest,
  getTaskRequest,
  updateTaskRequest,
} from "../api/tasks"; // Importamos las funciones de la API para las solicitudes de tareas

const TaskContext = createContext(); // Creamos el contexto de las tareas

export const useTasks = () => {
  const context = useContext(TaskContext); // Obtenemos el contexto de las tareas
  if (!context) throw new Error("useTasks must be used within a TaskProvider"); 
  return context;
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]); // Estado para almacenar las tareas

  const getTasks = async () => {
    const res = await getTasksRequest(); // Hacemos la solicitud para obtener las tareas
    setTasks(res.data); // Actualizamos el estado con las tareas obtenidas
  };

  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskRequest(id); // Hacemos la solicitud para eliminar la tarea con el ID especificado
      if (res.status === 204) setTasks(tasks.filter((task) => task._id !== id)); // Si la solicitud es exitosa, actualizamos el estado eliminando la tarea con el ID especificado
    } catch (error) {
      console.log(error); // Manejamos cualquier error que ocurra durante la eliminación de la tarea
    }
  };

  const createTask = async (task) => {
    try {
      const res = await createTaskRequest(task); // Hacemos la solicitud para crear una nueva tarea con los datos proporcionados
      console.log(res.data); // Mostramos la respuesta de la solicitud en la consola
    } catch (error) {
      console.log(error); // Manejamos cualquier error que ocurra durante la creación de la tarea
    }
  };

  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id); // Hacemos la solicitud para obtener la tarea con el ID especificado
      return res.data; // Devolvemos los datos de la tarea obtenida
    } catch (error) {
      console.error(error); // Manejamos cualquier error que ocurra durante la obtención de la tarea
    }
  };

  const updateTask = async (id, task) => {
    try {
      await updateTaskRequest(id, task); // Hacemos la solicitud para actualizar la tarea con el ID especificado y los datos proporcionados
    } catch (error) {
      console.error(error); // Manejamos cualquier error que ocurra durante la actualización de la tarea
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        getTasks,
        deleteTask,
        createTask,
        getTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}


