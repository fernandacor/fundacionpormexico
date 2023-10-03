import { Alert, Grid, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { useLogin } from "react-admin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showUsernameError, setShowUsernameError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const login = useLogin();

  const handleLogin = async () => {
    try {
      await login({ username, password });
    } catch (error: any) {
      console.error("Error al iniciar sesión:", error);
      if (error.message === "Usuario incorrecto") {
        setShowUsernameError(true);
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
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Iniciar sesión</button>
          {showUsernameError && (
            <Alert
              severity="error"
              onClose={() => setShowUsernameError(false)}
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

export default Login;
