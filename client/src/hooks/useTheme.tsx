import { useTheme } from "react-admin";
import { MoonSvg, SunSvg } from "../components/Svgs";

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
      {theme == "light" ? <MoonSvg /> : <SunSvg />}
    </button>
  );
};

export default ThemeToggler;
