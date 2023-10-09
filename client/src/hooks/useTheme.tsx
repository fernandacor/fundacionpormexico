import { useTheme, Logout } from "react-admin";

const ThemeToggler = () => {
  const [, setTheme] = useTheme();
  // const bodyTheme = document.getElementById("body").className;

  const changeTheme = () => {
    if (localStorage.theme == "light") {
      document.documentElement.className = "dark";
      localStorage.theme = "dark";
      setTheme("dark");
    } else {
      document.documentElement.className = "light";
      localStorage.theme = "light";
      setTheme("light");
    }
  };

  return (
    <button onClick={changeTheme}>
      {localStorage.theme == "light"
        ? "Switch to dark theme"
        : "Switch to light theme"}
    </button>
  );
};

export default ThemeToggler;
