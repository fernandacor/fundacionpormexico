import { Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { useLogin, useTheme } from "react-admin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showUsernameError, setShowUsernameError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const login = useLogin();

  const [, setTheme] = useTheme();
  useEffect(() => {
    document.documentElement.className == "dark"
      ? setTheme("dark")
      : setTheme("light");
  }, [setTheme]);

  const handleLogin = async () => {
    try {
      await login({ username, password });
      setTimeout(() => {
        window.location.reload();
      }, 100);
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
    <form className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100  dark:bg-zinc-700 font-sans">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl flex w-2/3 max-w-4xl">
          <div className="w-10/15 p-5">
            <div className="py-10">
              <img src="/images/logo.png" alt="logo"></img>
            </div>
            <input
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className=" text-black dark:text-white rounded-md bg-gray-200/50 mb-5 placeholder:text-slate-400 block w-full border border-slate-300 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 text-base"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" text-black dark:text-white rounded-md bg-gray-200/50 mb-5 placeholder:text-slate-400 block w-full border border-slate-300 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 text-base"
            />
            <button
              onClick={handleLogin}
              className="bg-green-600 text-white p-2 shadow-lg rounded-lg w-64 mt-5 hover:scale-[103%] focus:outline-none focus:outline-green-500 dark:text-black dark:bg-green-400 dark:hover:shadow-green-400/30"
            >
              Iniciar sesión
            </button>
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
          </div>

          <div className="w-4/15 bg-gradient-to-b from-lime-500 to-green-600 text-white rounded-r-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-8 mt-8">
              ¡Bienvenido de vuelta!
            </h2>
            <p className="mb-2">
              Por favor ingrese el usuario y contraseña proporcionada por el
              administrador
            </p>
          </div>
        </div>
      </main>
    </form>
  );
};

export default Login;
