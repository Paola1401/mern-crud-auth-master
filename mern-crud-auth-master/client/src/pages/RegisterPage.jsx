import React, { useEffect } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Button, Typography, Container, TextField, Box, Grid } from '@mui/material';
import { useForm } from "react-hook-form";
import { registerSchema } from "../schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaBicycle } from "react-icons/fa";
import registroImage from '../assets/registro.jpeg'; // Importamos la imagen desde assets

//Página de registro que permite a los usuarios crear una nueva cuenta.
function RegisterPage() {
  const { signup, errors: registerErrors, isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();

  // Función que se ejecuta al enviar el formulario
  const onSubmit = async (value) => {
    await signup(value);
  };

  // Redirecciona al usuario a la página de tareas si ya está autenticado
  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated, navigate]);

  const password = watch("password", "");

  // Renderiza el formulario de registro
  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${registroImage})`, // Usamos la imagen importada
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Card className="max-w-md w-full text-black">
        {/* Mensajes de error de registro */}
        {registerErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        {/* Encabezado */}
        <div className="flex items-center justify-center mb-4">
          <FaBicycle className="text-3xl text-black mr-2" /> {/* Cambiamos el color del icono a negro */}
          <h1 className="text-2xl font-bold uppercase text-black">Registro</h1> {/* Mantenemos el color del título como negro */}
        </div>
        {/* Formulario de registro */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Campos del formulario */}
          <TextField
            label="Nombre de Usuario"
            name="username"
            placeholder="Tu Nombre de Usuario"
            {...register("username")}
            autoFocus
            fullWidth
            error={errors.username ? true : false}
            helperText={errors.username && errors.username.message}
          />
          <TextField
            label="Correo Electrónico"
            name="email"
            placeholder="tucorreo@dominio.com"
            {...register("email")}
            fullWidth
            error={errors.email ? true : false}
            helperText={errors.email && errors.email.message}
          />
          <TextField
            label="Contraseña"
            name="password"
            type="password"
            placeholder="Escribe tu contraseña"
            {...register("password")}
            fullWidth
            error={errors.password ? true : false}
            helperText={errors.password && errors.password.message}
          />
          <TextField
            label="Confirmar Contraseña"
            name="confirmPassword"
            type="password"
            placeholder="Confirma tu contraseña"
            {...register("confirmPassword", {
              validate: (value) => value === password || "Las contraseñas no coinciden",
            })}
            fullWidth
            error={errors.confirmPassword ? true : false}
            helperText={errors.confirmPassword && errors.confirmPassword.message}
          />
          <Label htmlFor="role">Rol:</Label>
          <select
            name="role"
            {...register("role")}
            fullWidth
            error={errors.role ? true : false}
            helperText={errors.role && errors.role.message}
          >
            <option value="cyclist">Ciclista</option>
            <option value="judge">Juez</option>
            <option value="organizer">Organizador</option>
          </select>
          {/* Botón de registro */}
          <Button className="w-full py-2 mt-4">Registrarse</Button>
        </form>
        {/* Enlace a la página de inicio de sesión */}
        <p className="flex gap-x-2 justify-between mt-4">
          ¿Ya tienes una cuenta? <Link to="/login" className="text-blue-700">Inicia Sesión</Link>
        </p>
      </Card>
    </div>
  );
}

export default RegisterPage;
