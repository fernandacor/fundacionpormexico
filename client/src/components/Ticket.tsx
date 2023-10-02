import { useListContext } from "react-admin";
import { Link } from "react-router-dom";

const Ticket = () => {
  const { data } = useListContext();

  return (
    <div className="grid grid-cols-3 gap-6">
      {data.map((ticket) => (
        <Link to={`/tickets/${ticket.id}`} key={ticket.id}>
          <div className="rounded-2xl shadow p-3 h-full hover:scale-105 transition flex flex-col gap-2 bg-gray-100 group">
            <div className="flex flex-row gap-2">
              <div className="bg-white shadow-lg w-14 h-14 rounded-2xl flex flex-none flex-col items-center justify-center">
                <p className="font-black text-blue-700 text-xl leading-tight">
                  21
                </p>
                <p className="leading-tight">Mar</p>
              </div>
              <div className="h-full flex flex-col justify-center">
                <h1 className="uppercase font-bold">{ticket.categoria}</h1>
                <h2 className="">{ticket.subcategoria}</h2>
              </div>
            </div>
            <p className="font-light">{ticket.descripcion}</p>
            <div className="bg-blue-700 text-white rounded-2xl flex items-center justify-center p-1 hover:bg-blue-800">
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
