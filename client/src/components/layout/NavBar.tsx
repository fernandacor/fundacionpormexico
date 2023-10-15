import { UserMenu } from "react-admin";
import ThemeToggler from "../../hooks/useTheme";
import Logout from "./Logout";

const NavBar = () => {
  return (
    <nav className="flex flex-row px-2 gap-5 h-fit items-center justify-end sticky top-0 right-0 z-40 backdrop-blur-xl bg-neutral-100/50 dark:bg-neutral-950/50 py-1">
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
