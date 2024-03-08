import React, { useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
const items = [
  {
    label: <Link to={"/"}>Data Table</Link>,
    key: "table",
  },
  {
    label: <Link to={"/lineChart"}>Line Chart</Link>,
    key: "lineChart",
  },
];
const Navbar = () => {
  const [current, setCurrent] = useState("table");
  const onClick = (e) => {
    setCurrent(e.key);
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
export default Navbar;
