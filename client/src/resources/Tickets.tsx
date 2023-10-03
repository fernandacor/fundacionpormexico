import { useState } from "react";
import {
  AutocompleteInput,
  Create,
  Edit,
  InfiniteList,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";
import Ticket from "../components/Ticket";

const TicketsList = () => (
  <InfiniteList title={"Lista de tickets"} component={"div"} emptyWhileLoading>
    <Ticket />
  </InfiniteList>
);

const categorias = [
  {
    id: "Operatividad y funcionamiento",
    name: "Operatividad y funcionamiento",
  },
  { id: "Servicios", name: "Servicios" },
  { id: "Tecnología", name: "Tecnología" },
  { id: "Limpieza", name: "Limpieza" },
  { id: "Mobiliario", name: "Mobiliario" },
  { id: "Recursos Humanos", name: "Recursos Humanos" },
  { id: "Fenómeno Meteorológico", name: "Fenómeno Meteorológico" },
  // ...
];

const subcategorias = [
  {
    id: "Imagen del aula",
    name: "Imagen del aula",
    categoria_id: "Operatividad y funcionamiento",
  },
  {
    id: "Seguridad",
    name: "Seguridad",
    categoria_id: "Operatividad y funcionamiento",
  },
  {
    id: "Salidas de emergencia",
    name: "Salidas de emergencia",
    categoria_id: "Operatividad y funcionamiento",
  },
  {
    id: "Protocolos",
    name: "Protocolos",
    categoria_id: "Operatividad y funcionamiento",
  },
  { id: "Otro", name: "Otro", categoria_id: "Operatividad y funcionamiento" },
  { id: "Internet", name: "Internet", categoria_id: "Servicios" },
  {
    id: "Luz / Electricidad",
    name: "Luz / Electricidad",
    categoria_id: "Servicios",
  },
  { id: "Agua", name: "Agua", categoria_id: "Servicios" },
  { id: "Telefono", name: "Telefono", categoria_id: "Servicios" },
  { id: "Otro", name: "Otro", categoria_id: "Servicios" },
  { id: "Sillas", name: "Sillas", categoria_id: "Mobiliario" },
  { id: "Mesas", name: "Mesas", categoria_id: "Mobiliario" },
  { id: "Pizarrones", name: "Pizarrones", categoria_id: "Mobiliario" },
  { id: "Baños", name: "Baños", categoria_id: "Mobiliario" },
  { id: "Aulas", name: "Aulas", categoria_id: "Mobiliario" },
  {
    id: "Detectores de humo / extintores",
    name: "Detectores de humo / extintores",
    categoria_id: "Mobiliario",
  },
  { id: "Otro", name: "Otro", categoria_id: "Mobiliario" },
  { id: "Computadoras", name: "Computadoras", categoria_id: "Tecnología" },
  { id: "Proyectores", name: "Proyectores", categoria_id: "Tecnología" },
  { id: "Impresoras", name: "Impresoras", categoria_id: "Tecnología" },
  {
    id: "Cámaras de seguridad",
    name: "Cámaras de seguridad",
    categoria_id: "Tecnología",
  },
  {
    id: "Problemas con acceso a cuentas (usuarios/contraseñas)",
    name: "Problemas con acceso a cuentas (usuarios/contraseñas)",
    categoria_id: "Tecnología",
  },
  { id: "Otro", name: "Otro", categoria_id: "Tecnología" },
  { id: "Pintura", name: "Pintura", categoria_id: "Limpieza" },
  { id: "Higiene", name: "Higiene", categoria_id: "Limpieza" },
  { id: "Vandalismo", name: "Vandalismo", categoria_id: "Limpieza" },
  {
    id: "Recoleccion de basura",
    name: "Recoleccion de basura",
    categoria_id: "Limpieza",
  },
  { id: "Otro", name: "Otro", categoria_id: "Limpieza" },
  { id: "Violencia", name: "Violencia", categoria_id: "Recursos Humanos" },
  { id: "Acoso", name: "Acoso", categoria_id: "Recursos Humanos" },
  {
    id: "Problemas con personal",
    name: "Problemas con personal",
    categoria_id: "Recursos Humanos",
  },
  {
    id: "Emergencia médica",
    name: "Emergencia médica",
    categoria_id: "Recursos Humanos",
  },
  {
    id: "Violencia de género",
    name: "Violencia de género",
    categoria_id: "Recursos Humanos",
  },
  {
    id: "Deteccion temprana de conflictos",
    name: "Deteccion temprana de conflictos",
    categoria_id: "Recursos Humanos",
  },
  { id: "Otro", name: "Otro", categoria_id: "Recursos Humanos" },
  { id: "Temblor", name: "Temblor", categoria_id: "Fenómeno Meteorológico" },
  {
    id: "Incendio / Fuego",
    name: "Incendio / Fuego",
    categoria_id: "Fenómeno Meteorológico",
  },
  {
    id: "Inundación",
    name: "Inundación",
    categoria_id: "Fenómeno Meteorológico",
  },
  {
    id: "Ráfagas de viento (Turbonadas)",
    name: "Ráfagas de viento (Turbonadas)",
    categoria_id: "Fenómeno Meteorológico",
  },
  { id: "Otro", name: "Otro", categoria_id: "Fenómeno Meteorológico" },
  // ...
];

const status = [
  {
    id: "Por resolver", name: "Por resolver",
  },
  {
    id: "En progreso", name: "En progreso",
  },
  {
    id: "Listo", name: "Listo",
  }
];

const TicketsEdit = (props: any) => {
  const [selectedCategoria, setSelectedCategoria] = useState(null);
  const [filteredSubcategorias, setFilteredSubcategorias] =
    useState(subcategorias);

  const handleCategoriaChange = (e: any, newValue: any) => {
    setSelectedCategoria(newValue);
    const filtered = subcategorias.filter(
      (subcategoria) => subcategoria.categoria_id === newValue.id
    );
    setFilteredSubcategorias(filtered);
  };

  console.log(filteredSubcategorias);
  console.log(selectedCategoria);

  return (
    <Edit {...props}>
      <SimpleForm>
        <AutocompleteInput
          source="categoria"
          choices={categorias}
          onChange={handleCategoriaChange}
        />
        <AutocompleteInput
          source="subcategoria"
          choices={filteredSubcategorias}
        />
        <AutocompleteInput source="status" choices={status}/>
        <TextInput source="descripcion" />
      </SimpleForm>
    </Edit>
  );
};

const TicketsCreate = (props: any) => {
  const [, setSelectedCategoria] = useState(null);
  const [filteredSubcategorias, setFilteredSubcategorias] =
    useState(subcategorias);

  const handleCategoriaChange = (e: any, newValue: any) => {
    setSelectedCategoria(newValue);
    const filtered = subcategorias.filter(
      (subcategoria) => subcategoria.categoria_id === newValue.id
    );
    setFilteredSubcategorias(filtered);
  };

  return (
    <Create {...props}>
      <SimpleForm>
        <AutocompleteInput
          source="categoria"
          choices={categorias}
          onChange={handleCategoriaChange}
          validate={required("Campo requerido")}
        />
        <AutocompleteInput
          source="subcategoria"
          choices={filteredSubcategorias}
          validate={required("Campo requerido")}
        />
        <AutocompleteInput source="status" choices={status} validate={required("Campo requerido")}/>
        <TextInput source="descripcion" validate={required("Campo requerido")}/>
      </SimpleForm>
    </Create>
  );
};

export { TicketsCreate, TicketsEdit, TicketsList };
