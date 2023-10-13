import React, { useState } from 'react';
import { useEditContext, useCreateContext } from 'react-admin';

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
    { id: "OtroOpFun", name: "Otro", categoria_id: "Operatividad y funcionamiento" },
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
    {
      id: "Critico",
      name: "Critico",
    },
  ];
  

const CustomForm = () => {
    const [selectedCategoria, setSelectedCategoria] = useState(null);
    const [filteredSubcategorias, setFilteredSubcategorias] = useState(subcategorias);
    const [showFechaResuelto, setShowFechaResuelto] = useState(false);
  
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
      fecha: record ? record.fecha || '' : '',
      categoria: record ? record.categoria || '' : '',
      subcategoria: record ? record.subcategoria || '' : '',
      status: record ? record.status || '' : '',
      prioridad: record ? record.prioridad || '' : '',
      descripcion: record ? record.descripcion || '' : '',
      fecha_resuelto: record ? record.fecha_resuelto || '' : '',
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
        alert('Por favor, complete todos los campos obligatorios.');
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
  
    return (
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fecha">
            Fecha:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fecha" // Importante no quitarlo
            type="date" // Importante no quitarlo
            value={formData.fecha} // Importante no quitarlo
            onChange={(e) => handleInputChange('fecha', e.target.value)} // Importante no quitarlo
          />
        </div>
  
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoria">
            Categoría:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="categoria" // Importante no quitarlo
            value={formData.categoria} // Importante no quitarlo
            onChange={(e) => { // Importante no quitarlo
              handleInputChange('categoria', e.target.value); // Importante no quitarlo
              handleCategoriaChange({ id: e.target.value }); // Importante no quitarlo
            }}
          >
            <option value="">Selecciona una categoría</option>
            {categorias.map(categoria => ( // Importante no quitarlo
              <option key={categoria.id} value={categoria.id}>{categoria.name}</option> // Importante no quitarlo
            ))}
          </select>
        </div>
  
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subcategoria">
            Subcategoría:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="subcategoria" // Importante no quitarlo
            value={formData.subcategoria}// Importante no quitarlo
            onChange={(e) => handleInputChange('subcategoria', e.target.value)} // Importante no quitarlo
          >
            <option value="">Selecciona una subcategoría</option>
            {filteredSubcategorias.map(subcategoria => ( // Importante no quitarlo
              <option key={subcategoria.id} value={subcategoria.id}>{subcategoria.name}</option> // Importante no quitarlo
            ))}
          </select>
        </div>
  
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
            Estado:
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="status" // Importante no quitarlo
            value={formData.status} // Importante no quitarlo
            onChange={(e) => { // Importante no quitarlo
              handleInputChange('status', e.target.value); // Importante no quitarlo
              handleStatusChange(e, { id: e.target.value }); // Importante no quitarlo
            }}
          >
            {estatus.map(status => (
              <option key={status.id} value={status.id}>{status.name}</option> // Importante no quitarlo
            ))}
          </select>
        </div>
  
        {showFechaResuelto && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fecha_resuelto">
              Fecha Resuelto:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fecha_resuelto" // Importante no quitarlo
              type="date" // Importante no quitarlo
              value={formData.fecha_resuelto} // Importante no quitarlo
              onChange={(e) => handleInputChange('fecha_resuelto', e.target.value)} // Importante no quitarlo
            />
          </div>
        )}
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">
          Descripción:
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="descripcion" // Importante no quitarlo
          placeholder="Ingrese la descripción"  // Importante no quitarlo
          value={formData.descripcion}  // Importante no quitarlo
          onChange={(e) => handleInputChange('descripcion', e.target.value)} // Importante no quitarlo
        />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Guardar
          </button>
        </div>
      </form>
    );
  };

export default CustomForm;
