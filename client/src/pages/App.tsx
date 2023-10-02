import { Admin, Resource } from "react-admin";
import { TicketsCreate, TicketsEdit, TicketsList } from "../lists/tickets";
import { UsersCreate, UsersEdit, UsersList } from "../lists/usersList";
import authProvider from "../providers/authProvider";
import dataProvider from "../providers/dataProvider";
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
