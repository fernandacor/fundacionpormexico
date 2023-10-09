import { Link } from "react-admin";

const Menu = () => (
  <div className="flex flex-col p-2 gap-2 shadow-lg min-h-screen bg-blue-100">
    <div className="flex flex-row">
      <img src="./images/logo.png" alt="" className="w-9" />
      <p>Fundación por México</p>
    </div>
    <Link to={"/tickets/"}>Tickets</Link>
    <Link to={"/users/"}>Users</Link>
  </div>
);

export default Menu;
