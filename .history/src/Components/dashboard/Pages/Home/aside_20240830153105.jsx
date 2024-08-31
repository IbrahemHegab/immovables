import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiTable,
  HiUser,
  HiCheckCircle,
} from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  setOpenCustomerModel,
  setOpenEmployeesModel,
  setOpenGalleryModel,
  setOpenPermissionModelModel,
} from "../../../store/SharedStore";
import { NavLink } from "react-router-dom";

const Aside = () => {
  const dispatch = useDispatch();

  return (
    <div></div>
   
  );
};

export default Aside;
