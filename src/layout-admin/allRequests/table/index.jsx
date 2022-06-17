import React from "react";
import { useTable, useGlobalFilter, useFilters } from "react-table";
import Data from "./MOCK_DATA.json";
import { COLUMNS } from "./Columns";
import "./_tableAllRequest.scss";
import GlobalFilter from "./GlobalFilter";
import ColumnFilter from "./ColumnFilter";
// import { Link } from "react-router-dom";

const TableAllRequest = () => {
  const data = React.useMemo(() => Data, []);
  const columns = React.useMemo(() => COLUMNS, []);
  const defaultColumn = React.useMemo(() => {
    return {
      Filter: ColumnFilter,
    };
  }, []);

  const tableHooksForBtn = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        id: "Approve",
        Header: "Approve",
        Cell: ({ row }) => (
          <button
            onClick={() =>
              alert("Approve " + row.values.id + "  " + row.values.first_name)
            }
          >
            Approve
          </button>
        ),
      },
      {
        id: "Delete",
        Header: "Delete",
        Cell: ({ row }) => (
          <button onClick={() => alert("Delete" + row.values.first_name)}>
            Delete
          </button>
        ),
      },
    ]);
  };

  // const tableInstance = useTable({ columns, data }, tableHooksForBtn);

  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   tableInstance;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    { columns, data, defaultColumn },
    useGlobalFilter,
    tableHooksForBtn,
    useFilters
  );

  const { globalFilter } = state;

  return (
    <div className="tableAllRequest">
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table id="customers" {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render("Header")
                      }
                      <div>
                        {column.canFilter ? column.render("Filter") : null}
                      </div>
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default TableAllRequest;
