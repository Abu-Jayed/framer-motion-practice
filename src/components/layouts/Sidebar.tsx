import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-light-gray  col-span-2 h-screen sticky top-0 left-0 overflow-auto p-4 lg:p-5">
      <nav className="flex flex-col gap-2">
        <NavLink
          to={"/admin/dashboard"}
          className={({ isActive }) =>
            cn(
              "rounded-md p-3 bg-gray transition-all flex items-center gap-2",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0"></LayoutDashboard>
          <span className="truncate">Dashboard</span>{" "}
        </NavLink>
        <NavLink
          to={"/admin/add-service"}
          className={({ isActive }) =>
            cn(
              "rounded-md p-3 bg-gray transition-all flex items-center gap-2",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0"></LayoutDashboard>
          <span className="truncate">Add Service</span>{" "}
        </NavLink>
        <NavLink
          to={"/admin/service-list"}
          className={({ isActive }) =>
            cn(
              "rounded-md p-3 bg-gray transition-all flex items-center gap-2",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0"></LayoutDashboard>
          <span className="truncate">Service List</span>{" "}
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
