import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from '../api/axios'; // Importamos axios desde nuestra API personalizada
import portada from "../assets/Bici.jpeg"; // Importamos la imagen de portada

function HomePage() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    // Obtener colaboraciones y patrocinios desde el backend
    const fetchSponsors = async () => {
      try {
        const response = await axios.get('/sponsors');
        setSponsors(response.data);
      } catch (error) {
        console.error('Error al obtener colaboraciones y patrocinios:', error);
      }
    };
    fetchSponsors();
  }, []);

  return (
    <section
      className="bg-red-500 flex justify-center items-center"
      style={{ 
        backgroundImage: `url(${portada})`, // Imagen de portada
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
        position: 'relative', 
      }}
    >
      {/* Encabezado */}
      <header className="bg-white bg-opacity-10 p-10 rounded-md flex flex-col items-center" style={{ color: 'white', maxWidth: '1200px', textAlign: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        {/* Información sobre EcoVelo */}
        <div className="flex-1 text-left p-5 text-white">
          <h1 className="text-5xl py-2 font-bold">EcoVelo</h1>
          <p className="text-md mt-4">
            ¡Registra tus rutas y mejora tu experiencia ciclista con EcoVelo!
          </p>
          <p className="text-md mt-2">
            EcoVelo es la app definitiva para los amantes del ciclismo. Con nuestra plataforma, puedes registrar tus rutas y descubrir nuevos caminos.
          </p>
          <h2 className="text-2xl mt-4"></h2>
          <ul className="text-md mt-2 list-disc list-inside"></ul>
        </div>
        {/* Instrucciones para empezar */}
        <div className="flex-1 text-left p-5 text-white">
          <h2 className="text-2xl mt-4">¿Cómo empezar?</h2>
          <ol className="text-md mt-2 list-decimal list-inside">
            <li>Regístrate: Crea tu perfil y personaliza tus preferencias.</li>
          </ol>
          <p className="text-md mt-4"></p>
          <p className="text-md mt-2 font-bold">
            EcoVelo - La app que te acompaña en cada pedalada.
          </p>
          {/* Botón para registrarse */}
          <Link
            className="bg-indigo-500 hover:bg-indigo-700 text-white px-6 py-3 rounded-full mt-4 inline-block transition duration-300"
            to="/register"
          >
            Empezar
          </Link>
        </div>
      </header>

      {/* Sección de Colaboraciones y Patrocinios */}
      <section className="bg-white bg-opacity-10 p-10 rounded-md flex flex-col items-center mt-10" style={{ color: 'white', maxWidth: '1200px', textAlign: 'center' }}>
        <h2 className="text-2xl mb-4">Colaboraciones y Patrocinios</h2>
        {/* Enlace para ver todas las colaboraciones y patrocinios */}
        <Link to="/colaboraciones" className="text-indigo-500 hover:underline mb-4">Ver todas las colaboraciones y patrocinios</Link>
        {/* Mostrar colaboraciones y patrocinios */}
        {sponsors.length === 0 ? (
          <p>No hay colaboraciones en este momento.</p>
        ) : (
          sponsors.slice(0, 3).map((sponsor) => (
            <div key={sponsor.id} className="colaboracion flex items-center mb-4">
              <img src={sponsor.logo} alt={sponsor.name} className="max-w-xs mr-4" />
              <p>{sponsor.description}</p>
            </div>
          ))
        )}
      </section>

      {/* Pie de página */}
      <footer className="absolute bottom-0 w-full text-center py-4 text-white" style={{ backgroundColor: '#000000' }}>
        © {new Date().getFullYear()} BiciAmigo. Todos los derechos reservados.
      </footer>
    </section>
  );
}

export default HomePage;


