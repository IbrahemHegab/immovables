import Aside from "./aside";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import CreateModalCustomer from "../Outlet/Customers/actions/CreateModalCustomer";
import CreateModalGallery from "../Outlet/Gallerys/actions/CreateModalGallery";
import UpdateModalGallery from "../Outlet/Gallerys/actions/UpdateModalGallery";
import CreateModalPermission from "../Outlet/Permissions/actions/CreateModalPermission";
import CreateModalEmployees from "../Outlet/Employees/actions/CreateModalEmployees";
import UpdateModalCustomer from "../Outlet/Customers/actions/UpdateModalCustomer";
import UpdateModalEmployees from "../Outlet/Employees/actions/UpdateModalEmployees";
import CreateTaskModel from "../Outlet/Employees/actions/CreateTaskModel";
const OutletDashboard = () => {
 

  return (
    <div className="grid grid-cols-12 gap-2 ">
    {/* <div
      className={`xl:col-span-2 lg:col-span-3 md:col-span-2 sm:col-span-10 bg-gray-900 lg:block md:block xl:block z-10 ${
        SideBar ? "hidden" : "fixed lg:static md:fixed"
      }`}
    > */}
      <Aside />
    {/* </div> */}
    
    <div className="xl:col-span-10 lg:col-span-10 md:col-span-9 col-span-12 mt-16 text-gray-50 overflow-auto h-screen md:bg-blue-600 lg:bg-red-600 xl:bg-green-500">
      <Outlet />
    </div>
    
    {/* Modals */}
    <CreateModalCustomer />
    <UpdateModalCustomer />
    <CreateModalGallery />
    <UpdateModalGallery />
    <CreateModalPermission />
    <CreateModalEmployees />
    <UpdateModalEmployees />
    <CreateTaskModel />
  </div>
  
  );
};

export default OutletDashboard;
