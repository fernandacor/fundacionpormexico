import { Create, DateInput, InfiniteList, SimpleForm } from "react-admin";
import Report from "../components/Report copy";
import ListTitle from "../components/layout/ListTitle";

export const ReportsList = () => (
  <>
    <ListTitle />
    <InfiniteList
      actions={<></>}
      title={"Reportes"}
      component={"div"}
      emptyWhileLoading
    >
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
