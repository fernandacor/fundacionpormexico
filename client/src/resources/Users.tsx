import {
  Create,
  Datagrid,
  Edit,
  InfiniteList,
  PasswordInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";
import ListTitle from "../components/layout/ListTitle";

export const UsersList = () => (
  <>
    <ListTitle />
    <InfiniteList actions={<></>} title={"Usuarios"}>
      <Datagrid rowClick="edit" size="medium">
        <TextField source="usuario" />
        <TextField source="nombre" />
        <TextField source="apellidoPaterno" />
        <TextField source="apellidoMaterno" />
        <TextField source="aula" />
      </Datagrid>
    </InfiniteList>
  </>
);

export const UsersEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="usuario" />
      <TextInput source="nombre" />
      <TextInput source="apellidoPaterno" />
      <TextInput source="apellidoMaterno" />
      <SelectInput source="permissions" choices={permissions} />
    </SimpleForm>
  </Edit>
);

const permissions = [
  { id: "Ejecutivo", name: "Ejecutivo" },
  { id: "Coordinador", name: "Coordinador" },
  { id: "Nacional", name: "Nacional" },
];

const aulas = [
  { id: "Cuautitlán", name: "Cuautitlán" },
  { id: "Matatlán", name: "Matatlán" },
  { id: "Coordinadora Aula Ecatepec", name: "Coordinadora Aula Ecatepec" },
  { id: "Interlomas", name: "Interlomas" },
  { id: "Ludoteca Ecatepec", name: "Ludoteca Ecatepec" },
  { id: "Aula Digital Ecatepec", name: "Aula Digital Ecatepec" },
];

export const UsersCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="usuario" />
      <TextInput source="nombre" />
      <PasswordInput source="contrasena" label="Contraseña" />
      <TextInput source="apellidoPaterno" />
      <TextInput source="apellidoMaterno" />
      <SelectInput source="permissions" choices={permissions} label="Permiso" />
      <SelectInput source="aula" choices={aulas} />
    </SimpleForm>
  </Create>
);
