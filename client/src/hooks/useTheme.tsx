import { useTheme } from "react-admin";

const ThemeToggler = () => {
  const [, setTheme] = useTheme("dark");
  const bodyTheme = document.getElementById("body").className;

  const changeTheme = () => {
    if (bodyTheme == "light") {
      document.getElementById("body").className = "dark";
      setTheme("dark");
    } else {
      document.getElementById("body").className = "light";
      setTheme("light");
    }
  };

  return (
    <button onClick={changeTheme}>
      {bodyTheme === "light" ? "Switch to dark theme" : "Switch to light theme"}
    </button>
  );
};

export default ThemeToggler;
