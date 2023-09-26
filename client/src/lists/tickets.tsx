import { useMediaQuery, Theme } from "@mui/material";
import { List, SimpleList, Datagrid, TextField, EmailField, UrlField, Create, SimpleForm, ReferenceInput, TextInput, Edit, SelectInput, SelectArrayInput} from "react-admin";

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

const categorias = [
    { id: '1', name: 'Operatividad y funcionamiento' },
    { id: '2', name: 'Servicios' },
    { id: '3', name: 'Tecnología' },
    { id: '4', name: 'Limpieza' },
    { id: '5', name: 'Recursos Humanos' },
    { id: '6', name: 'Fenómeno Meteorológico' },
    // ...
];

const subcategorias = [
    { id: '1', name: 'Imagen del aula', categoriaId: '1' },
    { id: '2', name: 'Seguridad', categoriaId: '1' },
    { id: '3', name: 'Salidas de emergencia', categoriaId: '1' },
    { id: '4', name: 'Protocolos', categoriaId: '1' },
    { id: '5', name: 'Otro', categoriaId: '1' },
    { id: '6', name: 'Internet', categoriaId: '2'},
    { id: '7', name: 'Luz / Electricidad', categoriaId: '2'},
    { id: '8', name: 'Agua', categoriaId: '2'},
    { id: '9', name: 'Telefono', categoriaId: '2'},
    { id: '10', name: 'Otro', categoriaId: '2'},
    { id: '11', name: 'Sillas', categoriaId: '3'},
    { id: '13', name: 'Mesas', categoriaId: '3'},
    { id: '13', name: 'Pizarrones', categoriaId: '3'},
    { id: '14', name: 'Baños', categoriaId: '3'},
    { id: '15', name: 'Aulas', categoriaId: '3'},
    { id: '16', name: 'Detectores de humo / extintores', categoriaId: '3'},
    { id: '17', name: 'Otro', categoriaId: '3'},
    { id: '18', name: 'Computadoras', categoriaId: '4'},
    { id: '19', name: 'Proyectores', categoriaId: '4'},
    { id: '20', name: 'Impresoras', categoriaId: '4'},
    { id: '21', name: 'Cámaras de seguridad', categoriaId: '4'},
    { id: '22', name: 'Problemas con acceso a cuentas (usuarios/contraseñas)', categoriaId: '4'},
    { id: '23', name: 'Otro', categoriaId: '4'},
    { id: '24', name: 'Pintura', categoriaId: '5'},
    { id: '25', name: 'Higiene', categoriaId: '5'},
    { id: '26', name: 'Vandalismo', categoriaId: '5'},
    { id: '27', name: 'Recoleccion de basura', categoriaId: '5'},
    { id: '28', name: 'Otro', categoriaId: '5'},
    { id: '29', name: 'Violencia', categoriaId: '6'},
    { id: '30', name: 'Acoso', categoriaId: '6'},
    { id: '31', name: 'Problemas con personal', categoriaId: '6'},
    { id: '32', name: 'Emergencia médica', categoriaId: '6'},
    { id: '33', name: 'Violencia de género', categoriaId: '6'},
    { id: '34', name: 'Deteccion temprana de conflictos', categoriaId: '6'},
    { id: '35', name: 'Otro', categoriaId: '6'},
    { id: '36', name: 'Temblor', categoriaId: '7'},
    { id: '37', name: 'Incendio / Fuego', categoriaId: '7'},
    { id: '38', name: 'Inundación', categoriaId: '7'},
    { id: '39', name: 'Ráfagas de viento (Turbonadas)', categoriaId: '7'},
    // ...
];

export const TicketsEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="coordinador" disabled/>
            <SelectInput source="categoria" choices={categorias}/>
            <SelectInput source="subcategoria" choices={subcategorias}/>
            <TextInput source="status" />
            <TextInput source="descripcion" />
        </SimpleForm>
    </Edit>
);

export const TicketsCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="coordinador" />
            <SelectInput source="categoria" choices={categorias}/>
            <SelectInput source="subcategoria" choices={subcategorias}/>
            <TextInput source="status" />
            <TextInput source="descripcion" />
        </SimpleForm>
    </Create>
);