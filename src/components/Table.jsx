import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function PaginatorBasicDemo({ data, columns, getLeadData }) {
  console.log(data);
  const renderCell = (rowData, column) => {
    return (
      <div onClick={getLeadData ? () => getLeadData(rowData) : ""}>
        {rowData[column.field]}
      </div>
    );
  };

  return (
    <DataTable
      className="rounded-lg"
      value={data}
      paginator
      rows={5}
      rowsPerPageOptions={[5, 10, 25, 50]}
      tableStyle={{
        minHeight: "30rem",
        minWidth: "50rem",
        borderRadius: "20px 20px 0px 0px",
        overflow: "hidden",
      }}
    >
      {columns.map((e) => {
        return (
          <Column
            key={e.field}
            field={e.field}
            header={e.header}
            body={(rowData) => renderCell(rowData, e)}
            style={{ cursor: "pointer" }}
          ></Column>
        );
      })}
    </DataTable>
  );
}
