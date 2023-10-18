import { useListContext } from "react-admin";
import { Link } from "react-router-dom";

const Ticket = () => {
  const { data } = useListContext();

  const className = {
    prioridad: "text-red-500 font-bold z-50",
    estatus: "text-xs rounded-full p-1 w-fit px-3 bottom-2 ",
    container:
      "relative rounded-2xl shadow p-3 hover:scale-105 hover:shadow-neutral-400 dark:hover:shadow-neutral-600 transition flex flex-col gap-7 bg-neutral-50 dark:bg-neutral-800 group",
    topContainer: "flex flex-row relative gap-2",
    titlesContainer: "flex flex-col overflow-hidden mr-5",
    prioridadContainer:
      "absolute top-3 right-3 h-fit w-fit bg- rounded-full px-3",
    bottomContainer: "flex flex-row justify-between",
  };

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
      {data.map((ticket) => (
        <Link to={`/tickets/${ticket.id}`} key={ticket.id}>
          <div className={className.container}>
            <div className={className.topContainer}>
              fecha
              <div className={className.titlesContainer}>
                <h1 className="uppercase font-bold tracking-tight text-black dark:text-white truncate mr-4">
                  {ticket.categoria}
                </h1>
                <h2 className="truncate font-bold text-sm text-zinc-600 dark:text-zinc-400">
                  {ticket.subcategoria}
                </h2>
              </div>
            </div>
            <div className={className.prioridadContainer}>
              {ticket.prioridad === "Bajo" && (
                <p className={className.prioridad}>!</p>
              )}
              {ticket.prioridad === "Media" && (
                <p className={className.prioridad}>!!</p>
              )}
              {ticket.prioridad === "Alto" && (
                <p className={className.prioridad}>!!!</p>
              )}
              {ticket.prioridad === "Critico" && (
                <p className={className.prioridad}>!!!!</p>
              )}
            </div>
            <p className="font-light text-sm">{ticket.descripcion}</p>
            <div className={className.bottomContainer}>
              {ticket.status === "Por resolver" && (
                <div
                  className={`text-orange-800 bg-orange-100 dark:bg-orange-800 dark:text-orange-50 ${className.estatus}`}
                >
                  {ticket.status}
                </div>
              )}
              {ticket.status === "En progreso" && (
                <div
                  className={`text-yellow-800 bg-yellow-200/30 dark:bg-yellow-700 dark:text-yellow-50 ${className.estatus}`}
                >
                  {ticket.status}
                </div>
              )}
              {ticket.status === "Listo" && (
                <div
                  className={`text-green-800 bg-green-100 dark:bg-green-700 dark:text-green-50 ${className.estatus}`}
                >
                  {ticket.status}
                </div>
              )}
              <p className="text-right text-xs font-light">{ticket.aula}</p>
            </div>
            {/*<button className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">
              Editar
            </button>*/}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Ticket;
