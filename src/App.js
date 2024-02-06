import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<WarehousePage />} />
        <Route path="/warehouse" element={<WarehousePage />} />
        <Route path="/warehouse/:id" element={<WarehouseDetail />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/inventory/:id" element={<InventoryDetail />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
