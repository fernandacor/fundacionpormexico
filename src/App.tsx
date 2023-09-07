// in src/App.tsx
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Admin, Resource, ShowGuesser, useDelete, useRecordContext } from "react-admin";
import { Dashboard } from './Dashboard';
import MyLoginPage from './MyLoginPage';
import { authProvider } from './authProvider';
import { dataProvider } from './dataProvider';
import { PostCreate, PostEdit, PostList } from "./posts";
import { darkTheme, lightTheme } from "./theme";
import { UserList } from "./users";

const DeleteButton = () => {
  const record = useRecordContext();
  const [deleteOne, { isLoading, error }] = useDelete(
      'likes',
      { id: record.id, previousData: record }
  );
  const handleClick = () => {
      deleteOne();
  }
  if (error) { return <p>ERROR</p>; }
  return <button disabled={isLoading} onClick={handleClick}>Delete</button>;
};

export const App = () => (
  <Admin  authProvider={authProvider} loginPage={MyLoginPage} dataProvider={dataProvider} dashboard={Dashboard} theme={lightTheme} darkTheme={darkTheme} >
      <DeleteButton/>
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