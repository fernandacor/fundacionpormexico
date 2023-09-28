import { Datagrid, EmailField, List, TextField, Edit, SimpleForm, TextInput, Create, useNotify, useRefresh, useRedirect } from "react-admin";

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

export const UsersEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="usuario" />
      <TextInput source="nombre" />
      <TextInput source="apellidoPaterno" />
      <TextInput source="apellidoMaterno" />
      <TextInput source="correo" />
    </SimpleForm>
  </Edit>
)

export const UsersCreate =() => (
  <Create>
    <SimpleForm>
    <TextInput source="usuario" />
      <TextInput source="nombre" />
      <TextInput source="contrasena" />
      <TextInput source="apellidoPaterno" />
      <TextInput source="apellidoMaterno" />
    </SimpleForm>
  </Create>
)