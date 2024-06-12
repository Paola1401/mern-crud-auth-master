import { forwardRef } from "react";

// Definición del componente Input utilizando forwardRef para reenviar la referencia del elemento input
export const Input = forwardRef((props, ref) => (
  // Renderiza un elemento input con los props pasados y aplica estilos CSS predefinidos
  <input
    {...props} 
    ref={ref} // Asigna la referencia del input
    className="w-full bg-white text-black px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500" // Aplica estilos de Tailwind CSS
  />
));
