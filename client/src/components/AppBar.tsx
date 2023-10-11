import {
  LocalesMenuButton,
  RefreshIconButton,
  TitlePortal,
  UserMenu,
} from "react-admin";
import ThemeToggler from "../hooks/useTheme";
import Logout from "./Logout";

const Appbar = () => (
  <nav className="flex flex-row mx-2 gap-2">
    <TitlePortal />
    <LocalesMenuButton />
    <ThemeToggler />
    <RefreshIconButton />
    <UserMenu>
      <Logout />
    </UserMenu>
  </nav>
);

export default Appbar;
