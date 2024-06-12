import React from "react";

export function Card({ children, className, color = "white", textColor = "black" }) {
  // Determina la clase CSS para el color de fondo basado en la prop 'color'
  const bgColor = color === "black" ? "bg-black/80" : "bg-white/40";
  
  // Determina la clase CSS para el color de texto basado en la prop 'textColor'
  const textClass = textColor === "black" ? "text-black" : "text-white";
  
  // Retorna un div con las clases CSS calculadas y los elementos hijos dentro
  return (
    <div className={`${bgColor} ${textClass} shadow-lg rounded-lg p-8 ${className}`}>
      {children}
    </div>
  );
}

