import {
  LocalesMenuButton,
  RefreshIconButton,
  TitlePortal,
  UserMenu,
} from "react-admin";
import ThemeToggler from "../hooks/useTheme";
// import { module } from "../../tailwind.config";

const Appbar = () => (
  // <div
  //   toolbar={
  //     <>
  //     </>
  //   }
  //   color="transparent"
  //   sx={{
  //     boxShadow: "none",
  //   }}
  //   >
  <div className="flex flex-row">
    <TitlePortal />
    <LocalesMenuButton />
    <ThemeToggler />
    <RefreshIconButton />
    <UserMenu />
  </div>
);

export default Appbar;
