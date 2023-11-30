import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Table from "../Table";
import Navbar from "./Navbar";
const MainRoutes = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/table" element={<Table />}></Route>
     
      </Routes>
    </React.Fragment>
  );
};
export default MainRoutes;
