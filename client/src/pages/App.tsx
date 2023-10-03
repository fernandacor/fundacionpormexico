import { Admin, Resource, Layout } from "react-admin";
import authProvider from "../providers/authProvider";
import dataProvider from "../providers/dataProvider";
import { TicketsCreate, TicketsEdit, TicketsList } from "../resources/Tickets";
import { UsersCreate, UsersEdit, UsersList } from "../resources/Users";
import LoginPage from "./Login";
import { MyAppBar } from "../components/MyAppBar";

import { LayoutProps } from 'react-admin';
const myLayout = (props: LayoutProps) => <Layout {...props} appBar={MyAppBar} />;

export const App = () => (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      loginPage={LoginPage}
      layout={myLayout}
      darkTheme={{ palette: { mode: 'dark' } }}
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