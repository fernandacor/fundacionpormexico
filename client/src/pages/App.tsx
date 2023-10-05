import { Admin, Layout, LayoutProps, Resource } from "react-admin";
import { MyAppBar } from "../components/MyAppBar";
import authProvider from "../providers/authProvider";
import dataProvider from "../providers/dataProvider";
import i18nProvider from "../providers/i18nProvider";
import { TicketsCreate, TicketsEdit, TicketsList } from "../resources/Tickets";
import { UsersCreate, UsersEdit, UsersList } from "../resources/Users";
import LoginPage from "./Login";

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
      {permissions => (
          <>
              {/* Restrict access to the edit view to admin only */}
              <Resource
                      name="tickets"
                      list={TicketsList}
                      edit={TicketsEdit}
                      create={TicketsCreate}
                    />
              {/* Only include the categories resource for admin users */}
              {permissions === 'Ejecutivo'
                  ? <Resource
                  name="users"
                  list={UsersList}
                  edit={UsersEdit}
                  create={UsersCreate}
                />
                  : null}
          </>
      )}
  </Admin>
);
