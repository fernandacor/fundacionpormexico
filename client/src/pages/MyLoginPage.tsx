import { Button, Grid, Paper, TextField, Typography, Alert } from "@mui/material";
import { useState } from "react";
import { useLogin } from "react-admin";

const MaterialUILoginPage = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [showusernameError, setShowusernameError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const login = useLogin();

  const handleLogin = async () => {
    try {
      await login({ username, password });
    } catch (error: any) {
      console.error("Error al iniciar sesión:", error);
      if (error.message === "Usuario incorrecto") {
        setShowusernameError(true);
      } else if (error.message === "Contraseña incorrecta") {
        setShowPasswordError(true);
      }
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={10} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h5" gutterBottom>
            Iniciar Sesión
          </Typography>
          <TextField
            fullWidth
            label="Correo Electrónico"
            variant="outlined"
            margin="normal"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          <TextField
            fullWidth
            label="Contraseña"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "20px" }}
            onClick={handleLogin}
          >
            Iniciar Sesión
          </Button>
          {showusernameError && (
            <Alert
              severity="error"
              onClose={() => setShowusernameError(false)}
              style={{ marginTop: "20px" }}
            >
              Error en el usuario
            </Alert>
          )}
          {showPasswordError && (
            <Alert
              severity="error"
              onClose={() => setShowPasswordError(false)}
              style={{ marginTop: "20px" }}
            >
              Error en la contraseña
            </Alert>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MaterialUILoginPage;
