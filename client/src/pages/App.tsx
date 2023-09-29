import { Admin, CustomRoutes, Resource } from "react-admin";
import { Route } from "react-router-dom";
import { TicketsCreate, TicketsEdit, TicketsList } from "../lists/tickets";
import {UsersList, UsersEdit, UsersCreate}from "../lists/usersList";
import authProvider from "../providers/authProvider";
import { dataProvider } from "../providers/dataProvider";
import MyLoginPage from "./MyLoginPage"

export const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider} loginPage={MyLoginPage}>
    <Resource name="users" list={UsersList} edit={UsersEdit} create={UsersCreate}/>
    <Resource
      name="tickets"
      list={TicketsList}
      edit={TicketsEdit}
      create={TicketsCreate}
    />
  </Admin>
);
