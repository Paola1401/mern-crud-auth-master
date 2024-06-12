// Importamos la biblioteca 'jsonwebtoken' para manejar tokens JWT
import jwt from "jsonwebtoken";

// Importamos la clave secreta del token desde el archivo de configuración
import { TOKEN_SECRET } from "../config.js";

export async function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, TOKEN_SECRET, { expiresIn: "1d" }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
}
