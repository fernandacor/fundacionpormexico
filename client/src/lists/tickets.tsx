import { useMediaQuery, Theme } from "@mui/material";
import { useState } from 'react';
import { List, SimpleList, Datagrid, TextField, EmailField, UrlField, Create, SimpleForm, ReferenceInput, TextInput, Edit, SelectInput, SelectArrayInput, AutocompleteInput, useCreateContext, useEditContext , useGetList, useGetOne} from "react-admin";

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
    { id: 'Operatividad y funcionamiento', name: 'Operatividad y funcionamiento'},
    { id: 'Servicios', name: 'Servicios' },
    { id: 'Tecnología', name: 'Tecnología' },
    { id: 'Limpieza', name: 'Limpieza' },
    { id: 'Recursos Humanos', name: 'Recursos Humanos' },
    { id: 'Fenómeno Meteorológico', name: 'Fenómeno Meteorológico' },
    // ...
];

const subcategorias = [
    { id: 'Imagen del aula', name: 'Imagen del aula', categoriaId: '1' },
    { id: 'Seguridad', name: 'Seguridad', categoriaId: '1' },
    { id: 'Salidas de emergencia', name: 'Salidas de emergencia', categoriaId: '1' },
    { id: 'Protocolos', name: 'Protocolos', categoriaId: '1' },
    { id: 'Otro', name: 'Otro', categoriaId: '1' },
    { id: 'Internet', name: 'Internet', categoriaId: '2'},
    { id: 'Luz / Electricidad', name: 'Luz / Electricidad', categoriaId: '2'},
    { id: 'Agua', name: 'Agua', categoriaId: '2'},
    { id: 'Telefono', name: 'Telefono', categoriaId: '2'},
    { id: 'Otro', name: 'Otro', categoriaId: '2'},
    { id: 'Sillas', name: 'Sillas', categoriaId: '3'},
    { id: 'Mesas', name: 'Mesas', categoriaId: '3'},
    { id: 'Pizarrones', name: 'Pizarrones', categoriaId: '3'},
    { id: 'Baños', name: 'Baños', categoriaId: '3'},
    { id: 'Aulas', name: 'Aulas', categoriaId: '3'},
    { id: 'Detectores de humo / extintores', name: 'Detectores de humo / extintores', categoriaId: '3'},
    { id: 'Otro', name: 'Otro', categoriaId: '3'},
    { id: 'Computadoras', name: 'Computadoras', categoriaId: '4'},
    { id: 'Proyectores', name: 'Proyectores', categoriaId: '4'},
    { id: 'Impresoras', name: 'Impresoras', categoriaId: '4'},
    { id: 'Cámaras de seguridad', name: 'Cámaras de seguridad', categoriaId: '4'},
    { id: 'Problemas con acceso a cuentas (usuarios/contraseñas)', name: 'Problemas con acceso a cuentas (usuarios/contraseñas)', categoriaId: '4'},
    { id: 'Otro', name: 'Otro', categoriaId: '4'},
    { id: 'Pintura', name: 'Pintura', categoriaId: '5'},
    { id: 'Higiene', name: 'Higiene', categoriaId: '5'},
    { id: 'Vandalismo', name: 'Vandalismo', categoriaId: '5'},
    { id: 'Recoleccion de basura', name: 'Recoleccion de basura', categoriaId: '5'},
    { id: 'Otro', name: 'Otro', categoriaId: '5'},
    { id: 'Violencia', name: 'Violencia', categoriaId: '6'},
    { id: 'Acoso', name: 'Acoso', categoriaId: '6'},
    { id: 'Problemas con personal', name: 'Problemas con personal', categoriaId: '6'},
    { id: 'Emergencia médica', name: 'Emergencia médica', categoriaId: '6'},
    { id: 'Violencia de género', name: 'Violencia de género', categoriaId: '6'},
    { id: 'Deteccion temprana de conflictos', name: 'Deteccion temprana de conflictos', categoriaId: '6'},
    { id: 'Otro', name: 'Otro', categoriaId: '6'},
    { id: 'Temblor', name: 'Temblor', categoriaId: '7'},
    { id: 'Incendio / Fuego', name: 'Incendio / Fuego', categoriaId: '7'},
    { id: 'Inundación', name: 'Inundación', categoriaId: '7'},
    { id: 'Ráfagas de viento (Turbonadas)', name: 'Ráfagas de viento (Turbonadas)', categoriaId: '7'},
    // ...
];

export const TicketsEdit = (props: any) => (
    <Edit>
        <SimpleForm>
            <TextInput source="coordinador" disabled/>
            <SelectInput source="categoria" choices={categorias} optionText="name"/>
            <SelectInput source="subcategoria" choices={subcategorias} optionText="name"/>
            <TextInput source="status" />
            <TextInput source="descripcion" />
        </SimpleForm>
    </Edit>
);

export const TicketsCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="coordinador" />
            <SelectInput source="categoria" choices={categorias} optionText="name"/>
            <SelectInput source="subcategoria" choices={subcategorias} optionText="name"/>
            <TextInput source="status" />
            <TextInput source="descripcion" />
        </SimpleForm>
    </Create>
);