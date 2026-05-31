import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import Users from "../pages/dashboard/Users";
import Cards from "../pages/dashboard/Cards";
import Shares from "../pages/dashboard/Shares";
import Reports from "../pages/dashboard/Reports";
import Settings from "../pages/dashboard/Settings";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/shares" element={<Shares />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;