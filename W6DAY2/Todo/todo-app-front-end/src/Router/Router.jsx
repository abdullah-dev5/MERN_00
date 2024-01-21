import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import Table from "../Table";
import Navbar from "./Navbar";
import About from "../about";
const MainRoutes = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/table" element={<Table />}></Route>
        <Route path="/about" element={<About />}></Route>
     
      </Routes>
    </React.Fragment>
  );
};
export default MainRoutes;
