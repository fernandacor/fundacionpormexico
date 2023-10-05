import { Admin, Layout, LayoutProps, Resource, usePermissions } from "react-admin";
import { useEffect, useState} from "react";
import { MyAppBar } from "../components/MyAppBar";
import authProvider from "../providers/authProvider";
import dataProvider from "../providers/dataProvider";
import i18nProvider from "../providers/i18nProvider";
import { TicketsCreate, TicketsEdit, TicketsList } from "../resources/Tickets";
import { UsersCreate, UsersEdit, UsersList } from "../resources/Users";
import LoginPage from "./Login";

const userRole = localStorage.getItem("permissions");

const myLayout = (props: LayoutProps) => (
  <Layout {...props} appBar={MyAppBar} />
);

export const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    loginPage={LoginPage}
    layout={myLayout}
    darkTheme={{ palette: { mode: "dark" } }}
  >
    {userRole === "Ejecutivo" && (
      <Resource
        name="users"
        list={UsersList}
        edit={UsersEdit}
        create={UsersCreate}
      />
    )}
    <Resource
      name="tickets"
      list={TicketsList}
      edit={TicketsEdit}
      create={TicketsCreate}
    />
  </Admin>
);