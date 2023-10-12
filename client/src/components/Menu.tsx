import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import Ticket from "../svgs/Ticket";
import Users from "../svgs/Users";
const userRole = localStorage.getItem("permissions");

type MenuProps = {
  className?: string;
};

const Menu: FC<MenuProps> = ({ className }) => {
  const location = useLocation();

  const pageName = location.pathname.split("/").pop();

  const styles = {
    link: "flex flex-row gap-4 items-center p-2 px-3 pl-4 rounded-lg hover:bg-green-600 hover:text-white dark:hover:bg-green-400 dark:hover:text-black",
    activePageClasses:
      "bg-green-600 text-white shadow-lg dark:bg-green-400 dark:text-black dark:shadow-lg dark:shadow-green-400/25",
    disabledPageClasses: "text-black dark:text-white",
  };

  return (
    <div
      className={`${className} fixed top-0 left-0 w-[20%] h-[100vh] transition overflow-auto overscroll-auto scroll-smooth flex flex-col py-3 px-3 gap-2 gap-y-5 shadow-xl min-h-screen bg-neutral-50 dark:bg-neutral-900 z-50`}
    >
      <div className="flex flex-row gap-4 mb-5">
        <img src="./images/logo.png" alt="" className="w-9" />
        <p className="font-title text-lg">Fundación por México</p>
      </div>

      {userRole === "Ejecutivo" && (
        <Link
          to={"/users"}
          className={`${styles.link} ${
            pageName === "users"
              ? styles.activePageClasses
              : styles.disabledPageClasses
          }`}
        >
          <Users /> Users
        </Link>
      )}

      <Link
        to={"/tickets"}
        color="inherit"
        className={`${styles.link} ${
          pageName === "tickets"
            ? styles.activePageClasses
            : styles.disabledPageClasses
        }`}
      >
        <Ticket /> Tickets
      </Link>
    </div>
  );
};

export default Menu;
