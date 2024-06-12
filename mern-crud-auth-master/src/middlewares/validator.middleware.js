//Este middleware se utiliza para validar el cuerpo de la solicitud HTTP

export const validateSchema = (schema) => (req, res, next) => {
  try {
    // Intenta analizar el cuerpo de la solicitud según el esquema proporcionado
    schema.parse(req.body);
    // Si la validación es exitosa, pasa al siguiente middleware
    next();
  } catch (error) {
    // Si la validación falla, devuelve una respuesta de error con un código de estado 400
    // y un mensaje que describe los errores de validación
    return res
      .status(400)
      .json({ message: error.errors.map((error) => error.message) });
  }
};









