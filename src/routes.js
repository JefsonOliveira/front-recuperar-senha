import React from "react";
import { Route, Routes } from 'react-router-dom';
import Confirm from "./pages/Confirm";
import Login from "./pages/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<Login/>} />
      <Route path="/confirm" exact element={<Confirm/>} />
    </Routes>
  );
};

export default AppRoutes;