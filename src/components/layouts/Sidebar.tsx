import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-light-gray p-5 col-span-2 h-screen sticky top-0 left-0 overflow-auto">
      <nav className="flex flex-col">
        <Link to={"/admin"} className="rounded-md hover:bg-dark-gray hover:text-white p-3 bg-gray transition-all truncate">Dashboard</Link>
        <Link to={"/admin/add-service"} className="p-3 bg-gray">Add Service</Link>
        <Link to={"/admin/service-list"} className="p-3 bg-gray">Service List</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
