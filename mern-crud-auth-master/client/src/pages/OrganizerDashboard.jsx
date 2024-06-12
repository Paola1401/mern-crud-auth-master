import React from 'react';
import '../styles/dashboardStyles.css'; 

//Componente que representa el panel de control para los organizadores.
export function OrganizerDashboard() {
  return (
    <div className="dashboard-card organizer">
      <h1>Bienvenido, Organizador!</h1>
      <p>Aquí puedes crear y gestionar eventos.</p>
    </div>
  );
}
