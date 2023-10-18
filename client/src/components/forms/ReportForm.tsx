import React, { useState } from "react";
import { useCreateContext, useEditContext } from "react-admin";
import { formatDate } from "../../scripts";

const ReportForm = () => {
  const { record, save } = useEditContext(); // Para edición
  const { save: saveCreate } = useCreateContext(); // Para creación

  const [formData, setFormData] = useState({
    fechaInicio: record ? record.fechaInicio || "" : formatDate(),
    fechaFin: record ? record.fechaFin || "" : formatDate(),
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.fechaInicio > formData.fechaFin) {
      alert("La fecha de inicio debe ser antes de la fecha fin");
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
    questionContainer: "mb-4",
    doubleQuestions: "columns-2 gap-8",
  };

  return (
    <form
      className="max-w-xl mx-auto min-h-[70vh] flex items-center justify-center"
      onSubmit={handleSubmit}
    >
      <div>
        <div className={className.doubleQuestions}>
          <div className={className.questionContainer}>
            <label className="inputLabel" htmlFor="fechaInicio">
              Fecha inicio:
            </label>
            <input
              className="questionField"
              id="fechaInicio" // Importante no quitarlo
              type="date" // Importante no quitarlo
              value={formData.fechaInicio} // Importante no quitarlo
              onChange={(e) => handleInputChange("fechaInicio", e.target.value)} // Importante no quitarlo
            />
          </div>
          <div className={className.questionContainer}>
            <label className="inputLabel" htmlFor="fechaFin">
              Fecha fin:
            </label>
            <input
              className="questionField"
              id="fechaFin" // Importante no quitarlo
              type="date" // Importante no quitarlo
              value={formData.fechaFin} // Importante no quitarlo
              onChange={(e) => handleInputChange("fechaFin", e.target.value)} // Importante no quitarlo
            />
          </div>
        </div>

        <div className="flex items-center mt-5 justify-between">
          <button
            className="mb-4 dark:bg-green-500 dark:hover:bg-green-600 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Guardar
          </button>
        </div>
      </div>
    </form>
  );
};

export default ReportForm;
