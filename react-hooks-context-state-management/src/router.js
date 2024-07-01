import React from "react";
import { Route, Routes } from 'react-router-dom';
import Details from "./pages/Details";
import Edit from "./pages/Edit";
import Home from "./pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="edit/:id" element={<Edit />} />
      <Route path="details/:id" element={<Details />} />

    </Routes>
  );
};

export default Router;
