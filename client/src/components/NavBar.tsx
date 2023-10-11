import { UserMenu } from "react-admin";
import ThemeToggler from "../hooks/useTheme";
import Logout from "./Logout";

const NavBar = () => {
  return (
    <nav className="flex flex-row mx-2 gap-2 h-fit items-center justify-end">
      {/* <TitlePortal /> */}
      {/* <LocalesMenuButton /> */}
      <ThemeToggler />
      <UserMenu>
        <Logout />
      </UserMenu>
    </nav>
  );
};

export default NavBar;
