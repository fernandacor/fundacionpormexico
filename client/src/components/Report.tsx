import { useListContext } from "react-admin";
import { Link } from "react-router-dom";

const Report = () => {
  const { data } = useListContext();

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
      {data.map((report) => (
        <Link to={`/tickets/${report.id}`} key={report.id}>
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-bold mb-2">Reporte ID: {report.id}</h2>
            <div>
              <h3 className="text-xl font-bold mb-2">Promedio de días de resolución</h3>
              <p>{report.promedioDiasResolucion.toFixed(2)}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2">Categorías</h3>
              {report.categorias.map((categoria: any) => (
                <div key={categoria.categoria}>
                  {categoria.categoria}: {categoria.tickets}
                </div>
              ))}
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2">Aulas</h3>
              {report.aulas.map((aula: any) => (
                <div key={aula.aula}>
                  {aula.aula}: {aula.tickets}
                </div>
              ))}
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2">Estatuses</h3>
              {report.estatuses.map((estatus: any) => (
                <div key={estatus.estatus}>
                  {estatus.estatus}: {estatus.tickets}
                </div>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Report;
