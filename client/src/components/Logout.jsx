import { MenuItem } from "@mui/material";
import { forwardRef } from "react";
import { useLogout } from "react-admin";

// eslint-disable-next-line react/display-name
const Logout = forwardRef((props, ref) => {
  const logout = useLogout();
  const handleClick = () => {
    localStorage.theme == "dark"
      ? (document.documentElement.className = "dark")
      : (document.documentElement.className = "light");
    setTimeout(() => {
      logout();
      window.location.reload();
    }, 1);
  };

  return (
    <MenuItem onClick={handleClick} ref={ref} {...props}>
      Cerrar sesión
    </MenuItem>
  );
});

export default Logout;
