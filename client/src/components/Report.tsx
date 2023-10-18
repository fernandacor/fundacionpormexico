import { Accordion, AccordionBody, AccordionHeader } from "@tremor/react";
import { useListContext } from "react-admin";
import CategoriesChart from "./charts/CategoriesChart";
import ClassroomsChart from "./charts/ClasroomsChart";
import StatusesChart from "./charts/StatusesChart";
import { Link } from 'react-router-dom';
import Pencil from "../svgs/Pencil";
import DeleteButton from "./DeleteButton";

const Report = () => {
  const { data } = useListContext();

  if (!data) {
    return null;
  }

  return (
    <div className="-mx-4 -mt-3">
      {data.map((report, index) => (
        <Accordion
          key={report.id}
          className="bg-neutral-100 dark:bg-neutral-950 border-0 mb-5 p-0"
          defaultOpen={index == 0}
        >
          <AccordionHeader className="flex justify-between items-center px-8">
            Desde {report.fechaInicio} hasta {report.fechaFin}
            <Link to={`/reports/${report.id}`} className="ml-auto"><Pencil /></Link>
          </AccordionHeader>
          <AccordionBody>
            <div className="grid md:grid-cols-5 gap-5">
              <div className="bg-neutral-50 dark:bg-neutral-900 p-5 rounded-2xl shadow-md md:col-span-4">
                <DeleteButton resource="reports" record={report.id}/>
                <h2 className="font-bold text-2xl mb-3">Estatus:</h2>
                <StatusesChart statuses={report.estatuses} />
              </div>
              <div className="bg-neutral-50 dark:bg-neutral-900 p-5 rounded-2xl shadow-md md:col-span-1 flex flex-col items-center justify-center h-full">
                <p className="font-bold text-6xl">
                  {Math.round(report.promedioDiasResolucion)}
                </p>
                <p className="font-light">días</p>
              </div>
              <div className="bg-neutral-50 dark:bg-neutral-900 p-5 rounded-2xl shadow-md md:col-span-3">
                <h2 className="font-bold text-2xl mb-3">Aulas:</h2>
                <ClassroomsChart classrooms={report.aulas} />
              </div>
              <div className="bg-neutral-50 dark:bg-neutral-900 p-5 rounded-2xl shadow-md md:col-span-2">
                <h2 className="font-bold text-2xl mb-3">Categorías:</h2>
                <CategoriesChart categories={report.categorias} />
              </div>
            </div>
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
};

export default Report;
