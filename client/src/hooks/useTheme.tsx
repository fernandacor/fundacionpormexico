import { useTheme } from "react-admin";
import Sun from "../svgs/Sun";
import Moon from "../svgs/moon";

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
      {theme == "light" ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeToggler;
