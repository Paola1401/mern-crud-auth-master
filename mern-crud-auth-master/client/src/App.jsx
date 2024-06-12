// Importaciones de componentes y contextos necesarios
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { LoginPage } from "./pages/LoginPage";
import { TasksPage } from "./pages/TasksPage";
import { TaskProvider } from "./context/tasksContext";
import ProfilePage from "./pages/ProfilePage";
import EventosPage from "./pages/EventosPage";
import app from './firebaseConfig';

// Función del componente principal de la aplicación
function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        {/* Enrutador BrowserRouter */}
        <BrowserRouter>
          {/* Contenedor principal de la aplicación */}
          <main className="container content-container mx-auto px-10 md:px-0">
            {/* Barra de navegación */}
            <Navbar />
            {/* Definición de rutas */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              {/* Rutas protegidas que requieren autenticación */}
              <Route element={<ProtectedRoute />}>
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/add-task" element={<TaskFormPage />} />
                <Route path="/tasks/:id" element={<TaskFormPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/eventos" element={<EventosPage />} />
                {/* <Route path="/statistics" element={<StatisticsPage />} /> */}
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;

