import { Create, DateInput, InfiniteList, SimpleForm } from "react-admin";
import Report from "../components/Report";
import ListActions from "../components/layout/ListActions";

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
