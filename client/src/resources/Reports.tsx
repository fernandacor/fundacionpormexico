import { Create, DateInput, Edit, InfiniteList, SimpleForm } from "react-admin";
import Report from "../components/Report";
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

const ReportsEdit = (props: any) => (
  <Edit {...props}>
      <SimpleForm>
        <DateInput source="startDate" />
        <DateInput source="endDate" />
      </SimpleForm>
  </Edit>
);

export default ReportsEdit;