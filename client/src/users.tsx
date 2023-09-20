import { useMediaQuery, Theme } from "@mui/material";
import { List, SimpleList, Datagrid, TextField, EmailField, UrlField, Create, SimpleForm, ReferenceInput, TextInput} from "react-admin";

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
/*
export const OsfCreate = () => (
    <Create>
        <SimpleForm>
          <TextInput source="Nombre_OSF"/>
          <TextInput source="Contacto" />
          <TextInput source="Cargo"/>
          <TextInput source="Email"/>
          <TextInput source="Direccion"/>
          <TextInput source="Telefono"/>
        </SimpleForm>
      </Create>
    );
*/