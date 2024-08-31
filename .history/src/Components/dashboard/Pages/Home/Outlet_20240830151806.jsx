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
  const { SideBar } = useSelector((state) => state.sharedStore);

  return (
    <div className="grid grid-cols-12 overflow-scroll grid-flow-col gap-10 ">
      <div
        className={`xl:col-span-2 lg:col-span-3 col-span-10 lg:block md:block xl:block lg:static xlg:static   z-10 ${
          SideBar ? "hidden" : "fixed"
        }`}
      >
        <Aside />
      </div>
      <div className="xl:col-span-10 lg:col-span-10 col-span-12 mt-16   text-gray-50 h-screen ">
        {" "}
        <Outlet />
      </div>
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
