import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const Table = ({ events }) => {
  const [search, setSearch] = useState("");
  const [filterEvents, setFilterEvents] = useState(events);

  const columns = [
    {
      name: "Image",
      selector: (row) => <img src={row.img} alt="" width={180} height={80} />,
    },
    //  {
    //    name: "Date",
    //    selector: (row) => row.date,
    //    sortable: true,
    //  },
    //  {
    //    name: "Month",
    //    selector: (row) => row.month,
    //  },
    //  {
    //    name: "Year",
    //    selector: (row) => row.year,
    //  },
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Date",
      selector: (row) => row.particular_date,
      // sortable: true,
    },
    //  {
    //    name: "Desc",
    //    selector: (row) => row.desc,
    //  },
    //  {
    //    name: "Media",
    //    selector: (row) => row.media,
    //  },
    //  {
    //    name: "Organized By",
    //    selector: (row) => row.organized_by,
    //  },
    {
      name: "Action",
      cell: (row) => (
        <>
          <button
            onClick={() => {
              alert(row.title);
            }}
          >
            Edit
          </button>
          <button>Delete</button>
        </>
      ),
    },
  ];

  //  Internally, customStyles will deep merges your customStyles with the default styling.
  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row height
      },
    },
    headCells: {
      style: {
        width: "180px",
        borderBottom: "1px solid #05BE71",
        display: "flex",
        justifyContent: "center",
        background: "#05BE71",
        color: "#fff",
      },
    },
    cells: {
      style: {
        width: "180px",
        borderBottom: "1px solid #05BE71",
        display: "flex",
        justifyContent: "center",
      },
    },
  };

  useEffect(() => {
    const result = events.filter((evt) => {
      return (
        evt.title.toLowerCase().match(search.toLowerCase()) ||
        evt.particular_date.toLowerCase().match(search.toLowerCase())
      );
    });
    setFilterEvents(result);
  }, [events, search]);
  return (
    <DataTable
      title="All Events"
      columns={columns}
      data={filterEvents}
      pagination
      // fixedHeader
      highlightOnHover
      subHeader
      subHeaderComponent={
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          placeholder="Search here..."
        />
      }
      // subHeaderAlign="center"
      customStyles={customStyles}
    />
  );
};

export default Table;
