import { Admin, Resource } from "react-admin";
import LoginPage from "./pages/Login";
import MyLayout from "./pages/MyLayout";
import authProvider from "./providers/authProvider";
import dataProvider from "./providers/dataProvider";
import i18nProvider from "./providers/i18nProvider";
import { darkTheme, lightTheme } from "./providers/themeProvider";
import { TicketsCreate, TicketsEdit, TicketsList } from "./resources/Tickets";
import { UsersCreate, UsersEdit, UsersList } from "./resources/Users";

const userRole = localStorage.getItem("permissions");

export const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    loginPage={LoginPage}
    layout={MyLayout}
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
  </Admin>
);
