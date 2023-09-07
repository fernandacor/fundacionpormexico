import React, { useState } from 'react';
import { useLogin} from 'react-admin';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = useLogin();

  const handleLogin = async () => {
    try {
      await login({ email, password });
      // El inicio de sesión fue exitoso, puedes redirigir al usuario a la página principal o realizar otras acciones necesarias.
    } catch (error) {
      // Manejar errores aquí (por ejemplo, mostrar un mensaje de error).
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
