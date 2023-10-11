import { LocalesMenuButton, TitlePortal, UserMenu } from "react-admin";
import ThemeToggler from "../hooks/useTheme";
import Logout from "./Logout";

const NavBar = () => (
  <nav className="flex flex-row mx-2 gap-2 h-fit items-center">
    <TitlePortal />
    <LocalesMenuButton />
    <ThemeToggler />
    <UserMenu>
      <Logout />
    </UserMenu>
  </nav>
);

export default NavBar;
