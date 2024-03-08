import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";
import { fetchData } from "../utils/fetchData";
import ChartNavigation from "./ChartNavigation";
const LineChart = () => {
  const [data, setData] = useState([]);
  const [yAxisField, setyAxisField] = useState("ENTSOE_DE_DAM_Price");
  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = async () => {
    const response = await fetchData();
    setData(response);
  };

  const config = {
    data,
    xField: "DateTime",
    yField: yAxisField,
    seriesField: "name",
    yAxis: {
      label: {
        formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
      },
    },
    legend: {
      position: "top",
    },
    smooth: true,
    animation: {
      appear: {
        animation: "path-in",
        duration: 5000,
      },
    },
  };
  const handleChartCategories = (data) => {
    setyAxisField(data);
  };
  return (
    <>
      <Line {...config} />
      <ChartNavigation yAxisField={handleChartCategories} />
    </>
  );
};
export default LineChart;
