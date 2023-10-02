import { Admin, Resource } from "react-admin";
import authProvider from "../providers/authProvider";
import dataProvider from "../providers/dataProvider";
import { TicketsCreate, TicketsEdit, TicketsList } from "../resources/Tickets";
import { UsersCreate, UsersEdit, UsersList } from "../resources/Users";
import LoginPage from "./Login";

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} loginPage={LoginPage}>
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
