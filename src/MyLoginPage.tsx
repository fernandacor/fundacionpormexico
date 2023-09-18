import * as React from 'react';
import { useState } from 'react';
import { Button, TextField, Grid, Paper, Typography } from '@mui/material';
import { useLogin } from 'react-admin';

const MaterialUILoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin();

  const handleLogin = async () => {
    try {
      await login({ email, password });
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: '100vh' }}
    >
      <Grid item xs={10} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5" gutterBottom>
            Iniciar Sesión
          </Typography>
          <TextField
            fullWidth
            label="Correo Electrónico"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            style={{ marginTop: '20px' }}
            onClick={handleLogin}
          >
            Iniciar Sesión
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MaterialUILoginPage;
