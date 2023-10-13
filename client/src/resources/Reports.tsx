import {
    Create,
    Datagrid,
    Edit,
    EmailField,
    InfiniteList,
    SimpleForm,
    TextField,
    TextInput,
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