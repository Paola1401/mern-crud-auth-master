// Importamos el modelo de Usuario
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { TOKEN_SECRET } from "../config.js";
import { createAccessToken } from "../libs/jwt.js";

//Registra un nuevo usuario en el sistema.
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Verifica si el correo electrónico ya está en uso
    const userFound = await User.findOne({ email });
    if (userFound)
      return res.status(400).json({
        message: ["The email is already in use"],
      });

    // Hashing de la contraseña
    const passwordHash = await bcrypt.hash(password, 10);

    // Creación del usuario
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    // Guardado del usuario en la base de datos
    const userSaved = await newUser.save();

    // Creación del token de acceso
    const token = await createAccessToken({
      id: userSaved._id,
    });

    // Configuración de la cookie del token
    res.cookie("token", token, {
      httpOnly: process.env.NODE_ENV !== "development",
      secure: true,
      sameSite: "none",
    });

    // Devolución de los detalles del usuario registrado en formato JSON
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
    });
  } catch (error) {
    // Manejo de errores y respuesta de error con un código de estado 500
    res.status(500).json({ message: error.message });
  }
};

//Autentica a un usuario existente.
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Busca al usuario por su correo electrónico
    const userFound = await User.findOne({ email });

    // Verifica si el usuario existe
    if (!userFound)
      return res.status(400).json({
        message: ["The email does not exist"],
      });

    // Compara la contraseña proporcionada con la almacenada en la base de datos
    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) {
      return res.status(400).json({
        message: ["The password is incorrect"],
      });
    }

    // Creación del token de acceso
    const token = await createAccessToken({
      id: userFound._id,
      username: userFound.username,
    });

    // Configuración de la cookie del token
    res.cookie("token", token, {
      httpOnly: process.env.NODE_ENV !== "development",
      secure: true,
      sameSite: "none",
    });

    // Devolución de los detalles del usuario autenticado en formato JSON
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  } catch (error) {
    // Manejo de errores y respuesta de error con un código de estado 500
    return res.status(500).json({ message: error.message });
  }
};

//Verifica la validez del token de acceso.
export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.send(false);

  // Verifica el token de acceso
  jwt.verify(token, TOKEN_SECRET, async (error, user) => {
    if (error) return res.sendStatus(401);

    // Busca al usuario por su ID
    const userFound = await User.findById(user.id);
    if (!userFound) return res.sendStatus(401);

    // Devuelve los detalles del usuario en formato JSON
    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};

//Cierra la sesión del usuario actual y elimina la cookie del token.
export const logout = async (req, res) => {
  // Elimina la cookie del token
  res.cookie("token", "", {
    httpOnly: true,
    secure: true,
    expires: new Date(0),
  });
  // Devuelve una respuesta de estado 200
  return res.sendStatus(200);
};
