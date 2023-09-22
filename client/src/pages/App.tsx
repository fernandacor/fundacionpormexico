import {
  Admin,
  Resource,
} from "react-admin";
import MyLoginPage from "./MyLoginPage";
import { authProvider } from "../providers/authProvider";
import { dataProvider } from "../providers/dataProvider";
import { UsersList } from "../lists/usersList";

export const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    loginPage={MyLoginPage}
  >
    <Resource name="users" list={UsersList} />
  </Admin>
);
