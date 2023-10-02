import { Admin, Resource } from "react-admin";
import authProvider from "../providers/authProvider";
import dataProvider from "../providers/dataProvider";
import { TicketsCreate, TicketsEdit, TicketsList } from "../resources/Tickets";
import { UsersCreate, UsersEdit, UsersList } from "../resources/Users";
import LoginPage from "./Login";

export const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    loginPage={LoginPage}
  >
    <Resource
      name="users"
      list={UsersList}
      edit={UsersEdit}
      create={UsersCreate}
    />
    <Resource
      name="tickets"
      list={TicketsList}
      edit={TicketsEdit}
      create={TicketsCreate}
    />
  </Admin>
);
