import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import background from "../../assets/available/image3.jpg";
import Cookies from "js-cookie"
const Auth = () => {
  // useEffect(() => {
  //   Cookies.remove("token")
  //  },[])
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: "100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
       <NavLink to="/" className="fixed z-40 top-5 left-5 bg-gray-800 text-white rounded-md p-3">الصفحة الرئيسيه</NavLink>
      <Outlet />
    </div>
  );
};

export default Auth;
