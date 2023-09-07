// in src/App.tsx
import * as React from "react";
import { Admin, Resource, ShowGuesser } from "react-admin";
import { dataProvider } from './dataProvider';
import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList } from "./users";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';
import MyLoginPage from './MyLoginPage';

export const App = () => (
  <Admin  authProvider={authProvider} loginPage={MyLoginPage} dataProvider={dataProvider} dashboard={Dashboard} >
      <Resource 
          name="posts"
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
          icon={PostIcon}
      />
      <Resource
          name="users"
          list={UserList}
          show={ShowGuesser}
          recordRepresentation="name"
          icon={UserIcon}
      />
  </Admin>
);
