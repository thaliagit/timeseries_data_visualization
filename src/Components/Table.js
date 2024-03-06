import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { fetchData } from "../utils/fetchData";
function DataTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchDataAndSetData() {
      const fetchedData = await fetchData();
      setData(fetchedData);
    }
    fetchDataAndSetData();
  }, []);

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
      <Table rowKey={(data) => data.id} dataSource={data} columns={columns} />;
    </>
  );
}

export default DataTable;
