import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, Message, Button, Input, Label } from "../components/ui";
import { loginSchema } from "../schemas/auth";
import { FaBicycle } from "react-icons/fa"; 
import bicimImage from '../assets/bicim.jpeg'; 

//Componente que representa la página de inicio de sesión.

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => signin(data);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/tasks");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${bicimImage})`, // Usamos la imagen importada
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Card className="max-w-md w-full text-black">
        {loginErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        <div className="flex items-center justify-center mb-4">
          <FaBicycle className="text-3xl text-gray-600 mr-2" />
          <h1 className="text-2xl font-bold uppercase">Iniciar Sesión</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="email">Correo Electrónico:</Label>
            <Input
              label="Escribe tu correo electrónico"
              type="email"
              name="email"
              placeholder="tucorreo@dominio.com"
              {...register("email", { required: true })}
              className="w-full mt-1 p-2 border rounded-md text-black"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <Label htmlFor="password">Contraseña:</Label>
            <Input
              type="password"
              name="password"
              placeholder="Escribe tu contraseña"
              {...register("password", { required: true, minLength: 6 })}
              className="w-full mt-1 p-2 border rounded-md text-black"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <Button className="w-full py-2 mt-4">Iniciar Sesión</Button>
        </form>

        <p className="flex gap-x-2 justify-between mt-4">
          ¿No tienes una cuenta? <Link to="/register" className="text-blue-700">Regístrate</Link>
        </p>
      </Card>
    </div>
  );
}



