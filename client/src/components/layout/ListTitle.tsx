import {
  CreateButton,
  TitlePortal,
  TopToolbar,
} from "react-admin";

const ListTitle = () => (
  <div className="flex flex-row justify-between content-center items-center mb-5 pl-8">
    <TitlePortal
      sx={{
        fontSize: "2.5rem",
        fontWeight: 800,
        fontFamily: " Montserrat, sans",
        // letterSpacing: "0.25rem",
      }}
    />

    <TopToolbar className="mt-1">
      {/* <SelectColumnsButton /> */}
      {/* <FilterButton /> */}
      <CreateButton />
    </TopToolbar>
  </div>
);

export default ListTitle;
