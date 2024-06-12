// Este componente representa un botón interactivo que acepta una función onClick y un contenido (children)
export function Button({ onClick, children }) {
  return (
    <button
      // Clases de estilo utilizando Tailwind CSS
      className="bg-black text-white px-6 py-2 rounded-lg my-2 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:bg-gray-400"
      onClick={onClick} // Función onClick que se ejecuta cuando se hace clic en el botón
    >
      {children} {/* Contenido del botón */}
    </button>
  );
}


