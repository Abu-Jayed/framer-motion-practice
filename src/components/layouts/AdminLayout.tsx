import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </div>
  );
};

export default AdminLayout;
