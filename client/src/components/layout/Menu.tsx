import { ChartSvg, TicketSvg, UsersSvg } from "../Svgs";
import MenuLink from "./MenuLink";
const userRole = localStorage.getItem("permissions");

type MenuProps = {
  className?: string;
  isOpen: boolean;
};

const Menu = ({ className, isOpen }: MenuProps) => {
  const styles = {
    menu: `${className} fixed top-0 left-0 w-64 h-[100vh] transition overflow-auto overscroll-auto scroll-smooth flex flex-col py-3 gap-2 gap-y-5 shadow-xl min-h-screen bg-neutral-50 dark:bg-neutral-800 z-50`,
  };

  return (
    <div className={styles.menu}>
      <div className={`flex flex-row justify-center gap-4 mb-5`}>
        <img src="./images/logo.png" alt="" className="w-9" />
        <p className={`font-title text-lg ${!isOpen && "hidden"}`}>
          Fundación por México
        </p>
      </div>

      {(userRole === "Ejecutivo" || userRole === "Nacional") && (
        <MenuLink
          endpoint="reports"
          title="Reportes"
          isOpen={isOpen}
          Icon={ChartSvg}
        />
      )}
      {userRole === "Ejecutivo" && (
        <MenuLink
          endpoint="users"
          title="Usuarios"
          isOpen={isOpen}
          Icon={UsersSvg}
        />
      )}
      <MenuLink
        endpoint="tickets"
        title="Tickets"
        isOpen={isOpen}
        Icon={TicketSvg}
      />
    </div>
  );
};

export default Menu;
