import { useTheme } from "react-admin";

const ThemeToggler = () => {
  const [theme, setTheme] = useTheme();
  // const bodyTheme = document.getElementById("body").className;

  const changeTheme = () => {
    if (theme == "light") {
      document.documentElement.className = "dark";
      setTheme("dark");
    } else {
      document.documentElement.className = "light";
      setTheme("light");
    }
  };

  return (
    <button onClick={changeTheme}>
      {theme == "light" ? "Switch to dark theme" : "Switch to light theme"}
    </button>
  );
};

export default ThemeToggler;
