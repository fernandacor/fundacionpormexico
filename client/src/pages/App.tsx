import {
  Admin,
  EditGuesser,
  ListGuesser,
  Resource,
  ShowGuesser,
  CustomRoutes,
} from "react-admin";
import { Route } from "react-router-dom";
import { dataProvider } from "../providers/dataProvider";
import MyLoginPage from "./MyLoginPage";
import authProvider from "../providers/authProvider";
import { UsersList } from "../lists/users";
import { TicketsCreate, TicketsEdit, TicketsList } from "../lists/tickets";
import Registrarse from "./registrarse";

export const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="users" list={UsersList} />
    <Resource
      name="tickets"
      list={TicketsList}
      edit={TicketsEdit}
      create={TicketsCreate}
    />
    <CustomRoutes>
      <Route path="/registrarse" element={<Registrarse />} />
    </CustomRoutes>
  </Admin>
);
