import { useTheme } from "react-admin";

const ThemeToggler = () => {
  const [theme, setTheme] = useTheme();

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    </button>
  );
};

export default ThemeToggler;
