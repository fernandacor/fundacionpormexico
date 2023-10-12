import { useState } from "react";
import {
  AutocompleteInput,
  Create,
  DateInput,
  Edit,
  InfiniteList,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";
import Ticket from "../components/Ticket";
import CustomForm from "../components/CustomForm";

const TicketsList = () => {
  return (
    <InfiniteList
      title={"Lista de tickets"}
      component={"div"}
      emptyWhileLoading
      sx={{ paddingRight: "1rem", paddingLeft: "1rem" }}
    >
      <Ticket />
    </InfiniteList>
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
