import React from "react";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import Data from "./MOCK_DATA.json";
import { COLUMNS } from "./Columns";
import "./_tableAllRequest.scss";
import GlobalFilter from "./GlobalFilter";
// import ColumnFilter from "./ColumnFilter";
// import { Link } from "react-router-dom";

const PaginationTable = () => {
  const data = React.useMemo(() => Data, []);
  const columns = React.useMemo(() => COLUMNS, []);
  //   const defaultColumn = React.useMemo(() => {
  //     return {
  //       Filter: ColumnFilter,
  //     };
  //   }, []);

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
    //  rows,
    page,
    nextPage,
    previousPage,
    prepareRow,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      //   defaultColumn
    },
    usePagination,
    //  useGlobalFilter,
    tableHooksForBtn
    //  useFilters
  );

  const { globalFilter } = state;
  const { pageIndex, pageSize } = state;

  return (
    <div className="tableAllRequest">
      {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}
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
            page.map((row) => {
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
      <div>
        <span>
          Page:{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span>
          | Go to page: {"  "}
          <input
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            type="number"
            style={{ width: "50px" }}
          />
        </span>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            gotoPage(0);
          }}
          disabled={!canPreviousPage}
        >
          {"<<"}
        </button>
        <button
          onClick={() => {
            previousPage();
          }}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <button
          onClick={() => {
            nextPage();
          }}
          disabled={!canNextPage}
        >
          Next
        </button>
        <button
          onClick={() => {
            gotoPage(pageCount - 1);
          }}
          disabled={!canNextPage}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};

export default PaginationTable;
