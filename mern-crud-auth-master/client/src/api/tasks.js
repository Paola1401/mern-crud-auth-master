import axios from "./axios";

// Función para obtener todas las tareas
export const getTasksRequest = async () => axios.get("/tasks");

// Función para crear una nueva tarea
export const createTaskRequest = async (task) => axios.post("/tasks", task);

// Función para actualizar una tarea existente
export const updateTaskRequest = async (task) =>
  axios.put(`/tasks/${task._id}`, task);

// Función para eliminar una tarea
export const deleteTaskRequest = async (id) => axios.delete(`/tasks/${id}`);

// Función para obtener los detalles de una tarea específica
export const getTaskRequest = async (id) => axios.get(`/tasks/${id}`);
