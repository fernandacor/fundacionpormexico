import React, { useState } from "react";
import { useCreateContext, useEditContext } from "react-admin";

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
  {
    id: "OtroOpFun",
    name: "Otro",
    categoria_id: "Operatividad y funcionamiento",
  },
  { id: "Internet", name: "Internet", categoria_id: "Servicios" },
  {
    id: "Luz / Electricidad",
    name: "Luz / Electricidad",
    categoria_id: "Servicios",
  },
  { id: "Agua", name: "Agua", categoria_id: "Servicios" },
  { id: "Telefono", name: "Telefono", categoria_id: "Servicios" },
  { id: "OtroSer", name: "Otro", categoria_id: "Servicios" },
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
  { id: "OtroMob", name: "Otro", categoria_id: "Mobiliario" },
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
  { id: "OtroTec", name: "Otro", categoria_id: "Tecnología" },
  { id: "Pintura", name: "Pintura", categoria_id: "Limpieza" },
  { id: "Higiene", name: "Higiene", categoria_id: "Limpieza" },
  { id: "Vandalismo", name: "Vandalismo", categoria_id: "Limpieza" },
  {
    id: "Recoleccion de basura",
    name: "Recoleccion de basura",
    categoria_id: "Limpieza",
  },
  { id: "OtroLim", name: "Otro", categoria_id: "Limpieza" },
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
  { id: "OtroRH", name: "Otro", categoria_id: "Recursos Humanos" },
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
  { id: "OtroFenM", name: "Otro", categoria_id: "Fenómeno Meteorológico" },
  // ...
];

const estatus = [
  {
    id: "Por resolver",
    name: "Por resolver",
  },
  {
    id: "En progreso",
    name: "En progreso",
  },
  {
    id: "Listo",
    name: "Listo",
  },
];

const prioridades = [
  {
    id: "Critico",
    name: "Crítico",
  },
  {
    id: "Alto",
    name: "Alto",
  },
  {
    id: "Media",
    name: "Media",
  },
  {
    id: "Bajo",
    name: "Bajo",
  },
];

const CustomForm = () => {
  const [, setSelectedCategoria] = useState(null);
  const [filteredSubcategorias, setFilteredSubcategorias] =
    useState(subcategorias);
  const [showFechaResuelto, setShowFechaResuelto] = useState(false);
  const [isFolioHidden, setIsFolioHidden] = useState(true);

  const handleCategoriaChange = (newValue: any) => {
    console.log(`Categoría seleccionada:`, newValue);
    setSelectedCategoria(newValue);
    const filtered = subcategorias.filter(
      (subcategoria) => subcategoria.categoria_id === newValue.id
    );
    setFilteredSubcategorias(filtered);
    console.log(filteredSubcategorias);
  };
  const handleStatusChange = (e: any, newValue: any) => {
    if (newValue && newValue.id === "Listo") {
      setShowFechaResuelto(true);
    } else {
      setShowFechaResuelto(false);
    }
  };
  const { record, save } = useEditContext(); // Para edición
  const { save: saveCreate } = useCreateContext(); // Para creación

  const [formData, setFormData] = useState({
    fecha: record ? record.fecha || "" : "",
    categoria: record ? record.categoria || "" : "",
    subcategoria: record ? record.subcategoria || "" : "",
    status: record ? record.status || "" : estatus[0].name,
    prioridad: record ? record.prioridad || "" : prioridades[0].name,
    descripcion: record ? record.descripcion || "" : "",
    fecha_resuelto: record ? record.fecha_resuelto || "" : "",
    notas: record ? record.notas || "" : "",
    responsable: record ? record.responsable || "" : "",
    folio: record ? record.folio || "" : "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Lógica de validación
    if (!formData.categoria || !formData.subcategoria || !formData.status) {
      alert("Por favor, complete todos los campos obligatorios.");
      return;
    }

    // Guardar datos (si save está definido)
    if (save) {
      save(formData);
    }
    if (saveCreate) {
      saveCreate(formData);
    }
  };

  // Estilos que se repiten
  const className = {
    form: "max-w-xl mx-auto py-5",
    questionContainer: "mb-4",
    label: "block text-gray-700 text-sm font-bold mb-2 dark:text-white",
    requiredField: "text-red-500",
    questionField:
      "block w-full py-2 px-3 leading-tight text-gray-900 border border-gray-300 rounded-lg focus:outline-none bg-gray-50 sm:text-md focus:ring-zinc-700 focus:border-zinc-700 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-zinc-500 dark:focus:border-zinc-500 dark:focus:outline-none",
    doubleQuestions: "columns-2 gap-8",
  };

  return (
    <form className={className.form} onSubmit={handleSubmit}>
      <div className={className.questionContainer}>
        <label className={className.label} htmlFor="fecha">
          Fecha: <span className={className.requiredField}>*</span>
        </label>
        <input
          required
          className={className.questionField}
          id="fecha" // Importante no quitarlo
          type="date" // Importante no quitarlo
          value={formData.fecha} // Importante no quitarlo
          onChange={(e) => handleInputChange("fecha", e.target.value)} // Importante no quitarlo
        />
      </div>
      <div className={className.doubleQuestions}>
        <div className={className.questionContainer}>
          <label className={className.label} htmlFor="categoria">
            Categoría: <span className={className.requiredField}>*</span>
          </label>
          <select
            required
            className={className.questionField}
            id="categoria" // Importante no quitarlo
            value={formData.categoria} // Importante no quitarlo
            onChange={(e) => {
              // Importante no quitarlo
              handleInputChange("categoria", e.target.value); // Importante no quitarlo
              handleCategoriaChange({ id: e.target.value }); // Importante no quitarlo
            }}
          >
            <option value="">Selecciona una categoría</option>
            {categorias.map(
              (categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.name}
                </option>
              ) // Importante no quitarlo
            )}
          </select>
        </div>
        <div className={className.questionContainer}>
          <label className={className.label} htmlFor="subcategoria">
            Subcategoría: <span className="text-red-500">*</span>
          </label>
          <select
            required
            className={className.questionField}
            id="subcategoria" // Importante no quitarlo
            value={formData.subcategoria} // Importante no quitarlo
            placeholder="Subcategoria"
            onChange={(e) => handleInputChange("subcategoria", e.target.value)} // Importante no quitarlo
          >
            <option value="">Selecciona una subcategoría</option>
            {filteredSubcategorias.map((subcategoria) => (
              <option key={subcategoria.id} value={subcategoria.id}>
                {subcategoria.name}
              </option> // Importante no quitarlo
            ))}
          </select>
        </div>
      </div>
      <div className={className.questionContainer}>
        <label className={className.label} htmlFor="responsable">
          Responsable: <span className={className.requiredField}>*</span>
        </label>
        <input
          required
          type="text"
          className={className.questionField}
          id="responsable" // Importante no quitarlo
          placeholder="Ingrese el nombre del responsable " // Importante no quitarlo
          value={formData.responsable} // Importante no quitarlo
          onChange={(e) => handleInputChange("responsable", e.target.value)} // Importante no quitarlo
        />
      </div>
      <div className={className.doubleQuestions}>
        <div className={className.questionContainer}>
          <label className={className.label} htmlFor="status">
            Estado: <span className="text-red-500">*</span>
          </label>
          <select
            className={className.questionField}
            id="status" // Importante no quitarlo
            value={formData.status} // Importante no quitarlo
            onChange={(e) => {
              // Importante no quitarlo
              handleInputChange("status", e.target.value); // Importante no quitarlo
              handleStatusChange(e, { id: e.target.value }); // Importante no quitarlo
            }}
          >
            {estatus.map((status) => (
              <option key={status.id} value={status.id}>
                {status.name}
              </option> // Importante no quitarlo
            ))}
          </select>
        </div>
        <div className={className.questionContainer}>
          <label className={className.label} htmlFor="categoria">
            Prioridad: <span className="text-red-500">*</span>
          </label>
          <select
            className={className.questionField}
            id="prioridad" // Importante no quitarlo
            value={formData.prioridad} // Importante no quitarlo
            onChange={(e) => {
              // Importante no quitarlo
              handleInputChange("prioridad", e.target.value); // Importante no quitarlo
            }}
          >
            {prioridades.map((prioridad) => (
              <option key={prioridad.id} value={prioridad.id}>
                {prioridad.name}
              </option> // Importante no quitarlo
            ))}
          </select>
        </div>
      </div>
      {showFechaResuelto && (
        <div className={className.questionContainer}>
          <label className={className.label} htmlFor="fecha_resuelto">
            Fecha Resuelto:
          </label>
          <input
            className={className.questionField}
            id="fecha_resuelto" // Importante no quitarlo
            type="date" // Importante no quitarlo
            value={formData.fecha_resuelto} // Importante no quitarlo
            onChange={(e) =>
              handleInputChange("fecha_resuelto", e.target.value)
            } // Importante no quitarlo
          />
        </div>
      )}

      <div className={className.questionContainer}>
        <label className={className.label} htmlFor="descripcion">
          Descripción: <span className={className.requiredField}>*</span>
        </label>
        <textarea
          required
          className={className.questionField}
          id="descripcion" // Importante no quitarlo
          placeholder="Ingrese la descripción" // Importante no quitarlo
          value={formData.descripcion} // Importante no quitarlo
          onChange={(e) => handleInputChange("descripcion", e.target.value)} // Importante no quitarlo
        />
      </div>
      <div className={className.questionContainer}>
        <label className={className.label} htmlFor="descripcion">
          Notas:
        </label>
        <textarea
          className={className.questionField}
          id="notas" // Importante no quitarlo
          placeholder="Ingrese notas en caso de ser necesario" // Importante no quitarlo
          value={formData.notas} // Importante no quitarlo
          onChange={(e) => handleInputChange("notas", e.target.value)} // Importante no quitarlo
        />
      </div>
      <div className="flex items-start gap-3 mb-4 mt-5">
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            className="w-4 h-4 border accent-green-600 dark:accent-green-300 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800"
            onClick={() =>
              isFolioHidden ? setIsFolioHidden(false) : setIsFolioHidden(true)
            }
          />
        </div>
        <label className={className.label}>Incluir Folio</label>
      </div>

      <div
        className={`${className.questionContainer} ${
          isFolioHidden && "hidden"
        }`}
      >
        <label className={className.label}>Folio:</label>
        <input
          type="text"
          className={className.questionField}
          id="folio" // Importante no quitarlo
          placeholder="Ingrese el folio" // Importante no quitarlo
          value={formData.folio} // Importante no quitarlo
          onChange={(e) => handleInputChange("folio", e.target.value)} // Importante no quitarlo
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className="mb-4 dark:bg-green-500 dark:hover:bg-green-600 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};

export default CustomForm;
