// Importa React para utilizar elementos JSX
import React from 'react';
// Importa ReactDOM para renderizar la aplicación en el DOM
import ReactDOM from 'react-dom/client'; 
// Importa el componente principal de la aplicación
import App from './App'; 
// Importa estilos CSS para la aplicación
import './index.css'; 

// Utiliza ReactDOM.createRoot para renderizar la aplicación en el elemento con el ID 'root' del DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  // Utiliza React.StrictMode para activar un conjunto de verificaciones adicionales de React para detectar problemas potenciales en la aplicación
  <React.StrictMode>
    {/* Renderiza el componente principal de la aplicación */}
    <App />
  </React.StrictMode>
);

