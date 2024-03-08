import "./App.css";
import Navbar from "./Components/Navbar";
import DataTable from "./Components/DataTable";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<DataTable />} />
      </Routes>
    </>
  );
}

export default App;
