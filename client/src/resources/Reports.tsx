import { Create, InfiniteList } from "react-admin";
import Report from "../components/Report";
import ReportForm from "../components/forms/ReportForm";
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

export const ReportsCreate = (props: any) => {
  return (
    <Create {...props}>
      <ReportForm />
    </Create>
  );
};
