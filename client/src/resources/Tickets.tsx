import { Create, Edit, InfiniteList } from "react-admin";
import CustomForm from "../components/CustomForm";
import ListActions from "../components/ListActions";
import Ticket from "../components/Ticket";

const TicketsList = () => {
  return (
    <>
      <ListActions />
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
      <CustomForm />
    </Edit>
  );
};

const TicketsCreate = (props: any) => {
  return (
    <Create {...props}>
      <CustomForm />
    </Create>
  );
};

export { TicketsCreate, TicketsEdit, TicketsList };
