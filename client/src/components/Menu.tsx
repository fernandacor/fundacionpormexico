import { FC } from "react";
import { Link } from "react-admin";
import Ticket from "../svgs/Ticket";
import Users from "../svgs/Users";
const userRole = localStorage.getItem("permissions");

type MenuProps = {
  className?: string;
};

const Menu: FC<MenuProps> = ({ className }) => (
  <div
    className={`${className} fixed top-0 left-0 w-[20%] h-[100vh] transition overflow-auto overscroll-auto scroll-smooth flex flex-col p-2 gap-2 shadow-xl min-h-screen bg-neutral-50 dark:bg-neutral-900 z-50`}
  >
    <div className="flex flex-row">
      <img src="./images/logo.png" alt="" className="w-9" />
      <p>Fundación por México</p>
    </div>
    <Link to={"/tickets/"} className="flex flex-row gap-3 items-center">
      <Ticket /> Tickets
    </Link>
    {userRole === "Ejecutivo" && (
      <Link to={"/users/"} className="flex flex-row gap-4 items-center">
        <Users /> Users
      </Link>
    )}
  </div>
);

export default Menu;
