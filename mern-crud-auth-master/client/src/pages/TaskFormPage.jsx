import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Button, Typography, Container, TextField, Box, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/free-solid-svg-icons';
import rutaImage from '../assets/ruta.jpeg'; // Importamos la imagen desde assets
import { useTasks } from "../context/tasksContext";

dayjs.extend(utc);

//Permite al usuario ingresar información sobre la tarea, como título, descripción, fecha.

export function TaskFormPage() {
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Función que se ejecuta al enviar el formulario
  const onSubmit = async (data) => {
    try {
      const dateTime = dayjs.utc(`${data.date}T${data.time}`).format(); // Combina fecha y hora

      if (params.id) {
        await updateTask(params.id, {
          ...data,
          date: dateTime,
        });
      } else {
        await createTask({
          ...data,
          date: dateTime,
        });
      }
      navigate("/tasks");
    } catch (error) {
      console.log(error);
      window.location.href = "/";
    }
  };

  // Efecto para cargar los datos de la tarea si se está editando
  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue(
          "date",
          task.date ? dayjs(task.date).utc().format("YYYY-MM-DD") : ""
        );
        setValue(
          "time",
          task.date ? dayjs(task.date).utc().format("HH:mm") : ""
        );
        setValue("distance", task.distance);
        setValue("location", task.location); 
        setValue("completed", task.completed);
        setValue("subscriptionFee", task.subscriptionFee); 
      }
    };
    loadTask();
  }, []);

  // Renderiza el formulario de la tarea
  return (
    <div
      style={{ 
        backgroundImage: `url(${rutaImage})`, 
        minHeight: '100vh', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          mt: 5,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          bgcolor: 'rgba(255, 255, 255, 0.85)' // Fondo transparente con opacidad
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="center" mb={3} style={{ marginBottom: '20px' }}>
          <FontAwesomeIcon icon={faBicycle} size="2x" style={{ marginRight: '10px', color: 'black' }} />
          <Typography variant="h5" component="h1" fontWeight="bold" color="textPrimary" sx={{ textTransform: 'uppercase' }}>
            Crear Nueva Ruta
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            {/* Campos del formulario */}
          </Grid>
        </form>
      </Container>
    </div>
  );
}












