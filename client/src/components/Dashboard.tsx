import CategoriesChart from "./charts/CategoriesChart";
import ClassroomsChart from "./charts/ClasroomsChart";
import StatusesChart from "./charts/StatusesChart";

const data = {
  promedioDiasResolucion: 7.333333333333333,
  categorias: [
    {
      name: "Recursos humanos",
      value: 2,
    },
    {
      name: "Limpieza",
      value: 4,
    },
    {
      name: "Mobiliario",
      value: 2,
    },
    {
      name: "Servicios",
      value: 2,
    },
    {
      name: "Fenómenos meteorológicos",
      value: 2,
    },
    {
      name: "Tecnología",
      value: 4,
    },
    {
      name: "Operatividad y funcionamiento",
      value: 5,
    },
  ],
  aulas: [
    {
      name: "chamito813",
      value: 3,
    },
    {
      name: "fernandacor",
      value: 2,
    },
    {
      name: "sebas21mg",
      value: 16,
    },
  ],
  estatuses: [
    {
      name: "Listos",
      value: 4,
    },
    {
      name: "En progreso",
      value: 8,
    },
    {
      name: "Por resolver",
      value: 9,
    },
  ],
  id: 1,
};

const Dashboard = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="bg-neutral-50 dark:bg-neutral-900 p-5 rounded-2xl shadow-md">
        <ClassroomsChart classrooms={data.aulas} />
      </div>
      <div className="bg-neutral-50 dark:bg-neutral-900 p-5 rounded-2xl shadow-md">
        <CategoriesChart categories={data.categorias} />
      </div>
      <div className="bg-neutral-50 dark:bg-neutral-900 p-5 rounded-2xl shadow-md">
        <StatusesChart statuses={data.estatuses} />
      </div>
      <div className="bg-neutral-50 dark:bg-neutral-900 p-5 rounded-2xl shadow-md">
        <p>
          Promedio de días de resolución:{" "}
          {Math.round(data.promedioDiasResolucion)}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
