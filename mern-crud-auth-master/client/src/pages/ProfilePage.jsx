import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import perfilBackground from "../assets/perfil.jpeg"; // Importa la imagen de fondo
import ladyImage from "../assets/Lady.jpg"; // Nueva imagen predeterminada "Lady.jpg"

//Página de perfil que muestra la información del usuario y permite la edición del perfil.
function ProfilePage() {
  const { user } = useAuth();
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(user.profileImage || null);
  const [openPreview, setOpenPreview] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editedUsername, setEditedUsername] = useState(user.username);
  const [editedEmail, setEditedEmail] = useState(user.email);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
    setImagePreview(URL.createObjectURL(selectedImage));
    setOpenPreview(true); // Abrir el diálogo de vista previa
  };

  const handleClosePreview = () => {
    setOpenPreview(false);
  };

  const handleEditProfile = () => {
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };

  const handleSaveChanges = async () => {
    // Aquí puedes agregar la lógica para guardar los cambios del perfil
    setOpenEditDialog(false); // Cierra la ventana de edición al guardar cambios
  };

  // Renderiza el formulario de perfil
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${perfilBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }} className="w-full max-w-md p-8 rounded-lg shadow-lg text-white">
        <Card>
          <CardHeader
            avatar={
              <Avatar
                src={imagePreview || ladyImage} 
                alt="Imagen de perfil"
                sx={{ width: 120, height: 120 }} // Ajusté el tamaño del Avatar aquí
              />
            }
            title={
              <Typography variant="h4" sx={{ color: "#000000" }}>
                {user.username}
              </Typography>
            }
            subheader={
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="icon-button-file"
                type="file"
                onChange={handleImageChange}
              />
            }
            action={
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera sx={{ color: "#000000" }} />
                </IconButton>
              </label>
            }
            className="bg-transparent"
          />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Correo Electrónico"
                  value={editedEmail}
                  onChange={(e) => setEditedEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Nombre de Usuario"
                  value={editedUsername}
                  onChange={(e) => setEditedUsername(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3, backgroundColor: "#000000", color: "#FFFFFF" }}
              onClick={handleEditProfile}
            >
              Editar Perfil
            </Button>
          </CardContent>
        </Card>
      </div>
      <Dialog open={openPreview} onClose={handleClosePreview}>
        <DialogTitle>Vista Previa de la Imagen</DialogTitle>
        <DialogContent>
          <img src={imagePreview} alt="Vista previa de la imagen" style={{ maxWidth: "100%" }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePreview}>Cerrar</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
        <DialogTitle>Editar Perfil</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Correo Electrónico"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Nombre de Usuario"
            value={editedUsername}
            onChange={(e) => setEditedUsername(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog} variant="contained" color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSaveChanges} variant="contained" color="primary">
            Guardar Cambios
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ProfilePage;
