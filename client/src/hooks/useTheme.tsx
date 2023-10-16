import { useTheme } from "react-admin";
import Moon from "../svgs/Moon";
import Sun from "../svgs/Sun";

const ThemeToggler = () => {
  const [theme, setTheme] = useTheme();

  const changeTheme = () => {
    if (theme == "light") {
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
      {theme == "light" ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeToggler;
