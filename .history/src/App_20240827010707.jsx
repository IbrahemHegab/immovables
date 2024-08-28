import { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./Components/layout/Navbar";
import OurProjects from "./Components/contents/OurProjects";
import OurAchievements from "./Components/contents/OurAchievements";
import Footer from "./Components/layout/Footer";
import Blogs from "./Components/contents/home/Blogs";
import { Outlet } from "react-router-dom";
import Cookies from "js-cookie";

function App() {
 useEffect(() => {
  Cookies.remove()
 },[])

  return (
    <>
    <Navbar/>
    {/* <OurProjects/>
    <OurAchievements/>
    <Blogs/> */}
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;

