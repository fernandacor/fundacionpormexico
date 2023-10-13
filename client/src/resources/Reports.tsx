import {
    Create,
    Datagrid,
    Edit,
    EmailField,
    InfiniteList,
    SimpleForm,
    TextField,
    TextInput,
    DateInput
  } from "react-admin";
  import ListActions from "../components/ListActions";
  import Report from "../components/Report";
  
  export const ReportsList = () => (
    <>
      <ListActions />
      <InfiniteList actions={<></>}>
        <Report />
      </InfiniteList>
    </>
  );

  export const ReportsCreate = () => (
    <Create>
      <SimpleForm>
        <DateInput source="startDate" />
        <DateInput source="endDate" />
      </SimpleForm>
    </Create>
  );
  