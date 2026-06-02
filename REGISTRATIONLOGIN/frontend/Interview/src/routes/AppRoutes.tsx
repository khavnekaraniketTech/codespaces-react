import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;