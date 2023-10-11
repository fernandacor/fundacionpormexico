import {
  Create,
  Datagrid,
  Edit,
  EmailField,
  InfiniteList,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export const UsersList = () => (
  <InfiniteList>
    <Datagrid rowClick="edit" size="medium">
      <TextField source="usuario" />
      <TextField source="nombre" />
      <TextField source="apellidoPaterno" />
      <TextField source="apellidoMaterno" />
      <EmailField source="correo" />
    </Datagrid>
  </InfiniteList>
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
);

export const UsersCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="usuario" />
      <TextInput source="nombre" />
      <TextInput source="contrasena" />
      <TextInput source="apellidoPaterno" />
      <TextInput source="apellidoMaterno" />
    </SimpleForm>
  </Create>
);
