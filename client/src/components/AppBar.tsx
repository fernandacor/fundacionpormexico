import {
  LocalesMenuButton,
  RefreshIconButton,
  TitlePortal,
  UserMenu,
} from "react-admin";
import ThemeToggler from "../hooks/useTheme";
import Logout from "./Logout";

const Appbar = () => (
  <div className="flex flex-row">
    <TitlePortal />
    <LocalesMenuButton />
    <ThemeToggler />
    <RefreshIconButton />
    <UserMenu>
      <Logout />
    </UserMenu>
  </div>
);

export default Appbar;
