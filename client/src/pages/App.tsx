import { Admin, CustomRoutes, Resource } from "react-admin";
import { Route } from "react-router-dom";
import { TicketsCreate, TicketsEdit, TicketsList } from "../lists/tickets";
import UsersList from "../lists/usersList";
import authProvider from "../providers/authProvider";
import { dataProvider } from "../providers/dataProvider";
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
