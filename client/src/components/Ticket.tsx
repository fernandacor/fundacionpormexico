import { useListContext } from "react-admin";
import { Link } from "react-router-dom";

const Ticket = () => {
  const { data } = useListContext();

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
      {data.map((ticket) => (
        <Link to={`/tickets/${ticket.id}`} key={ticket.id}>
          <div className="rounded-2xl shadow p-3 hover:scale-105 transition flex flex-col gap-2 bg-white dark:bg-neutral-900 group">
            <div className="flex flex-row gap-2">
              <div className="bg-green-100 shadow w-14 h-14 rounded-2xl flex flex-none flex-col items-center justify-center">
                <p className="font-black text-green-700 text-xl leading-tight">
                  21
                </p>
                <p className="leading-tight">Mar</p>
              </div>
              <div className="h-full flex flex-col justify-center overflow-hidden">
                <h1 className="uppercase font-bold tracking-tight line-clamp-2">
                  {ticket.categoria}
                </h1>
                <h2 className="truncate">{ticket.subcategoria}</h2>
              </div>
            </div>
            <p className="font-light">{ticket.descripcion}</p>
            <div className="bg-green-700 text-white rounded-2xl flex items-center justify-center p-1 hover:bg-green-800">
              {ticket.status}
            </div>
            {/* <p className="text-right text-xs font-light">{ticket.usuario}</p> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Ticket;
