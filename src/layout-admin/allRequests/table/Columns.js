// import ColumnFilter from "./ColumnFilter";

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    // Filter: ColumnFilter,
  },
  {
    Header: "First Name",
    accessor: "first_name",
    // Filter: ColumnFilter,
  },
  {
    Header: "Last Name",
    accessor: "last_name",
    // Filter: ColumnFilter,
  },
  //   {
  //     Header: "Email",
  //     accessor: "email",
  //   },
  {
    Header: "Request Date",
    accessor: "request_date",
    // Filter: ColumnFilter,
    disableFilters: true,
  },
  //   {
  //     Header: "Country",
  //     accessor: "country",
  //   },
  {
    Header: "Phone",
    accessor: "phone",
    // Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Batch",
    accessor: "batch",
    // Filter: ColumnFilter,
    disableFilters: true,
  },
];
