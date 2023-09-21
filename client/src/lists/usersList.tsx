import { Datagrid, EmailField, List, TextField } from "react-admin";

export const UsersList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="usuario" />
      <TextField source="nombre" />
      <TextField source="apellidoPaterno" />
      <TextField source="apellidoMaterno" />
      <EmailField source="correo" />
    </Datagrid>
  </List>
);
