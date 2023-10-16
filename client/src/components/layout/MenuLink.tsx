/* eslint-disable no-undef */
import { ComponentType } from "react";
import { Link, useLocation } from "react-router-dom";

type MenuLinkProps = {
  endpoint: string;
  title: string;
  isOpen: boolean;
  Icon: ComponentType;
};

const styles = {
  link: "flex flex-row gap-4 items-center p-2 px-3 pl-4 rounded-lg hover:bg-green-600 hover:text-white dark:hover:bg-green-400 dark:hover:text-black",
  activePageClasses:
    "bg-green-600 text-white shadow-lg dark:bg-green-400 dark:text-black dark:shadow-lg dark:shadow-green-400/25",
  disabledPageClasses: "text-black dark:text-white",
};

const MenuLink = ({ endpoint, title, isOpen, Icon }: MenuLinkProps) => {
  const location = useLocation();
  const pageName = location.pathname;

  return (
    <Link
      to={`/${endpoint}`}
      color="inherit"
      className={`${styles.link} ${
        pageName?.includes(endpoint)
          ? styles.activePageClasses
          : styles.disabledPageClasses
      }`}
    >
      <Icon /> {isOpen && title}
    </Link>
  );
};

export default MenuLink;
