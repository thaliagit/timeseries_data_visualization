import React, { useState } from "react";
import { Menu } from "antd";
const ChartNavigation = ({ yAxisField }) => {
  const items = [
    {
      label: "ENTSOE_DE_DAM_Price",
      key: "ENTSOE_DE_DAM_Price",
    },
    {
      label: "ENTSOE_GR_DAM_Price",
      key: "ENTSOE_GR_DAM_Price",
    },
    {
      label: "ENTSOE_FR_DAM_Price",
      key: "ENTSOE_FR_DAM_Price",
    },
  ];

  const [current, setCurrent] = useState("ENTSOE_DE_DAM_Price");
  const onClick = (e) => {
    setCurrent(e.key);
    yAxisField(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default ChartNavigation;
