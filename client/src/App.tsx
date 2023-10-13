import { Admin, Resource, ListGuesser } from "react-admin";
import Layout from "./pages/Layout";
import LoginPage from "./pages/Login";
import authProvider from "./providers/authProvider";
import dataProvider from "./providers/dataProvider";
import i18nProvider from "./providers/i18nProvider";
import { darkTheme, lightTheme } from "./providers/themeProvider";
import { TicketsCreate, TicketsEdit, TicketsList } from "./resources/Tickets";
import { UsersCreate, UsersEdit, UsersList } from "./resources/Users";
import {ReportsList} from "./resources/Reports";

const userRole = localStorage.getItem("permissions");

export const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    loginPage={LoginPage}
    layout={Layout}
    theme={lightTheme}
    darkTheme={darkTheme}
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
    <Resource
      name="reports"
      list={ReportsList}
    />
  </Admin>
);
