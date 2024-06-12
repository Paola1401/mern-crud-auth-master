//se utiliza para renderizar el contenido del mensaje en un párrafo con estilos predefinidos.
export function Message({ message }) {
  return (
    <p className="text-slate-200 bg-red-500 py-2 px-3 text-sm rounded-sm mb-1">
      {message}
    </p>
  );
}
