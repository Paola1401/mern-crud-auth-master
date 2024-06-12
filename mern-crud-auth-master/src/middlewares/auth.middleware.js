// Importamos la biblioteca 'jsonwebtoken' para manejar tokens JWT
import jwt from "jsonwebtoken";

// Importamos la clave secreta del token desde el archivo de configuración
import { TOKEN_SECRET } from "../config.js";

export const auth = (req, res, next) => {
  try {
    // Extraemos el token de las cookies de la solicitud
    const { token } = req.cookies;

    // Si no hay token, devolvemos una respuesta de error con un código de estado 401
    if (!token)
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });

    // Verificamos la validez del token 
    jwt.verify(token, TOKEN_SECRET, (error, user) => {
      // Si hay un error al verificar el token, devolvemos una respuesta de error con un código de estado 401
      if (error) {
        return res.status(401).json({ message: "Token is not valid" });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    // Si ocurre un error durante el proceso, devolvemos una respuesta de error con un código de estado 500
    return res.status(500).json({ message: error.message });
  }
};

