import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";
import { fetchData } from "../utils/fetchData";
const LineChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = async () => {
    // fetch(
    //   "https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json"
    // )
    //   .then((response) => response.json())
    //   .then((json) => setData(json))
    //   .catch((error) => {
    //     console.log("fetch data failed", error);
    //   });

    const response = await fetchData();
    setData(response);
    console.log("THIS IS FETCHING IN THE LINE CHART");
  };

  const config = {
    data,
    xField: "DateTime",
    yField: "ENTSOE_DE_DAM_Price",
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
    // @TODO 后续会换一种动画方式
    animation: {
      appear: {
        animation: "path-in",
        duration: 5000,
      },
    },
  };

  return <Line {...config} />;
};
export default LineChart;
