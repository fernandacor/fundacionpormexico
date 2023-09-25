import { useMediaQuery, Theme } from "@mui/material";
import { List, SimpleList, Datagrid, TextField, EmailField, UrlField, Create, SimpleForm, ReferenceInput, TextInput, Edit} from "react-admin";

export const TicketsList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="coordinador" />
            <TextField source="categoria" />
            <TextField source="subcategoria" />
            <TextField source="status" />
        </Datagrid>
    </List>
);

export const TicketsEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="coordinador" disabled/>
            <TextInput source="categoria" />
            <TextInput source="subcategoria" />
            <TextInput source="status" />
            <TextInput source="descripcion" />
        </SimpleForm>
    </Edit>
);

export const TicketsCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="coordinador" />
            <TextInput source="categoria" />
            <TextInput source="subcategoria" />
            <TextInput source="status" />
            <TextInput source="descripcion" />
        </SimpleForm>
    </Create>
);