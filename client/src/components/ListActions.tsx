import {
  CreateButton,
  ExportButton,
  TitlePortal,
  TopToolbar,
} from "react-admin";

const ListActions = () => (
  <div className="flex flex-row justify-between content-center items-center mb-5">
    <TitlePortal
      sx={{ fontSize: "2rem", fontWeight: 700 }}
      className="font-title"
    />

    <TopToolbar className="mb-1.5">
      {/* <SelectColumnsButton /> */}
      {/* <FilterButton /> */}
      <CreateButton />
      <ExportButton />
    </TopToolbar>
  </div>
);

export default ListActions;
