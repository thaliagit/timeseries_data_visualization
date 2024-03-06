import React from "react";
import { Table } from "antd";

function DataTable() {
  const dataSource = [
    {
      key: "1",
      ENTSOE_DE_DAM_Price: "39.73",
      ENTSOE_GR_DAM_Price: "89",
      ENTSOE_FR_DAM_Price: "44.31",
      DateTime: "2024-02-01T00:00:00",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "ENTSOE_DE_DAM_Price",
      dataIndex: "ENTSOE_DE_DAM_Price",
      key: "ENTSOE_DE_DAM_Price",
    },
    {
      title: "ENTSOE_GR_DAM_Price",
      dataIndex: "ENTSOE_GR_DAM_Price",
      key: "ENTSOE_GR_DAM_Price",
    },
    {
      title: "ENTSOE_FR_DAM_Price",
      dataIndex: "ENTSOE_FR_DAM_Price",
      key: "ENTSOE_FR_DAM_Price",
    },
    {
      title: "DateTime",
      dataIndex: "DateTime",
      key: "DateTime",
    },
  ];

  return (
    <>
      <Table dataSource={dataSource} columns={columns} />;
    </>
  );
}

export default DataTable;
