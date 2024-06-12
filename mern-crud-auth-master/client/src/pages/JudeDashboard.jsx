import React from 'react';
import '../styles/dashboardStyles.css'; 

//Componente que representa el panel de control para los jueces en la aplicación.
export function JudgeDashboard() {
  return (
    <div className="dashboard-card judge">
      <h1>Bienvenido, Juez!</h1>
      <p>Aquí puedes ver y calificar las competiciones.</p>
    </div>
  );
}
