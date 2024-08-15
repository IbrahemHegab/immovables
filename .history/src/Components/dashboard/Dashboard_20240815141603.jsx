import { useState } from "react";

import logo from "../../assets/logo.png";
import preson from "../../assets/available/preson.jpg";
import OutletDashboard from "./Pages/Home/Outlet";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSideBar } from "../store/SharedStore";
import { NavLink } from "react-router-dom";
// import Aside from "./Pages/aside";
const Dashboard = () => {
  const { SideBar } = useSelector((state) => state.sharedStore);
  const dispatch = useDispatch()
 

  return (
    <div>
     

     <OutletDashboard/>
    </div>
  );
};

export default Dashboard;
