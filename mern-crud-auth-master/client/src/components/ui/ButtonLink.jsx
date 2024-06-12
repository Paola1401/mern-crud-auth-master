import { Link } from "react-router-dom";

export const ButtonLink = ({ to, children }) => (
  // Componente Link de React Router que envuelve el contenido del botón
  <Link to={to} className="bg-black text-white px-4 py-1 rounded-md">
    {children} {/* Contenido del botón */}
  </Link>
);


