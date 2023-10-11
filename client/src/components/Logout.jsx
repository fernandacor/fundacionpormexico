import { MenuItem } from "@mui/material";
import { forwardRef } from "react";
import { useLogout } from "react-admin";

// eslint-disable-next-line react/display-name
const Logout = forwardRef((props, ref) => {
  const logout = useLogout();
  const handleClick = () => {
    logout();
    localStorage.theme === "dark"
      ? (document.documentElement.className = "dark")
      : (document.documentElement.className = "light");
  };

  return (
    <MenuItem onClick={handleClick} ref={ref} {...props}>
      Logout
    </MenuItem>
  );
});

export default Logout;
