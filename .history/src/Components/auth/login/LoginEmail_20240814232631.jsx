import React, { useState } from "react";
import Styles from "../Styles.module.css";
// import { IoEyeSharp } from "react-icons/io5";

import { useNavigate, NavLink } from "react-router-dom";

import facebook from "../../../assets/auth/facebook.svg";
import gmail from "../../../assets/auth/gmail.png";
import apple from "../../../assets/auth/apple.svg";

import Cookies from "cookies-js";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/auth/authSlice";


const LoginEmail = () => {
  const [ShowPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const {data} = useSelector((state)=>state.StoreSliceAuth);

  const [user, setUser] = useState({
    name: "",
    password: "",
  });
  const { name, password } = user;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const Login = async (e) => {
    e.preventDefault();   
    await dispatch(logi(user)).then(function (response) {
      const token =response.payload.data.token
    
      
      // if (token) {

      //   Cookies.set('token', token);
      //   navigate("/")
      // }
        // Cookies.set('userID', response.data._id);

      })
  };
  //   useEffect(() => {
  //     if (token === null || token === "undefined") {
  //      return
  //     }else{
  // navigate("/")
  //     }
  //   }, [token]);
  //   const TogglePassword = () => {
  //     setShowPassword(!ShowPassword);
  //   };
  return (
    <form onSubmit={Login} className={Styles.pusodo}>
      <input
        className={Styles.form}
        type="text"
        placeholder="اسم المسخدم او البريد الالكتروني"
        aria-label="default input example"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <div className={Styles.pusodo}>
        <input
          className={Styles.form}
          type={ShowPassword ? "password" : "text"}
          placeholder="الرقم السري"
          aria-label="default input example"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <a onClick={() => {}} />
      </div>

      <div className={` d-flex justify-content-center`}>
        <button
          type="submit"
          className="bg-gray-900 p-3 rounded-lg text-gray-50"
        
        >
          تسجيل دخول
        </button>
      </div>
      <NavLink to={"/auth"} className="text-gray-900 m-3 underline  underline-offset-2 block	"> نسيت الرقم السري ؟</NavLink>
      <NavLink to={"/auth/signup"} className="text-gray-300 m-3 underline  underline-offset-2	"> تسجيل كمستخدم جديد ؟</NavLink>
      {/* <footer>
        <div className="Continue text-center">
          <span>Or Continue with</span>
        </div>
        <div
          className={`${Styles.footerdiv} container  d-flex justify-content-between col-xxl-12`}
        >
          <div className="d-flex justify-content-center align-items-center">
            <img src={facebook} alt="" />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img src={apple} alt="" />
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <a
              href="http://localhost:3000/auth/google/callback"
              target="_blank"
            >
              {" "}
              <img src={gmail} alt="" />
            </a>
          </div>
        </div>
      </footer> */}
    </form>
  );
};

export default LoginEmail;
