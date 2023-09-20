import {
  Admin,
  EditGuesser,
  ListGuesser,
  Resource,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import MyLoginPage from "./MyLoginPage";
import { authProvider } from './authProvider';
import { UsersList } from "./users";

export const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider} loginPage={MyLoginPage}>
    <Resource name="users" list={UsersList} />
  </Admin>
);
