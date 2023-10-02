import { useListContext } from "react-admin";
import { Link } from "react-router-dom";

const Ticket = () => {
  const { data } = useListContext();

  return (
    <div className="grid grid-cols-3 gap-6">
      {data.map((ticket) => (
        <Link to={`/tickets/${ticket.id}`} key={ticket.id}>
          <div className="rounded-2xl shadow p-3 h-full hover:scale-105 transition flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <div className="border-gray-500 border-2 w-14 h-14 rounded-2xl flex flex-col items-center justify-center">
                <p>21</p>
                <p>Mar</p>
              </div>
              <div className="h-full flex flex-col justify-center">
                <h1>{ticket.categoria}</h1>
                <h2>{ticket.subcategoria}</h2>
              </div>
            </div>
            <p>{ticket.descripcion}</p>
            <p>{ticket.status}</p>
            <p>{ticket.usuario}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Ticket;
