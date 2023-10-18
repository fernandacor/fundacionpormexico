import { Create, Edit, InfiniteList, FilterButton, FilterForm, Filter, TextInput } from "react-admin";
import CustomForm from "../components/CustomForm";
import Ticket from "../components/Ticket";
import ListTitle from "../components/layout/ListTitle";

const TicketsList = () => {
  return (
    <>
      <ListTitle />
      <InfiniteList
        title={"Tickets"}
        component={"div"}
        emptyWhileLoading
        actions={<FilterButton /> /*Render FilterButton*/}
        filters = {postFilters}
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

// const FilterTickets = (props: any) => (
//   <FilterForm {...props}>
//     <TextInput label="Title" source="title" />
//     <TextInput label="Description" source="description" />
//   </FilterForm>
// );

export const postFilters = [
  <TextInput label="Title" source="title" />,
  <TextInput label="Description" source="description" />,
];

export { TicketsCreate, TicketsEdit, TicketsList };
