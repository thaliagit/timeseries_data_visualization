import "./App.css";
import Navbar from "./Components/Navbar";
import DataTable from "./Components/DataTable";
import { Routes, Route } from "react-router";
import LineChart from "./Components/LineChart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<DataTable />} />
        <Route path="/lineChart" element={<LineChart />} />
      </Routes>
    </>
  );
}

export default App;
