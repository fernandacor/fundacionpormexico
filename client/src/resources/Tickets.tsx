import { Create, Edit, InfiniteList } from "react-admin";
import Ticket from "../components/Ticket";
import TicketForm from "../components/forms/TicketForm";
import ListTitle from "../components/layout/ListTitle";

const TicketsList = () => {
  return (
    <>
      <ListTitle />
      <InfiniteList
        title={"Tickets"}
        component={"div"}
        emptyWhileLoading
        actions={<></>}
      >
        <Ticket />
      </InfiniteList>
    </>
  );
};

const TicketsEdit = (props: any) => {
  return (
    <Edit {...props}>
      <TicketForm />
    </Edit>
  );
};

const TicketsCreate = (props: any) => {
  return (
    <Create {...props}>
      <TicketForm />
    </Create>
  );
};

export { TicketsCreate, TicketsEdit, TicketsList };
